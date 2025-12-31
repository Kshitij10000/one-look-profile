'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import LandingPage from './LandingPage';
import ProfileCard from './ProfileCard';

interface HomeProps {
    profiles: any[];
}

export default function Home({ profiles }: HomeProps) {
    const router = useRouter();
    const { user } = useAuth();

    if (!user) {
        return <LandingPage />;
    }

    return (
        <div className="home-container">
            <section className="discovery-section">
                <div className="section-header">
                    <h2>Featured Profiles</h2>
                    <span className="count-badge">{profiles.length} Candidates</span>
                </div>

                {profiles.length === 0 ? (
                    <div className="empty-state">
                        <p>No profiles yet. Be the first to join!</p>
                        <button
                            className="btn-primary"
                            onClick={() => router.push('/create')}
                            style={{ marginTop: '1rem' }}
                        >
                            Create Profile
                        </button>
                    </div>
                ) : (
                    <div className="profiles-grid">
                        {profiles.map(profile => (
                            <ProfileCard
                                key={profile.id}
                                profile={profile}
                                onClick={() => router.push(`/profile/${profile.id}`)}
                            />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
