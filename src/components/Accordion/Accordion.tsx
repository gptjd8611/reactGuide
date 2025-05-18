import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

interface AccordionProps {
    items: {
        title: string | React.ReactNode;
        content: string | React.ReactNode;
    }[];
    allowMultiple?: boolean;
    defaultOpenIndexes?: number[]; // 초기 열림 상태 지정
}
// 아코디언 컨테이너 컴포넌트
export default function Accordion({
    items,
    allowMultiple = false,
    defaultOpenIndexes = [],
}: AccordionProps) {
    // 단일/다중 열림 상태 관리
    const [openIndexes, setOpenIndexes] = useState<number[] | number | null>(
        allowMultiple ? defaultOpenIndexes : (defaultOpenIndexes[0] ?? null),
    );

    const handleToggle = (index: number) => {
        if (allowMultiple) {
            setOpenIndexes((prev) =>
                Array.isArray(prev)
                    ? prev.includes(index)
                        ? prev.filter((i) => i !== index)
                        : [...prev, index]
                    : [index],
            );
        } else {
            setOpenIndexes((prev) => (prev === index ? null : index));
        }
    };

    return (
        <div className="accordion">
            <div className="accordion">
                {items.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={
                            allowMultiple
                                ? (openIndexes as number[]).includes(index)
                                : openIndexes === index
                        }
                        onToggle={() => handleToggle(index)}
                        id={`accordion-${index}`}
                    />
                ))}
            </div>
        </div>
    );
}
