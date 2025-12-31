import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool, { initDB } from './db.js';

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_super_secret_key_change_in_prod';

app.use(cors());
app.use(express.json());

// Middleware to authenticate JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// --- AUTH ROUTES ---

// Register
app.post('/api/auth/register', async (req, res) => {
    const { username, password, role } = req.body;
    if (!username || !password || !role) {
        return res.status(400).json({ error: 'Missing fields' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO users (username, password_hash, role) VALUES ($1, $2, $3) RETURNING id, username, role',
            [username, hashedPassword, role]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        if (error.code === '23505') { // Unique violation
            return res.status(409).json({ error: 'Username already exists' });
        }
        res.status(500).json({ error: 'Server error' });
    }
});

// Login
app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (result.rows.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

        const user = result.rows[0];
        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) return res.status(401).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// --- PROFILE ROUTES ---

// Get All Profiles
app.get('/api/profiles', async (req, res) => {
    try {
        const result = await pool.query(`
      SELECT p.*, u.role, u.username
      FROM profiles p
      JOIN users u ON p.user_id = u.id
    `);

        // Parse raw_data and merge with ID
        const profiles = result.rows.map(row => {
            let data = {};
            try {
                data = JSON.parse(row.raw_data);
            } catch (e) {
                console.error("Failed to parse profile data", e);
            }
            return {
                ...data,
                id: row.id, // Profile ID
                userId: row.user_id,
                username: row.username
            };
        });

        res.json(profiles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get Specific Profile
app.get('/api/profiles/:userId', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM profiles WHERE user_id = $1', [req.params.userId]);
        if (result.rows.length === 0) return res.status(404).json({ error: 'Profile not found' });

        const row = result.rows[0];
        let data = {};
        try {
            data = JSON.parse(row.raw_data);
        } catch (e) { }

        res.json({ ...data, id: row.id, userId: row.user_id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Create/Update Profile (Protected)
app.post('/api/profiles', authenticateToken, async (req, res) => {
    const profileData = req.body;
    const userId = req.user.id;

    // Clean up: separate ID if present (don't store ID inside raw_data as it might conflict)
    // Actually the frontend might send ID.
    const rawData = JSON.stringify(profileData);

    try {
        // Check if profile exists
        const check = await pool.query('SELECT * FROM profiles WHERE user_id = $1', [userId]);

        if (check.rows.length > 0) {
            // Update
            const update = await pool.query(
                `UPDATE profiles 
         SET raw_data = $1
         WHERE user_id = $2 RETURNING *`,
                [rawData, userId]
            );
            res.json({ ...profileData, id: update.rows[0].id });
        } else {
            // Insert
            const insert = await pool.query(
                `INSERT INTO profiles (user_id, raw_data)
         VALUES ($1, $2) RETURNING *`,
                [userId, rawData]
            );
            res.json({ ...profileData, id: insert.rows[0].id });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(PORT, async () => {
    await initDB();
    console.log(`Server running on http://localhost:${PORT}`);
});
