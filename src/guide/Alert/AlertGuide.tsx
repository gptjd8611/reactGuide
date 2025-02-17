import React, { useState } from 'react';

import { Button, Alert } from '@/components';

export default function AlertGuide() {
    const [isOpenAlert, setOpenAlert] = useState(false);

    const handleClickOpen = () => {
        setOpenAlert(true);
    };
    return (
        <>
            <div className="guide__wrap">
                <h2 className="guide__title">Alert</h2>
                <div className="guide__content">
                    <h3 className="guide__sub-title">default</h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <Button onClick={handleClickOpen} size="small">
                                Alert Open
                            </Button>
                            <Alert
                                isOpen={isOpenAlert}
                                setOpen={setOpenAlert}
                                title="타이틀"
                                footer={{ cancel: '취소', ok: '확인' }}
                                onOk={() => {
                                    console.log('ok');
                                    setOpenAlert(false); // 닫기
                                }}
                                onCancel={() => {
                                    console.log('cancle');
                                    setOpenAlert(false); //닫기
                                }}
                                onOpen={() => {
                                    console.log('open');
                                }}
                                onClose={() => {
                                    console.log('close');
                                }}
                            >
                                알림팝업 내용입력 입니다.
                            </Alert>
                        </div>

                        <div className="guide__item">
                            <strong className="guide__item-title">
                                (Position - Top)
                            </strong>
                        </div>
                    </div>
                </div>

                <div className="guide__desc">
                    <ul>
                        <li className="imporatant">[ 컴포넌트명 : Alert ]</li>
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
