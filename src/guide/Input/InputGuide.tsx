import React from 'react';
import { Input, InputButtonGroup, Button } from '@/components';

export default function InputGuide() {
    return (
        <>
            <div className="guide__wrap">
                <h2 className="guide__title">기본 Input</h2>
                <div className="guide__content">
                    <h3 className="guide__sub-title">Defualt</h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <strong className="guide__item-title">(Value없을 때)</strong>
                            <Input type="text" labelText="이름" placeholder="이름을 입력해주세요"></Input>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">(Value 있을 때)</strong>
                            <Input type="text" labelText="휴대폰 번호" placeholder="휴대폰번호를 입력해주세요" defaultValue="010-0000-0000" maxLength={11}></Input>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">(label 없을 시 - label 숨김처리)</strong>
                            <Input type="text" hasLabel={false} labelText="상세주소 입력" placeholder="상세주소를 입력해주세요"></Input>
                        </div>
                    </div>

                    <h3 className="guide__sub-title">type="password"</h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <strong className="guide__item-title">(password)</strong>
                            <Input labelText="비밀번호" type="password" maxLength={10} placeholder="비밀번호를 입력해주세요"></Input>
                        </div>
                    </div>

                    <h3 className="guide__sub-title">disabled, readonly</h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <strong className="guide__item-title">(disabled)</strong>
                            <Input type="text" labelText="은행명" defaultValue="은행을 선택해주세요." disabled={true}></Input>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">(readonly)</strong>
                            <Input type="text" labelText="시너지 코드" defaultValue="1234" readOnly={true}></Input>
                        </div>
                    </div>
                </div>

                <h2 className="guide__title">status 문구(error, warning)</h2>
                <div className="guide__content">
                    <div className="guide__group">
                        <div className="guide__item">
                            <strong className="guide__item-title">(error)</strong>
                            <Input type="text" labelText="이름" placeholder="이름을 입력해주세요." defaultValue="김혜연dtd" status="error" statusText='한글만 또는 영문만 입력 가능해요.'></Input>
                        </div>
                    </div>
                </div>

                <h2 className="guide__title">Unit Input</h2>
                <div className="guide__content">
                    <div className="guide__group">
                        <div className="guide__item">
                            <strong className="guide__item-title">(unit: 원)</strong>
                            <Input type="number" labelText="충전 금액 입력" placeholder="충전할 금액을 입력해주세요" unitText="원"></Input>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">(unit: P)</strong>
                            <Input type="number" labelText="포인트 입력" placeholder="캐시백 신청 포인트를 입력해주세요." unitText="P"></Input>
                        </div>
                    </div>
                </div>

                <h2 className="guide__title">Input + Butoon Group</h2>
                <div className="guide__content">
                    <div className="guide__group">
                        <div className="guide__item">
                            <strong className="guide__item-title">(default)</strong>
                                <Input 
                                    type="text" 
                                    labelText="아이디" 
                                    className="input--side-button"
                                    placeholder="아이디를 입력해주세요" 
                                    hasButton={true}
                                    children={ <Button>중복확인</Button> }
                                ></Input>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">(disabled)</strong>
                                <Input 
                                    type="text" 
                                    labelText="자택정보" 
                                    className="input--side-button"
                                    placeholder="우편번호를 검색해주세요." 
                                    disabled={true}
                                    hasButton={true}
                                    children={ <Button>검색</Button> }
                                ></Input>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">(인증번호 있는 case)</strong>
                                <Input 
                                    type="text" 
                                    labelText="인증번호" 
                                    className="input--side-button input--verify-number"
                                    placeholder="인증번호" 
                                    hasButton={true}
                                    verifyNumber="00 : 32"
                                    children={ <Button>전송</Button> }
                                ></Input>
                        </div>
                    </div>
                </div>
                
                <div className="guide__desc">
                    <ul>
                        <li className="imporatant">[ 컴포넌트명 : Input ]</li>
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
