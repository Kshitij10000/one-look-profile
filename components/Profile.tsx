'use client';

import React, { useState } from 'react';

interface ProfileProps {
    profile: any;
}

export default function Profile({ profile }: ProfileProps) {
    const { personalInfo, skills, experience, projects } = profile;
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="profile-dashboard">
            {/* Hero Header */}
            <header className="profile-hero">
                <div className="hero-backdrop"></div>
                <div className="hero-content">
                    <div className="avatar-circle">
                        {personalInfo.fullName.charAt(0)}
                    </div>
                    <div className="hero-text">
                        <h1 className="hero-name">{personalInfo.fullName}</h1>
                        <h2 className="hero-title">{personalInfo.title}</h2>
                        <div className="hero-badges">
                            <span className="badge location">📍 {personalInfo.location || 'Remote'}</span>
                            <span className="badge status">● Open to Work</span>
                        </div>
                    </div>
                    <div className="hero-actions">
                        <a href={`mailto:${personalInfo.email}`} className="action-btn primary">
                            Contact Me
                        </a>
                        <div className="social-links">
                            {Object.entries(personalInfo.socials).map(([key, val]) => (
                                val && <a key={key} href={`https://${val}`} target="_blank" rel="noreferrer" className="social-icon" title={key}>
                                    {key.charAt(0).toUpperCase()}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Grid */}
            <div className="profile-grid">
                {/* Left Column: Summary & Skills */}
                <aside className="profile-sidebar">
                    <div className="card summary-card">
                        <h3>About</h3>
                        <p>{personalInfo.summary || "No summary provided."}</p>
                    </div>

                    <div className="card skills-card">
                        <h3>Expertise</h3>
                        <div className="skills-container">
                            {skills.map((cat: any, idx: number) => (
                                <div key={idx} className="skill-group">
                                    <h4>{cat.category}</h4>
                                    <div className="tags">
                                        {cat.items.map((skill: string, sIdx: number) => (
                                            <span key={sIdx} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card contact-card">
                        <h3>Connect</h3>
                        <div className="contact-row">
                            <span>📧</span> {personalInfo.email}
                        </div>
                        {personalInfo.phone && (
                            <div className="contact-row">
                                <span>📱</span> {personalInfo.phone}
                            </div>
                        )}
                    </div>
                </aside>

                {/* Right Column: Experience & Projects */}
                <main className="profile-main">
                    <section className="dashboard-section">
                        <div className="section-header-row">
                            <h3>Experience</h3>
                            <div className="line-dec"></div>
                        </div>
                        <div className="timeline-container">
                            {experience.length > 0 ? experience.map((exp: any) => (
                                <div key={exp.id} className="timeline-entry">
                                    <div className="entry-marker"></div>
                                    <div className="entry-content card-hover">
                                        <div className="entry-header">
                                            <h4 className="entry-role">{exp.role}</h4>
                                            <span className="entry-duration">{exp.duration}</span>
                                        </div>
                                        <h5 className="entry-company">{exp.company}</h5>
                                        <p className="entry-desc">{exp.description}</p>
                                    </div>
                                </div>
                            )) : <p className="empty-text">No experience added yet.</p>}
                        </div>
                    </section>

                    <section className="dashboard-section">
                        <div className="section-header-row">
                            <h3>Featured Projects</h3>
                            <div className="line-dec"></div>
                        </div>
                        <div className="projects-grid-view">
                            {projects.length > 0 ? projects.map((proj: any) => (
                                <div key={proj.id} className="project-box card-hover">
                                    <div className="project-top">
                                        <h4>{proj.name}</h4>
                                        {proj.link && <a href={`https://${proj.link}`} target="_blank" rel="noreferrer">↗</a>}
                                    </div>
                                    <span className="project-role-tag">{proj.role}</span>
                                    <p>{proj.description}</p>
                                </div>
                            )) : <p className="empty-text">No projects added yet.</p>}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
