import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
// import { Icon } from '@/components';
interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    tagName?: 'button' | 'link';
    href?: string;
    type?:  'primary' | 'default' | 'round' | 'round-line' | 'icon-text' ;
    size?: 'mini' | 'small' | 'large';
    block?: boolean,
    buttonType?:  'button' | 'submit';
    icon?: React.ReactNode,
    iconPosition? : 'left',
    ariaLabel? : string,
    disabled?: boolean;
    isActive?: boolean;
    onClick?: () => void;
}

export default function Button({
    className,
    children,
    tagName = 'button',
    href,
    type,
    size,
    block = false,
    buttonType = 'button',
    icon,
    iconPosition, 
    ariaLabel,
    disabled = false,
    isActive=  false,
    onClick,
}: ButtonProps) {

    const buttonProps = {
        className: cn('button', {
            'button--primary': type === 'primary',
            'button--default': type === 'default',
            'button--round': type === 'round',
            'button--round-line': type === 'round-line',
            'button--icon-text' : type === 'icon-text',
            // 'button--icon': type === 'icon',
            'mini': size === 'mini',
            'small': size === 'small',
            'large': size === 'large',
            'block': block,
            'button--link': tagName === 'link',
            'icon-left': iconPosition === 'left',
            'disabled': disabled,
            'is-active': isActive === true,
        }, className), 
    }

    const handleClickEvt = () => {
        if (!disabled && onClick) {
            onClick();
        }
    };

    const contents = (
        <>
            { children && <span className='button__text'>{children}</span> }
            { icon && icon }
        </>
    )

    if(tagName === 'link' && href ) { //tagName이 링크이고, href의 값이 있을 때
        return (
            <Link {...buttonProps} href={href} aria-label={ariaLabel}>
                {contents}
            </Link>
        ) 
    } else {
        return (
            <button type={buttonType} {...buttonProps} onClick={handleClickEvt} disabled={disabled} aria-label={ariaLabel}>
                {contents}
            </button>
        )
    }
}
