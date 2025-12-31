import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useParams, useNavigate } from 'react-router-dom';
import Editor from './components/Editor'
import Profile from './components/Profile'
import Home from './components/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Help from './pages/Help'
import Contact from './pages/Contact'
import { AuthProvider, useAuth } from './context/AuthContext'
import { defaultProfile } from './data/schema'
import './App.css'

function AppContent() {
    const [profiles, setProfiles] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentProfile, setCurrentProfile] = useState(defaultProfile);
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Clear search when user logs out or when on login/register pages
    useEffect(() => {
        if (!user || location.pathname === '/login' || location.pathname === '/register') {
            setSearchQuery('');
        }
    }, [user, location.pathname]);

    // Fetch profiles from backend
    useEffect(() => {
        fetch('http://localhost:3000/api/profiles')
            .then(res => res.json())
            .then(data => setProfiles(data))
            .catch(err => console.error("Failed to fetch profiles", err));
    }, []);

    const handlePublish = async (profileToPublish) => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch('http://localhost:3000/api/profiles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(profileToPublish)
            });
            if (res.ok) {
                const updatedProfile = await res.json();
                // Update local state
                setProfiles(prev => {
                    const idx = prev.findIndex(p => p.id === updatedProfile.id);
                    if (idx >= 0) {
                        const newArr = [...prev];
                        newArr[idx] = updatedProfile;
                        return newArr;
                    }
                    return [updatedProfile, ...prev];
                });
                alert('Profile published successfully!');
                navigate('/');
            } else {
                alert('Failed to publish profile');
            }
        } catch (error) {
            console.error(error);
            alert('Error publishing profile');
        }
    };

    return (
        <div className="app-shell">
            <nav className={`top-bar ${location.pathname === '/create' ? 'blue-nav' : ''}`}>
                <div className="logo" onClick={() => navigate('/')}>
                    <span style={{ fontSize: '1.8rem' }}>✨</span> One-Look Profile
                </div>
                {user && location.pathname !== '/login' && location.pathname !== '/register' && (
                    <div className="search-wrapper">
                        <input
                            className="search-input"
                            placeholder="Search profiles, titles, skills..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                )}
                <div className="controls">
                    {user ? (
                        <div className="user-profile-section">
                            <span className="user-name" style={{ color: useLocation().pathname === '/create' ? '#fff' : 'var(--accent-color)', fontWeight: 'bold' }}>
                                {user.username}
                                {!useLocation().pathname === '/create' && <span className="user-role">{user.role}</span>}
                            </span>

                            {user.role === 'applicant' && (
                                <button className="btn-primary btn-icon" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }} onClick={() => navigate('/create')}>
                                    <span>✎</span> Edit
                                </button>
                            )}
                            <button className="btn-logout" onClick={() => { logout(); navigate('/login'); }}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                            <span className="nav-link" onClick={() => navigate('/help')}>Help</span>
                            <span className="nav-link" onClick={() => navigate('/contact')}>Contact Us</span>
                        </div>
                    )}
                </div>
            </nav>

            <div className="main-layout">
                <Routes>
                    <Route path="/" element={<Home profiles={profiles.filter(p => {
                        const q = searchQuery.trim().toLowerCase();
                        if (!q) return true;
                        const name = p.personalInfo?.fullName?.toLowerCase() || '';
                        const title = p.personalInfo?.title?.toLowerCase() || '';
                        const skillsText = (p.skills || []).flatMap(cat => cat.items || []).join(' ').toLowerCase();
                        return name.includes(q) || title.includes(q) || skillsText.includes(q);
                    })} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/contact" element={<Contact />} />

                    <Route path="/create" element={
                        user && user.role === 'applicant' ? (
                            <div className="split-view" style={{ display: 'flex', width: '100%', height: '100%' }}>
                                <div className="editor-pane light-mode-forced">
                                    <Editor
                                        profile={currentProfile}
                                        onUpdate={setCurrentProfile}
                                        onPublish={handlePublish}
                                    />
                                </div>
                                <div className="preview-pane">
                                    <Profile profile={currentProfile} />
                                </div>
                            </div>
                        ) : <Navigate to="/login" />
                    } />

                    <Route path="/profile/:id" element={<ProfileWrapper profiles={profiles} />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </div>
    );
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <AppContent />
            </Router>
        </AuthProvider>
    )
}

function ProfileWrapper({ profiles }) {
    const { id } = useParams();
    // Start with integer check if needed, but data uses IDs.
    // Backend IDs are integers probably, but let's compare loosely or cast.
    const profile = profiles.find(p => p.id == id); // Loose equality for string/number

    if (!profile) return <div style={{ padding: 50, textAlign: 'center' }}>Profile not found</div>;

    return (
        <div className="preview-pane" style={{ padding: 0, justifyContent: 'center', background: '#555' }}>
            <div style={{ transform: 'scale(0.9)', transformOrigin: 'top center', marginTop: 40 }}>
                <Profile profile={profile} />
            </div>
        </div>
    );
}

export default App

