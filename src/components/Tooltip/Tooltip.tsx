import React, { useRef, useState, useLayoutEffect, useId, CSSProperties } from 'react';
import cn from 'classnames';

interface TooltipProps {
    className?: string;
    tooltipTitle: string;
    children: React.ReactNode;
    position?: 'bottom' | 'top';
    defaultOpen?: boolean;
    sideGap?: number;
}

export default function Tooltip({
    className,
    tooltipTitle,
    children,
    position = 'bottom',
    defaultOpen = false,
    sideGap = 20,
}: TooltipProps) {
    const id = useId();
    const tooltipRef = useRef<HTMLDivElement>(null); 
    const buttonRef = useRef<HTMLButtonElement>(null); 
    const [tooltipStyle, setTooltipStyle] = useState<CSSProperties>({});
    const [arrowStyle, setArrowStyle] = useState<CSSProperties>({});
    const [isShow, setIsShow] = useState(defaultOpen);

    // 툴팁 open/close 핸들러
    const handleOpen = () => {setIsShow(true)}
    const handleClose = () => {
        setIsShow(false)
        buttonRef.current?.focus() //툴팁 open 버튼으로 다시 focus
    }

    useLayoutEffect(() => {
        // 툴팁 위치 계산 및 설정
        const updateTooltipPosition = () => {
            const tooltip = tooltipRef.current;
            if (!tooltip) return;
            
            const windowWidth = window.innerWidth; //window width
            const { left: tooltipLeft, width: tooltipWidth } = tooltip.getBoundingClientRect(); //기준이 되는 tooltip의 뷰포트에서 떨어진 left값, tooltip width
            // console.log(tooltipLeft, tooltipWidth)
            
            // tooltip박스의 width값
            setTooltipStyle({
                left: -(tooltipLeft - sideGap), //왼쪽 side여백 20px 빼주기
                right: -(windowWidth - tooltipLeft - tooltipWidth - sideGap), //(left값 + 툴팁 버튼 너비 + 오른쪽 side 여백 20px) 빼주기
            });

            // arrow position 설정
            setArrowStyle({
                left: tooltipLeft - sideGap, //뷰포트에서 툴팁 위치를 기준으로 변함
            });
        };

        if (isShow) { //툴팁이 열렸을때만 resize 이벤트 추가
            updateTooltipPosition();
            window.addEventListener('resize', updateTooltipPosition);
        } 

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', updateTooltipPosition);
        };

    }, [isShow]); 

    return (
        <div 
            ref={tooltipRef} 
            className={cn("tooltip", className, {
                'tooltip--top': position === 'top',
                'is-open' : isShow,
            })}
        >
            <button 
                ref={buttonRef} 
                id={id}
                type="button" 
                className="tooltip__button" 
                aria-label="툴팁 열기" 
                onClick={handleOpen}
                >
            </button>

            {isShow && (
                <div 
                    className="tooltip__content" 
                    style={tooltipStyle}
                    role="tooltip"
                    aria-labelledby={id}
                >
                    <strong className="tooltip__title">{tooltipTitle}</strong>
                    <div className="tooltip__desc">{children}</div>
                    <button 
                        className="tooltip__close" 
                        aria-label="툴팁 닫기" 
                        onClick={handleClose}
                    ></button>
                    <i 
                        className="tooltip__arrow" 
                        style={arrowStyle} 
                        aria-hidden="true"
                    ></i>
                </div>
            )} 
        </div>
    )
}
