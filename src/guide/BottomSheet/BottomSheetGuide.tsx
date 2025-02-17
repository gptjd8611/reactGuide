import React, { useState } from 'react';

import { Button, BottomSheet, ButtonGroup } from '@/components';

export default function BottomSheetGuide() {
    const [isOpenBottomSheet, setOpenBottomSheet] = useState(false);

    const handleClickOpen = () => {
        setOpenBottomSheet(true);
    };
    return (
        <>
            <div className="guide__wrap">
                <h2 className="guide__title">BottomSheet</h2>
                <div className="guide__content">
                    <h3 className="guide__sub-title">default</h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <Button onClick={handleClickOpen} size="small">
                                BottomSheet Open
                            </Button>
                            <BottomSheet
                                isOpen={isOpenBottomSheet}
                                setOpen={setOpenBottomSheet}
                                title="bottom sheet Title"
                                footer={
                                    <>
                                        <ButtonGroup>
                                            <Button type="primary">
                                                바로 가기
                                            </Button>
                                        </ButtonGroup>
                                    </>
                                }
                                onOpen={() => {
                                    console.log('open');
                                }}
                                onClose={() => {
                                    console.log('close');
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: '1.6rem',
                                        fontWeight: '400',
                                        color: '#111',
                                    }}
                                >
                                    바텀 시트 팝업 내용이 들어갑니다.바텀 시트
                                    팝업 내용이 들어갑니다.바텀 시트 팝업 내용이
                                    들어갑니다.바텀 시트 팝업 내용이
                                    들어갑니다.바텀 시트 팝업 내용이
                                    들어갑니다.바텀 시트 팝업 내용이
                                    들어갑니다.바텀 시트 팝업 내용이
                                    들어갑니다.바텀 시트 팝업 내용이
                                    들어갑니다.바텀 시트 팝업 내용이
                                    들어갑니다.바텀 시트 팝업 내용이
                                    들어갑니다.바텀 시트 팝업 내용이
                                    들어갑니다.바텀 시트 팝업 내용이
                                    들어갑니다.바텀 시트 팝업 내용이 들어갑니다.
                                </div>
                            </BottomSheet>
                        </div>
                    </div>
                </div>

                <div className="guide__desc">
                    <ul>
                        <li className="imporatant">
                            [ 컴포넌트명 : BottomSheet ]
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
