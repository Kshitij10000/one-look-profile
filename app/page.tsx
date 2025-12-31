'use client';

import React, { useState, useEffect } from 'react';
import Home from '@/components/Home';
import AppShell from '@/components/AppShell';

export default function HomePage() {
    const [profiles, setProfiles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        loadProfiles();
    }, []);

    const loadProfiles = async () => {
        try {
            const response = await fetch('/api/profiles');

            if (response.ok) {
                const data = await response.json();
                if (data.profiles) {
                    // Map database structure to component structure
                    const mappedProfiles = data.profiles.map((p: any) => ({
                        id: p.id,
                        personalInfo: p.personal_info,
                        skills: p.skills,
                        experience: p.experience,
                        projects: p.projects,
                    }));
                    setProfiles(mappedProfiles);
                }
            }
        } catch (error) {
            console.error('Error loading profiles:', error);
        } finally {
            setLoading(false);
        }
    };

    const filteredProfiles = profiles.filter(p => {
        const q = searchQuery.trim().toLowerCase();
        if (!q) return true;
        const name = p.personalInfo?.fullName?.toLowerCase() || '';
        const title = p.personalInfo?.title?.toLowerCase() || '';
        const skillsText = (p.skills || []).flatMap((cat: any) => cat.items || []).join(' ').toLowerCase();
        return name.includes(q) || title.includes(q) || skillsText.includes(q);
    });

    if (loading) {
        return (
            <AppShell>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                    <p>Loading profiles...</p>
                </div>
            </AppShell>
        );
    }

    return (
        <AppShell>
            <HomeContent profiles={filteredProfiles} />
        </AppShell>
    );
}

function HomeContent({ profiles }: any) {
    return <Home profiles={profiles} />;
}
