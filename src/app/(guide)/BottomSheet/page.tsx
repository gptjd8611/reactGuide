'use client';

import React from 'react';
import { Guide, GuideMenu, BottomSheetGuide } from '@/guide';
import Link from 'next/link';

export default function BottomSheetGuidePage() {
    return (
        <>
            <div className="guide-main">
                <GuideMenu />
                <div className="guide-main__content guide-main__content--sub">
                    <Guide title="BottomSheet">
                        <BottomSheetGuide />
                    </Guide>
                </div>
            </div>
        </>
    );
}
