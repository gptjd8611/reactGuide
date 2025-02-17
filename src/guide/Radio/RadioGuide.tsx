import React from 'react';
import {
    Radio,
    RadioGroup
} from '@/components';

export default function CheckboxGuide() {
    return (
        <>
            <div className="guide__wrap">
                <h2 className="guide__title">기본 Radio</h2>
                <div className="guide__content">
                    <h3 className="guide__sub-title">default Radio</h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <strong className="guide__item-title">(기본 - 단독)</strong>
                            <Radio value="radio01" checked={true}>항목별 예산 설정</Radio>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">(Radio 그룹)</strong>
                            <RadioGroup name="radio-group" defaultValue="apple">
                                <Radio value="apple">사과</Radio>
                                <Radio value="banana">바나나</Radio>
                                <Radio value="pineapple">파인애플</Radio>
                            </RadioGroup>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">(disabled)</strong>
                            <Radio value="radio02" disabled={true}>항목별 예산 설정</Radio>
                        </div>
                    </div>
                </div>
                
                <div className="guide__desc">
                    <ul>
                        <li className="imporatant">[ 컴포넌트명 : Radio ]</li>
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
