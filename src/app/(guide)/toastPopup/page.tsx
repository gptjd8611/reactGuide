'use client';

import React from 'react';
import { Guide, GuideMenu, ToastPopupGuide } from '@/guide';
import { ToastProvider } from '@/components/ToastPopup/ToastProvider';

export default function AccodionGuidePage() {
    return (
        <>
            <div className="guide-main">
                <GuideMenu />
                <div className="guide-main__content guide-main__content--sub">
                    <Guide title="ToastPopup">
                        <ToastProvider>
                            <ToastPopupGuide />
                        </ToastProvider>
                    </Guide>
                </div>
            </div>
        </>
    );
}
