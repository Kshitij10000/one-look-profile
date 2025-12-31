import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        role: 'applicant' // Default role
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Registration failed');
            }

            navigate('/login');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="auth-container" style={{ maxWidth: 400, margin: '50px auto', padding: 20 }}>
            <h2>Register</h2>
            {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: 8, marginTop: 5 }}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: 8, marginTop: 5 }}
                    />
                </div>
                <div>
                    <label>I am a:</label>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        style={{ width: '100%', padding: 8, marginTop: 5 }}
                    >
                        <option value="applicant">Applicant</option>
                        <option value="recruiter">Recruiter</option>
                    </select>
                </div>
                <button type="submit" style={{ padding: 10, cursor: 'pointer' }}>Register</button>
            </form>
            <p style={{ marginTop: 15 }}>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
};

export default Register;
