import React from 'react';

import { useToast } from '@/components/ToastPopup/ToastProvider';

export default function ToastPopupGuide() {
    const { addToast } = useToast();
    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="guide__title">Toast popup</h2>
            <div className="guide__content">
                <div>
                    <button
                        className="btn-toast"
                        onClick={() =>
                            addToast('성공 메시지입니다!', 'success', 3000)
                        }
                    >
                        성공 Toast
                    </button>
                    <button
                        className="btn-toast"
                        onClick={() =>
                            addToast('오류가 발생했습니다.', 'error', 5000)
                        }
                    >
                        오류 Toast
                    </button>
                    <button
                        className="btn-toast"
                        onClick={() =>
                            addToast(<strong>경고 메시지</strong>, 'warning')
                        }
                    >
                        경고 Toast
                    </button>
                    <button
                        className="btn-toast"
                        onClick={() => addToast('정보 메시지입니다.', 'info')}
                    >
                        정보 Toast
                    </button>
                </div>
            </div>
        </div>
    );
}
