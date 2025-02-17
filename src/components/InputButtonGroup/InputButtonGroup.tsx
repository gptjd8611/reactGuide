import React from 'react';
import cn from 'classnames';

interface InputButtonGroupProps {
    className?: string;
    children?: React.ReactNode;
}

export default function InputButtonGroup({
    className,
    children,
}: InputButtonGroupProps) {

    return (
        <div className={cn("input-button-wrap", {
            // 'error': status === 'error',
        })}>
            {children}
        </div>
    );
}
