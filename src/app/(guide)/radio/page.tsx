'use client';

import React from 'react';
import { Guide, GuideMenu, RadioGuide } from '@/guide';
import Link from 'next/link';

export default function RadioGuidePage() {
    return (
        <>
            <div className='guide-main'>
                <GuideMenu/>
                <div className='guide-main__content guide-main__content--sub'>
                    <Guide title="Radio">
                        <RadioGuide/>
                    </Guide>
                </div>
            </div>
        </>
    );
}
