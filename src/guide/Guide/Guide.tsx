import React from 'react';
import Link from 'next/link';

interface GuideProps {
    title: string;
    children?: React.ReactNode;
}

export default function Guide({ title, children }: GuideProps) {
    return (
        <>
            <div className="guide">
                <div className="guide__wrap">
                    <div className="guide__name">
                        <Link href="/" className="guide__prev" />
                        {title}
                    </div>
                    <div className="guide__body">{children}</div>
                </div>
            </div>
        </>
    );
}
