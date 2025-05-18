'use client';

import React from 'react';
import { Guide, GuideMenu, TabGuide } from '@/guide';
import Link from 'next/link';

export default function TabGuidePage() {
    return (
        <>
            <div className="guide-main">
                <GuideMenu />
                <div className="guide-main__content guide-main__content--sub">
                    <Guide title="Tab">
                        <TabGuide />
                    </Guide>
                </div>
            </div>
        </>
    );
}
