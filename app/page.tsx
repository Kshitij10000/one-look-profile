'use client';

import React, { useState } from 'react';
import Home from '@/components/Home';
import AppShell from '@/components/AppShell';
import { mockProfiles } from '@/lib/mockData';

export default function HomePage() {
    const [profiles] = useState(mockProfiles);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProfiles = profiles.filter(p => {
        const q = searchQuery.trim().toLowerCase();
        if (!q) return true;
        const name = p.personalInfo?.fullName?.toLowerCase() || '';
        const title = p.personalInfo?.title?.toLowerCase() || '';
        const skillsText = (p.skills || []).flatMap((cat: any) => cat.items || []).join(' ').toLowerCase();
        return name.includes(q) || title.includes(q) || skillsText.includes(q);
    });

    return (
        <AppShell>
            <HomeContent profiles={filteredProfiles} searchQuery={searchQuery} />
        </AppShell>
    );
}

function HomeContent({ profiles }: any) {
    return <Home profiles={profiles} />;
}
