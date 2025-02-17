import React, { useState } from 'react';
import { Icon } from '@/components';
import cn from 'classnames';

interface AccoButtonProps {
    inquiry?: boolean;
    isOpen?: boolean;
    onClickEvt?: () => void;
}

export default function AccoButton({
    inquiry,
    isOpen,
    onClickEvt,
}: AccoButtonProps) {
    const [isToggleOpen, setIsToggleOpen] = useState(isOpen ? true : false);
    const handleClickEvt = () => {
        onClickEvt && onClickEvt();
        setIsToggleOpen((prevState) => !prevState);
    };
    return (
        <button className="btnAcco">
            <div
                className={cn('btnAcco__wrap', {
                    'btnAcco--inquiry': inquiry,
                })}
                onClick={handleClickEvt}
            >
                <span className="btnAcco__icon">
                    <Icon
                        icoName={isToggleOpen ? 'ico-arrowUp' : 'ico-arrowDown'}
                        blindTxt={isToggleOpen ? '닫기' : '열기'}
                    ></Icon>
                </span>
            </div>
        </button>
    );
}
