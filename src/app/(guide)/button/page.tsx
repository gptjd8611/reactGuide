'use client';

import React from 'react';
import { Guide, GuideMenu, ButtonGuide } from '@/guide';
import Link from 'next/link';

export default function ButtonGuidePage() {
    return (
        <>
            <div className='guide-main'>
                <GuideMenu/>
                <div className='guide-main__content guide-main__content--sub'>
                    <Guide title="Button">
                        <ButtonGuide/>
                    </Guide>
                </div>
            </div>
        </>
    );
}
