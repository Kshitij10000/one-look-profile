'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

interface NavbarProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

export default function Navbar({ searchQuery, onSearchChange }: NavbarProps) {
    const { user, logout } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    // Clear search when user logs out or when on login/register pages
    useEffect(() => {
        if (!user || pathname === '/login' || pathname === '/register') {
            onSearchChange('');
        }
    }, [user, pathname, onSearchChange]);

    return (
        <nav className={`top-bar ${pathname === '/create' ? 'blue-nav' : ''}`}>
            <div className="logo" onClick={() => router.push('/')}>
                <span style={{ fontSize: '1.8rem' }}>✨</span> OpenPages
            </div>
            {user && pathname !== '/login' && pathname !== '/register' && (
                <div className="search-wrapper">
                    <input
                        className="search-input"
                        placeholder="Search profiles, titles, skills..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
            )}
            <div className="controls">
                {user ? (
                    <div className="user-profile-section">
                        <span className="user-name" style={{ color: pathname === '/create' ? '#fff' : 'var(--accent-color)', fontWeight: 'bold' }}>
                            {user.username}
                            {pathname !== '/create' && <span className="user-role">{user.role}</span>}
                        </span>

                        {user.role === 'applicant' && (
                            <button className="btn-primary btn-icon" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }} onClick={() => router.push('/create')}>
                                <span>✎</span> Edit
                            </button>
                        )}
                        <button className="btn-logout" onClick={() => { logout(); router.push('/login'); }}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                        <span className="nav-link" onClick={() => router.push('/help')}>Help</span>
                        <span className="nav-link" onClick={() => router.push('/contact')}>Contact Us</span>
                    </div>
                )}
            </div>
        </nav>
    );
}
