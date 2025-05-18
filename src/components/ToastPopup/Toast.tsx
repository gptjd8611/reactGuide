import React, { useEffect } from 'react';

import { ToastProps } from './types';

export default function Toast({
    id,
    message,
    type,
    duration = 3000,
    onClose,
}: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div
            className={`toast toast-${type}`}
            role="alert"
            aria-live="assertive"
        >
            <div className="toast-content">
                <span className="toast-icon">{getIcon(type)}</span>
                <span>{message}</span>
            </div>
            <button
                className="toast-close"
                onClick={onClose}
                aria-label="Close toast"
            >
                ×
            </button>
        </div>
    );
}

// 타입별 아이콘
const getIcon = (type: ToastType) => {
    switch (type) {
        case 'success':
            return '✅';
        case 'error':
            return '❌';
        case 'warning':
            return '⚠️';
        case 'info':
            return 'ℹ️';
        default:
            return 'ℹ️';
    }
};
