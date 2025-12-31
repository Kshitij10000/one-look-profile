import React from 'react';
import '../styles/Home.css'; // Re-use main styles for consistency

export default function Help() {
    return (
        <div className="home-container" style={{ paddingTop: '50px', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>How One-Look Profile Works</h1>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#646cff', marginBottom: '0.5rem' }}>1. Create Your Profile</h3>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                        Sign up and use our live editor to build a visual profile. Add your skills, experience, and projects in a structured, easy-to-read format.
                        What you see in the editor is exactly what recruiters will see.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#646cff', marginBottom: '0.5rem' }}>2. Publish & Share</h3>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                        Once your profile is ready, publish it to the platform. You can share your unique profile link with anyone, anywhere.
                    </p>
                </section>

                <section>
                    <h3 style={{ color: '#646cff', marginBottom: '0.5rem' }}>3. Get Hired</h3>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                        Recruiters browse the "Featured Profiles" section to find top talent. Your profile stands out with verified skills and a clean, professional look.
                    </p>
                </section>
            </div>
        </div>
    );
}
