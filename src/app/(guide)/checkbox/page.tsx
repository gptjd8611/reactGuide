'use client';

import React from 'react';
import { Guide, GuideMenu, CheckboxGuide } from '@/guide';
import Link from 'next/link';

export default function CheckboxGuidePage() {
    return (
        <>
            <div className='guide-main'>
                <GuideMenu/>
                <div className='guide-main__content guide-main__content--sub'>
                    <Guide title="Checkbox">
                        <CheckboxGuide/>
                    </Guide>
                </div>
            </div>
        </>
    );
}
