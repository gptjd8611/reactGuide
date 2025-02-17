'use client';

import React from 'react';
import Link from 'next/link';
import { Guide, GuideMenu, InputGuide, ButtonGuide } from '@/guide';

export default function page() {
    return (
        <>
            <div className='guide-main'>
                <GuideMenu />
                <div className='guide-main__content'>
                    <ButtonGuide />
                </div>
            </div>
        </>
    );
}
