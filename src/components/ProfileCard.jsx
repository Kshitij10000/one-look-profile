import React from 'react';
import '../styles/ProfileCard.css';

export default function ProfileCard({ profile, onClick }) {
    const { personalInfo, skills } = profile;
    const topSkills = (skills || []).flatMap(cat => cat.items || []).slice(0, 3);
    const initials = personalInfo && personalInfo.fullName ?
        personalInfo.fullName.split(' ').map(n => n?.[0] || '').slice(0, 2).join('').toUpperCase()
        : 'U';

    return (
        <div className="profile-card" onClick={onClick}>
            <div className="card-header">
                <div className="card-avatar" aria-hidden>
                    {initials}
                </div>
                <div className="card-identity">
                    <h3 className="card-name">{personalInfo?.fullName || 'Unnamed'}</h3>
                    <p className="card-title">{personalInfo?.title || '—'}</p>
                </div>
            </div>

            <div className="card-body">
                <p className="card-summary">{personalInfo.summary.substring(0, 80)}...</p>

                <div className="card-skills">
                    {topSkills.map((skill, idx) => (
                        <span key={idx} className="card-skill-tag">{skill}</span>
                    ))}
                    {skills.length > 0 && <span className="card-more-tag">...</span>}
                </div>
            </div>

            <div className="card-footer">
                <button className="view-profile-btn">View Profile</button>
            </div>
        </div>
    );
}
