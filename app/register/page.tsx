'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import AppShell from '@/components/AppShell';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [role, setRole] = useState('applicant');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { signUp } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setIsLoading(true);

        try {
            if (password.length < 6) {
                throw new Error('Password must be at least 6 characters');
            }

            const { error: signUpError } = await signUp(
                email.trim(),
                password,
                role,
                fullName.trim()
            );

            if (signUpError) {
                throw new Error(signUpError.message || 'Registration failed');
            }

            setSuccess('Account created successfully! Redirecting to login...');
            setTimeout(() => {
                router.push('/login');
            }, 2000);
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

                    {success && (
                        <div style={{
                            background: 'rgba(34, 197, 94, 0.1)',
                            padding: '1rem',
                            borderRadius: '8px',
                            marginBottom: '1rem',
                            fontSize: '0.85rem',
                            border: '1px solid rgba(34, 197, 94, 0.3)',
                            color: '#22c55e'
                        }}>
                            ✓ {success}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                                className="form-input"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="form-input"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={6}
                                className="form-input"
                                placeholder="Create a password (min 6 characters)"
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
