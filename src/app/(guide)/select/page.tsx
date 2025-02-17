'use client';

import React from 'react';
import { Guide, GuideMenu, SelectGuide } from '@/guide';
import Link from 'next/link';

export default function TooltipGuidePage() {
    return (
        <>
            <div className='guide-main'>
                <GuideMenu/>
                <div className='guide-main__content guide-main__content--sub'>
                    <Guide title="Select">
                        <SelectGuide/>
                    </Guide>
                </div>
            </div>
        </>
    );
}


