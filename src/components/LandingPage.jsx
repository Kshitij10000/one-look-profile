import React from 'react';
import { useNavigate } from 'react-router-dom';
import InfiniteScroller from './InfiniteScroller';
import '../styles/Home.css';

export default function LandingPage() {
    const navigate = useNavigate();

    const skills = [
        "React Native", "Python Master", "Full Stack", "Data Scientist",
        "UI/UX Designer", "DevOps Engineer", "Product Manager", "Rustacean",
        "GoLang Expert", "Cloud Architect"
    ];

    const roles = [
        "Senior Developer", "Tech Lead", "CTO", "Freelancer",
        "Consultant", "Engineering Manager", "System Architect"
    ];

    return (
        <div className="landing-container">
            <div className="landing-hero">
                <div className="glow-effect top-left"></div>
                <div className="glow-effect bottom-right"></div>

                <h1 className="hero-title">
                    Hire <span className="gradient-text">Excellence</span>.<br />
                    At First Glance.
                </h1>
                <p className="hero-subtitle">
                    The modern way to showcase talent. Visual, verified, and vibrant profiles
                    that speak louder than resumes.
                </p>

                <div className="hero-actions">
                    <button className="btn-primary large" onClick={() => navigate('/register')}>
                        Get Started
                    </button>
                    <button className="btn-secondary large" onClick={() => navigate('/login')}>
                        Login
                    </button>
                </div>
            </div>

            <div className="scrollers-section">
                <InfiniteScroller items={skills} speed={25} direction="left" />
                <InfiniteScroller items={roles} speed={30} direction="right" />
            </div>
        </div>
    );
}
