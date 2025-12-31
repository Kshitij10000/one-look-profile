'use client';

import React from 'react';
import AppShell from '@/components/AppShell';

export default function Contact() {
    return (
        <AppShell>
            <div className="home-container" style={{
                height: 'calc(100vh - 100px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact Us</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    We are here to help you succeed.
                </p>

                <div style={{
                    padding: '2rem 4rem',
                    background: 'rgba(100, 108, 255, 0.1)',
                    borderRadius: '16px',
                    border: '1px solid rgba(100, 108, 255, 0.2)'
                }}>
                    <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Support Email</span>
                    <a href="mailto:amin@onelookprofile.com" style={{ fontSize: '1.8rem', color: '#646cff', fontWeight: '600', textDecoration: 'none' }}>
                        amin@onelookprofile.com
                    </a>
                </div>
            </div>
        </AppShell>
    );
}
