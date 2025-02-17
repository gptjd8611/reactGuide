import React from 'react';
import {
    Checkbox,
    Icon,
} from '@/components';

export default function CheckboxGuide() {
    const handleChange = (e)=> {
    }
    return (
        <>
            <div className="guide__wrap">
                <h2 className="guide__title">기본 Checkbox</h2>
                <div className="guide__content">
                    <h3 className="guide__sub-title">default checkbox</h3>
                    <div className="guide__group">
                        <div className='guide__item'>
                            <strong className="guide__item-title">(기본)</strong>
                            <Checkbox value="name1" onChange={(checked) => console.log("Checkbox status:", checked)}>김혜연</Checkbox>
                            <Checkbox value="name2" onChange={(checked) => console.log("Checkbox status:", checked)}>김혜성</Checkbox>
                        </div>
                        <div className='guide__item'>
                            <strong className="guide__item-title">(disabled)</strong>
                            <Checkbox disabled={true}>항목별 예산 설정</Checkbox>
                        </div>
                    </div>
                </div>
                
                <div className="guide__desc">
                    <ul>
                        <li className="imporatant">[ 컴포넌트명 : Checkbox ]</li>
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
