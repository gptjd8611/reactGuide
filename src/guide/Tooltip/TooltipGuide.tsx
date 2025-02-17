import React from 'react';
import {Tooltip, TooltipGroup} from '@/components';

export default function TooltipGuide() {
    return (
        <>
            <div className="guide__wrap">
                <h2 className="guide__title">Tooltip</h2>
                <p className="guide__etc-text">* 모바일 기준 styling &#40; viewport 기준 side 여백 20px &#40;default&#41; 남기고 가득차게 &#41;</p>
                <div className="guide__content">
                    <h3 className="guide__sub-title">Position</h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <strong className="guide__item-title">&#40;Position - Bottom &#40;기본&#41;&#41;</strong>
                            <TooltipGroup>
                                <strong className="tooltip-title">3월 소멸 예정 포인트</strong>
                                <Tooltip tooltipTitle="소멸 포인트 복구불가 안내">
                                    소멸 포인트는 복구되지 않으며. 포인트 내역에서 조회하실 수 있습니다
                                </Tooltip>
                            </TooltipGroup>
                        </div>
                        
                        <div className="guide__item">
                            <strong className="guide__item-title">&#40;Position - Top&#41;</strong>
                            <TooltipGroup>
                                <strong className="tooltip-title">적립 포인트 유효기간</strong>
                                <Tooltip position="top" tooltipTitle="적립 포인트 유효기간 안내">
                                    제휴사를 통해 적립된 포인트 및 이벤트 참여로 적립된 포인트는 유효기간이 있으니 참조하시기 바랍니다.
                                </Tooltip>
                            </TooltipGroup>
                        </div>
                    </div>

                    <h3 className="guide__sub-title">텍스트 줄바꿈</h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <TooltipGroup>
                                <strong className="tooltip-title">적립 포인트 유효기간</strong>
                                <Tooltip tooltipTitle="적립 포인트 유효기간 안내">
                                    <span style={{color:'red'}}>제휴사</span>를 통해 적립된 포인트 및 <br />
                                    이벤트 참여로 적립된 포인트는 유효기간이 <br />
                                    있으니 참조하시기 바랍니다.
                                </Tooltip>
                            </TooltipGroup>
                        </div>
                    </div>

                    <h3 className="guide__sub-title">default &#58; open</h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <TooltipGroup>
                                <strong className="tooltip-title">적립 포인트 유효기간</strong>
                                <Tooltip defaultOpen={true} tooltipTitle="적립 포인트 유효기간 안내">
                                    <span style={{color:'red'}}>제휴사</span>를 통해 적립된 포인트 및 
                                    이벤트 참여로 적립된 포인트는 유효기간이
                                    있으니 참조하시기 바랍니다.
                                </Tooltip>
                            </TooltipGroup>
                        </div>
                    </div>

                    <h3 className="guide__sub-title">side 여백 설정</h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <strong className="guide__item-title">&#40; props &#58; sideGap &#61; {40} &#41;</strong>
                            <TooltipGroup>
                                <strong className="tooltip-title">적립 포인트 유효기간</strong>
                                <Tooltip tooltipTitle="적립 포인트 유효기간 안내" sideGap={40}>
                                    <span style={{color:'red'}}>제휴사</span>를 통해 적립된 포인트 및 <br />
                                    이벤트 참여로 적립된 포인트는 유효기간이 <br />
                                    있으니 참조하시기 바랍니다.
                                </Tooltip>
                            </TooltipGroup>
                        </div>
                    </div>

                </div>
                
                <div className="guide__desc">
                    <ul>
                        <li className="imporatant">[ 컴포넌트명 : Tooltip ]</li>
                        {/* <li>Props : className , tagName, buttonType, children , href , type{' '}('line'), size{' '}('small', 'large'), disable{' '}(default는 false) , onClickEvt</li>
                        <li>Props( href ) string 추가시 링크형 "a" 으로 생성</li>
                        <li>Props( disabled ) 추가시 "disabled" 상태로 생성</li>
                        <li>Prop( onClickEvt )으로 이벤트 넘김 시 버튼 클릭시 이벤트를 컴포넌트 밖에서 넘길 수 있음</li> */}
                    </ul>
                </div>
            </div>
        </>
    );
}
