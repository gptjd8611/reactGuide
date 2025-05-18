import React from 'react';
import Toast from './Toast';
import { Toast as ToastType } from './types';

interface ToastContainerProps {
    toasts: ToastType[];
    removeToast: (id: string) => void;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const ToastContainer: React.FC<ToastContainerProps> = ({
    toasts,
    removeToast,
    position = 'top-right',
}) => {
    return (
        <div className={`toast-container toast-container-${position}`}>
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    id={toast.id}
                    message={toast.message}
                    type={toast.type}
                    duration={toast.duration}
                    onClose={() => removeToast(toast.id)}
                />
            ))}
        </div>
    );
};

export default ToastContainer;
