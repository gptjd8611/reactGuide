import React from 'react';
import cn from 'classnames';

interface ButtonGroupProps {
    className?: string;
    children?: React.ReactNode;
    direction?: 'row' | 'column'
}

export default function ButtonGroup({ 
    className,
    children, 
    direction = 'row',
}: ButtonGroupProps) {
    return (
        <div className={cn('button-group', {
            'button-group--column' : direction === 'column',
        }, className )}>
            {children}
        </div>
    );
}
