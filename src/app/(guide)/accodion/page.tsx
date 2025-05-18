'use client';

import React from 'react';
import { Guide, GuideMenu, AccodionGuide } from '@/guide';

export default function AccodionGuidePage() {
    return (
        <>
            <div className="guide-main">
                <GuideMenu />
                <div className="guide-main__content guide-main__content--sub">
                    <Guide title="Accordion">
                        <AccodionGuide />
                    </Guide>
                </div>
            </div>
        </>
    );
}
