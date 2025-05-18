import React from 'react';
import { Tabs } from '@/components';

export default function TabGuide() {
    const fruitOptions = [
        { label: 'apple', value: 'apple' },
        { label: 'banana', value: 'banana' },
        { label: 'watermelon', value: 'watermelon' },
        { label: 'orange', value: 'orange' },
        { label: 'peach', value: 'peach' },
    ];
    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="guide__title">Tab</h2>
            <div className="guide__content">
                <Tabs defaultIndex={1}>
                    <Tabs.TabList>
                        <Tabs.Tab index={0}>홈</Tabs.Tab>
                        <Tabs.Tab index={1}>프로필</Tabs.Tab>
                        <Tabs.Tab index={2}>설정</Tabs.Tab>
                    </Tabs.TabList>

                    <Tabs.TabPanel index={0}>
                        <div>🏠 홈 화면입니다.</div>
                    </Tabs.TabPanel>
                    <Tabs.TabPanel index={1}>
                        <div>👤 프로필 화면입니다.</div>
                    </Tabs.TabPanel>
                    <Tabs.TabPanel index={2}>
                        <div>⚙️ 설정 화면입니다.</div>
                    </Tabs.TabPanel>
                </Tabs>
            </div>
        </div>
    );
}
