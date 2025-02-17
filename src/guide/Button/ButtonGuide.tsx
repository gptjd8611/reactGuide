import React from 'react';
import {
    Button,
    ButtonGroup,
    AccoButton,
    IconButton,
    Icon,
} from '@/components';

export default function ButtonGuide() {
    return (
        <>
            <div className="guide__wrap">
                <h2 className="guide__title">기본 Button</h2>
                <div className="guide__content">
                    <h3 className="guide__sub-title">사이즈(default)</h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <strong className="guide__item-title">
                                (기본)
                            </strong>
                            <Button
                                block
                                onClick={() => {
                                    console.log('line button 클릭');
                                }}
                            >
                                취소
                            </Button>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">
                                (primary)
                            </strong>
                            <Button
                                type="primary"
                                block
                                onClick={() => {
                                    console.log('primary button 클릭');
                                }}
                            >
                                확인
                            </Button>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">
                                (disabled)
                            </strong>
                            <Button type="primary" block disabled={true}>
                                확인
                            </Button>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">
                                (type="submit")
                            </strong>
                            <Button type="primary" block buttonType="submit">
                                전송
                            </Button>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">
                                (링크형 버튼)
                            </strong>
                            <Button href="#" type="primary" tagName="link">
                                링크형 버튼
                            </Button>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">
                                (disabled 링크)
                            </strong>
                            <Button
                                href="#"
                                type="primary"
                                tagName="link"
                                className="disabled"
                            >
                                링크형 버튼
                            </Button>
                        </div>
                    </div>

                    <h3 className="guide__sub-title">사이즈(small)</h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <strong className="guide__item-title">
                                (기본)
                            </strong>
                            <Button
                                block
                                size="small"
                                onClick={() => {
                                    console.log('line small 클릭');
                                }}
                            >
                                취소
                            </Button>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">
                                (primary)
                            </strong>
                            <Button
                                type="primary"
                                block
                                size="small"
                                onClick={() => {
                                    console.log('small 클릭');
                                }}
                            >
                                확인
                            </Button>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">
                                (disabled)
                            </strong>
                            <Button
                                type="primary"
                                block
                                size="small"
                                disabled={true}
                            >
                                확인
                            </Button>
                        </div>
                    </div>
                </div>
                <h2 className="guide__title">서브 Button</h2>
                <div className="guide__content">
                    <h3 className="guide__sub-title">
                        Round형 버튼 ( ex : sorting )
                    </h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <strong className="guide__item-title">
                                (기본)
                            </strong>
                            <Button type="round">이벤트</Button>
                            <Button type="round">쿠폰</Button>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">
                                (기본 active)
                            </strong>
                            <Button type="round" isActive={true}>
                                이벤트
                            </Button>
                            <Button type="round" isActive={true}>
                                쿠폰
                            </Button>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">
                                (line 타입)
                            </strong>
                            <Button type="round-line">커피/디저트</Button>
                            <Button type="round-line">외식</Button>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">
                                (line 타입 active)
                            </strong>
                            <Button type="round-line" isActive={true}>
                                커피/디저트
                            </Button>
                            <Button type="round-line" isActive={true}>
                                외식
                            </Button>
                        </div>
                    </div>

                    <h3 className="guide__sub-title">etc 버튼</h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <strong className="guide__item-title">
                                (side 버튼)
                            </strong>
                            <Button size="mini">적립내역</Button>
                            <Button size="mini" disabled={true}>
                                은행선택
                            </Button>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">
                                (icon + text 버튼)
                            </strong>
                            <Button
                                className="filter-button"
                                type="icon-text"
                                icon={<Icon iconName="filter" />}
                                ariaLabel="기간 선택"
                            >
                                1개월
                            </Button>
                        </div>
                        <div className="guide__item">
                            <strong className="guide__item-title">
                                (icon + text 버튼 - icon이 left일때)
                            </strong>
                            <Button
                                className="filter-button"
                                type="icon-text"
                                icon={<Icon iconName="filter" />}
                                iconPosition="left"
                                ariaLabel="기간 선택"
                            >
                                1개월
                            </Button>
                        </div>
                        {/* <div className="guide__item">
                            <strong className="guide__item-title">(icon 버튼)</strong>
                            <Button className="search-button" type="icon" icon={<Icon hiddenText="검색" iconName="search"/>} ariaLabel="검색" ></Button>
                        </div> */}
                    </div>
                </div>

                <h2 className="guide__title">Group Button</h2>
                <div className="guide__content">
                    <div className="guide__group">
                        <div className="guide__item">
                            <strong className="guide__item-title">
                                (기본 - Popup 버튼)
                            </strong>
                            <ButtonGroup>
                                <Button size="small">취소</Button>
                                <Button type="primary" size="small">
                                    확인
                                </Button>
                            </ButtonGroup>
                            <strong className="guide__item-title">
                                (direction :column)
                            </strong>
                            <ButtonGroup direction="column">
                                <Button>취소</Button>
                                <Button type="primary">통신사 인증하기</Button>
                            </ButtonGroup>
                            <strong className="guide__item-title">
                                (금액 선택 버튼)
                            </strong>
                            <ButtonGroup className="button-group--amount">
                                <Button className="button--amount">
                                    전액사용
                                </Button>
                                <Button
                                    className="button--amount"
                                    isActive={true}
                                    ariaLabel={'선택됨'}
                                >
                                    1,000P
                                </Button>
                                <Button className="button--amount">
                                    5,000P
                                </Button>
                                <Button className="button--amount">
                                    10,000P
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>

                <div className="guide__desc">
                    <ul>
                        <li className="imporatant">[ 컴포넌트명 : Button ]</li>
                        {/* <li>Props : className , tagName, buttonType, children , href , type{" "}("line"), size{" "}("small", "large"), disable{" "}(default는 false) , onClickEvt</li>
                        <li>Props( href ) string 추가시 링크형 "a" 으로 생성</li>
                        <li>Props( disabled ) 추가시 "disabled" 상태로 생성</li>
                        <li>Prop( onClick )으로 이벤트 넘김 시 버튼 클릭시 이벤트를 컴포넌트 밖에서 넘길 수 있음</li> */}
                    </ul>
                </div>
            </div>
        </>
    );
}
