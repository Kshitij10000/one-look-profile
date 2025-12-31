'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Profile from '@/components/Profile';
import AppShell from '@/components/AppShell';
import { mockProfiles } from '@/lib/mockData';

export default function ProfilePage() {
    const params = useParams();
    const id = params?.id as string;

    const profile = id ? mockProfiles.find(p => p.id == parseInt(id)) : null;

    if (!profile) {
        return (
            <AppShell>
                <div style={{ padding: 50, textAlign: 'center' }}>Profile not found</div>
            </AppShell>
        );
    }

    return (
        <AppShell>
            <div className="preview-pane" style={{ padding: 0, justifyContent: 'center', background: '#555' }}>
                <div style={{ transform: 'scale(0.9)', transformOrigin: 'top center', marginTop: 40 }}>
                    <Profile profile={profile} />
                </div>
            </div>
        </AppShell>
    );
}
