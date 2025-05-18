import React, { useState } from 'react';
// 아코디언 항목의 타입 정의
interface AccordionItemProps {
    title: string | React.ReactNode;
    content: string | React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
    id: string; // 접근성을 위한 고유 ID
}
// 개별 아코디언 항목 컴포넌트
export default function AccordionItem({
    title,
    content,
    isOpen,
    onToggle,
    id,
}: AccordionItemProps) {
    return (
        <div className="accordion-item">
            <button
                className={isOpen ? 'accordion-title on' : 'accordion-title'}
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`content-${id}`}
                id={`title-${id}`}
            >
                <h3>{title}</h3>
                <span>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div
                    className="accordion-content"
                    id={`content-${id}`}
                    role="region"
                    aria-labelledby={`title-${id}`}
                >
                    {content}
                </div>
            )}
        </div>
    );
}
