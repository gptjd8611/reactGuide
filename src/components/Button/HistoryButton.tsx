import React from 'react';
import { Icon } from '@/components';

interface HistoryButtonProps {
    onClickEvt?: () => void;
}

export default function HistoryButton({ onClickEvt }: HistoryButtonProps) {
    return (
        <button
            className="btnHistory"
            onClick={() => {
                onClickEvt && onClickEvt;
            }}
        >
            <div className="btnHistory__wrap">
                <span className="btnHistory__icon">
                    <Icon icoName="ico-close--333" blindTxt="전체닫기" />
                </span>
            </div>
        </button>
    );
}
