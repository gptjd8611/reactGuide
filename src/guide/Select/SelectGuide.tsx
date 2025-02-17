import React from 'react';
import {SelectBox} from '@/components';

export default function SelectGuide() {
    const fruitOptions = [
        { label: 'apple', value: 'apple' },
        { label: 'banana', value: 'banana' },
        { label: 'watermelon', value: 'watermelon' },
        { label: 'orange', value: 'orange' },
        { label: 'peach', value: 'peach' },
    ]
    return (
        <>
            <div className="guide__wrap">
                <h2 className="guide__title">Select</h2>
                <div className="guide__content">
                    <h3 className="guide__sub-title">기본 (single)</h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <strong className="guide__item-title">placeholder(default value 없을 시)</strong>
                            <SelectBox 
                                options={fruitOptions}
                                placeholder='선택해 주세요.'
                            />
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">defaultValue</strong>
                            <SelectBox 
                                options={fruitOptions}
                                placeholder='선택해 주세요.'
                                defaultValue={fruitOptions[1]}
                            />
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">clear 기능</strong>
                            <SelectBox 
                                options={fruitOptions}
                                placeholder='선택해 주세요.'
                                defaultValue={fruitOptions[1]}
                                isClearable={true}
                            />
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">search 기능</strong>
                            <SelectBox 
                                options={fruitOptions}
                                placeholder='선택해 주세요.'
                                isSearchable={true}
                                isClearable={true}
                            />
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">disabled</strong>
                            <SelectBox 
                                options={fruitOptions}
                                placeholder='선택해 주세요.'
                                defaultValue={fruitOptions[2]}
                                isDisabled={true}
                            />
                        </div>
                    </div>

                </div>

                <div className="guide__content">
                    <h3 className="guide__sub-title">Multiple</h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <strong className="guide__item-title">placeholder (default value 없을 시)</strong>
                            <SelectBox 
                                options={fruitOptions}
                                isMulti={true}
                                placeholder='선택해 주세요.'
                            />
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">defaultValue</strong>
                            <SelectBox 
                                options={fruitOptions}
                                isMulti={true}
                                placeholder='선택해 주세요.'
                                defaultValue={ [fruitOptions[1], fruitOptions[3], fruitOptions[4]] }
                            />
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">clear 기능</strong>
                            <SelectBox 
                                options={fruitOptions}
                                isMulti={true}
                                placeholder='선택해 주세요.'
                                defaultValue={ [fruitOptions[1], fruitOptions[4]] }
                                isClearable={true}
                            />
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">search 기능</strong>
                            <SelectBox 
                                options={fruitOptions}
                                isMulti={true}
                                placeholder='선택해 주세요.'
                                isSearchable={true}
                                isClearable={true}
                            />
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">disabled</strong>
                            <SelectBox 
                                isMulti={true}
                                options={fruitOptions}
                                placeholder='선택해 주세요.'
                                defaultValue={ [fruitOptions[1], fruitOptions[3] ] }
                                isDisabled={true}
                            />
                        </div>
                    </div>

                </div>
                
                <div className="guide__desc">
                    <ul>
                        <li className="imporatant">[ 컴포넌트명 : Select ]</li>
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
