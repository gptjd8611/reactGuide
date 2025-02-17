'use client';

import React from 'react';
import { Guide, GuideMenu, AlertGuide } from '@/guide';
import Link from 'next/link';

export default function AlertGuidePage() {
    return (
        <>
            <div className='guide-main'>
                <GuideMenu/>
                <div className='guide-main__content guide-main__content--sub'>
                    <Guide title="Alert">
                        <AlertGuide/>
                    </Guide>
                </div>
            </div>
        </>
    );
}
