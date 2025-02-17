import React, { useState } from 'react';
import { Icon } from '@/components';

interface UploadButtonProps {
    onClickEvt?: () => void;
}

export default function UploadButton({ onClickEvt }: UploadButtonProps) {
    const [icoName, setIcoName] = useState('ico-upload--666');
    return (
        <button
            className="btnUpload"
            onClick={() => {
                onClickEvt;
            }}
            onMouseEnter={() => {
                setIcoName('ico-upload--0260EB');
            }}
            onMouseLeave={() => {
                setIcoName('ico-upload--666');
            }}
        >
            <div className="btnUpload__wrap">
                <span className="btnUpload__icon">
                    <Icon icoName={icoName} blindTxt="업로드 버튼" />
                </span>
            </div>
        </button>
    );
}
