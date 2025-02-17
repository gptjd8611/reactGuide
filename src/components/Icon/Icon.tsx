import React from 'react';
import cn from 'classnames';

interface IconProps {
    hiddenText?: string;
    iconName: string;
}

export default function Icon({ hiddenText, iconName }: IconProps) {
    return (
        <i className="icon">
            {hiddenText && <span className="hidden">{hiddenText}</span>}
            <span className={`icon__img icon-${iconName}`}></span>
        </i>
    );
}
