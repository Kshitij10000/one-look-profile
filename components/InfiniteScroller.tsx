'use client';

import React from 'react';

interface InfiniteScrollerProps {
    items: string[];
    speed?: number;
    direction?: 'left' | 'right';
}

export default function InfiniteScroller({ items, speed = 20, direction = 'left' }: InfiniteScrollerProps) {
    return (
        <div className="scroller-container">
            <div className="scroller-mask">
                <div
                    className={`scroller-inner ${direction}`}
                    style={{ '--speed': `${speed}s` } as React.CSSProperties}
                >
                    <div className="scroller-content">
                        {items.map((item, idx) => (
                            <div key={`original-${idx}`} className="scroller-item">
                                {item}
                            </div>
                        ))}
                    </div>
                    {/* Duplicate for seamless effect */}
                    <div className="scroller-content" aria-hidden="true">
                        {items.map((item, idx) => (
                            <div key={`dupe-${idx}`} className="scroller-item">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
