import React from 'react';
import { Accordion } from '@/components/Accordion';

export default function AccodionGuide() {
    const accordionData = [
        { title: '섹션 1', content: '여기는 섹션 1의 콘텐츠입니다.' },
        {
            title: '섹션 2',
            content: (
                <p>
                    여기는 <strong>섹션 2</strong>의 콘텐츠입니다.
                </p>
            ),
        },
        { title: '섹션 3', content: '여기는 섹션 3의 콘텐츠입니다.' },
    ];
    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="guide__title">Accordion</h2>
            <div className="guide__content">
                {/* 단일 아코디언, 기본적으로 첫 번째 항목 열림 */}
                <p className="accordion-tit">단일 아코디언</p>
                <Accordion
                    items={accordionData}
                    allowMultiple={false}
                    defaultOpenIndexes={[0]}
                />
                <div className="accordion-box">
                    <p className="accordion-tit">다중 아코디언</p>

                    {/* 다중 아코디언, 기본적으로 첫 번째와 두 번째 항목 열림 */}
                    <Accordion
                        items={accordionData}
                        allowMultiple={true}
                        defaultOpenIndexes={[0, 1]}
                    />
                </div>
            </div>
        </div>
    );
}
