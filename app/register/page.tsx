'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AppShell from '@/components/AppShell';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('applicant');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            // Mock registration - just simulate success
            await new Promise(resolve => setTimeout(resolve, 500));

            // In a real app, this would save to database
            // For demo, just redirect to login
            router.push('/login');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AppShell>
            <div className="auth-wrapper">
                <div className="auth-card">
                    <div className="auth-header">
                        <h2>Create Account</h2>
                        <p>Join One-Look Profile today</p>
                    </div>

                    {error && (
                        <div className="error-message">
                            ⚠️ {error}
                        </div>
                    )}

                    <div style={{
                        background: 'rgba(100, 108, 255, 0.1)',
                        padding: '1rem',
                        borderRadius: '8px',
                        marginBottom: '1rem',
                        fontSize: '0.85rem',
                        border: '1px solid rgba(100, 108, 255, 0.2)'
                    }}>
                        <strong>Note:</strong> This is a demo. Registration will redirect you to login. Use the demo credentials to sign in.
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="form-input"
                                placeholder="Choose a username"
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="form-input"
                                placeholder="Create a password"
                            />
                        </div>
                        <div className="form-group">
                            <label>I am a...</label>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button
                                    type="button"
                                    className={`form-input ${role === 'applicant' ? 'selected-role' : ''}`}
                                    style={{
                                        flex: 1,
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        borderColor: role === 'applicant' ? '#646cff' : 'rgba(255,255,255,0.1)',
                                        background: role === 'applicant' ? 'rgba(100, 108, 255, 0.1)' : 'rgba(0,0,0,0.2)'
                                    }}
                                    onClick={() => setRole('applicant')}
                                >
                                    Job Seeker
                                </button>
                                <button
                                    type="button"
                                    className={`form-input ${role === 'recruiter' ? 'selected-role' : ''}`}
                                    style={{
                                        flex: 1,
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        borderColor: role === 'recruiter' ? '#646cff' : 'rgba(255,255,255,0.1)',
                                        background: role === 'recruiter' ? 'rgba(100, 108, 255, 0.1)' : 'rgba(0,0,0,0.2)'
                                    }}
                                    onClick={() => setRole('recruiter')}
                                >
                                    Recruiter
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="btn-auth" disabled={isLoading}>
                            {isLoading ? 'Creating Account...' : 'Get Started'}
                        </button>
                    </form>

                    <div className="auth-footer">
                        Already have an account?
                        <Link href="/login" className="auth-link">Sign In</Link>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}
