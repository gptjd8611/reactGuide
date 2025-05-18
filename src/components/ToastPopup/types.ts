// Toast 메시지의 타입
export type ToastType = 'success' | 'error' | 'warning' | 'info';

// Toast 객체의 구조
export interface Toast {
    id: string;
    message: string | React.ReactNode;
    type: ToastType;
    duration?: number; // 밀리초 단위
}

// Toast 컴포넌트 props
export interface ToastProps extends Toast {
    onClose: () => void;
}

// Toast 컨텍스트 타입
export interface ToastContextType {
    addToast: (
        message: string | React.ReactNode,
        type: ToastType,
        duration?: number,
    ) => void;
    removeToast: (id: string) => void;
}
