import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LandingPage from './LandingPage';
import ProfileCard from './ProfileCard';
import '../styles/Home.css';

export default function Home({ profiles }) {
    const navigate = useNavigate();
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
                            onClick={() => navigate('/create')}
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
                                onClick={() => navigate(`/profile/${profile.id}`)}
                            />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
