'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { mockUsers } from '@/lib/mockData';
import AppShell from '@/components/AppShell';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            // Mock authentication - check against hardcoded users
            // Trim whitespace from inputs
            const trimmedUsername = username.trim();
            const trimmedPassword = password.trim();

            console.log('Login attempt:', { trimmedUsername, trimmedPassword });
            console.log('Available users:', mockUsers);

            const user = mockUsers.find(
                u => u.username === trimmedUsername && u.password === trimmedPassword
            );

            console.log('Found user:', user);

            if (!user) {
                throw new Error('Invalid username or password');
            }

            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 500));

            // Mock token
            const token = 'mock-jwt-token-' + Date.now();

            login({
                id: user.id,
                username: user.username,
                role: user.role
            }, token);

            router.push('/');
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
                        <h2>Welcome Back</h2>
                        <p>Sign in to continue to One-Look Profile</p>
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
                        <strong>Demo Credentials:</strong><br/>
                        <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <button
                                type="button"
                                onClick={() => { setUsername('applicant'); setPassword('password123'); }}
                                style={{
                                    padding: '0.3rem 0.8rem',
                                    background: 'rgba(100, 108, 255, 0.2)',
                                    border: '1px solid rgba(100, 108, 255, 0.3)',
                                    borderRadius: '6px',
                                    color: '#fff',
                                    fontSize: '0.8rem',
                                    cursor: 'pointer'
                                }}
                            >
                                Use Applicant
                            </button>
                            <button
                                type="button"
                                onClick={() => { setUsername('recruiter'); setPassword('password123'); }}
                                style={{
                                    padding: '0.3rem 0.8rem',
                                    background: 'rgba(100, 108, 255, 0.2)',
                                    border: '1px solid rgba(100, 108, 255, 0.3)',
                                    borderRadius: '6px',
                                    color: '#fff',
                                    fontSize: '0.8rem',
                                    cursor: 'pointer'
                                }}
                            >
                                Use Recruiter
                            </button>
                        </div>
                        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.8 }}>
                            Or manually enter - Applicant: <code>applicant</code> / <code>password123</code>
                        </div>
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
                                placeholder="Enter your username"
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
                                placeholder="Enter your password"
                            />
                        </div>
                        <button type="submit" className="btn-auth" disabled={isLoading}>
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="auth-footer">
                        Don&apos;t have an account?
                        <Link href="/register" className="auth-link">Get Started</Link>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}
