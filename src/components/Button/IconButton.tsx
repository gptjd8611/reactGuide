import React, { useState } from 'react';
import { Icon, Tooltip } from '@/components';
import cn from 'classnames';

interface IconButtonProps {
    tableHead?: boolean;
    icoName: string;
    tooltip?: string;
    tooltipBottom?: boolean;
    onClickEvt?: () => void;
}

export default function IconButton({
    tableHead,
    icoName,
    tooltipBottom,
    tooltip,
    onClickEvt,
}: IconButtonProps) {
    const [tooltipShow, setTooltipShow] = useState(false);
    return (
        <button
            className="btnIco"
            onClick={() => {
                onClickEvt && onClickEvt;
            }}
            onMouseEnter={() => {
                tooltip && setTooltipShow(true);
            }}
            onMouseLeave={() => {
                tooltip && setTooltipShow(false);
            }}
        >
            <div
                className={cn('btnIco__wrap', {
                    'btnIco--tableHead': tableHead,
                })}
            >
                <span className="btnIco__icon">
                    <Icon icoName={icoName}></Icon>
                </span>
                {tooltip && (
                    <div
                        className={cn('btnIco__tooltip', {
                            tooltipBottom: tooltipBottom,
                        })}
                    >
                        <Tooltip
                            isShow={tooltipShow}
                            tooltipBottom={tooltipBottom}
                        >
                            {tooltip}
                        </Tooltip>
                    </div>
                )}
            </div>
        </button>
    );
}
