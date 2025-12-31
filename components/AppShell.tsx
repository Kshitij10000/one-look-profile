'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';

export default function AppShell({ children }: { children: React.ReactNode }) {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="app-shell">
            <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            <div className="main-layout">
                {React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, { searchQuery } as any);
                    }
                    return child;
                })}
            </div>
        </div>
    );
}
