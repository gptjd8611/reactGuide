import React from 'react';
import cn from 'classnames';

interface TooltipGroupProps {
    className?: string;
    children: React.ReactNode;
}

export default function TooltipGroup({
    className,
    children,
}: TooltipGroupProps) {
    return (
        <div className={cn("tooltip-group", className)}>
            {children}
        </div>
    )
}
