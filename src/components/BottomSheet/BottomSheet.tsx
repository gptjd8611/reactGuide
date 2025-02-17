import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cn from 'classnames';
import { Button, ButtonGroup } from '@/components';

interface BottomSheetProps {
    className?: string;
    title?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
    isOpen?: boolean;
    setOpen: (isOpen: boolean) => void;
    onOpen?: () => void;
    onClose?: () => void;
    onCloseComplete?: () => void;
}

const popupVariants = {
    hidden: { opacity: 0, y: '100%' },
    visible: { opacity: 1, y: 0 },
};

const dimVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export default function BottomSheet({
    className,
    title,
    footer,
    children,
    isOpen,
    setOpen,
    onOpen,
    onClose,
    onCloseComplete,
}: BottomSheetProps) {
    const module = 'bottomSheet';

    const handleClickClose = (): void => {
        setOpen(false);
        onClose?.();
    };

    const handleCloseComplete = (): void => {
        onCloseComplete?.();
    };

    // 애니메이션 종료 후 onCloseComplete 호출
    const handleExitComplete = () => {
        if (!isOpen) {
            onCloseComplete?.(); // 상태가 false일 때만 호출
        }
    };

    useEffect(() => {
        if (isOpen) onOpen?.();
    }, [isOpen, onOpen]);

    return (
        <AnimatePresence onExitComplete={handleExitComplete}>
            {isOpen && (
                <div className={cn(`${module}`, className)}>
                    <motion.div
                        key="dim"
                        className={`${module}__dim`}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dimVariants}
                        transition={{ duration: 0.3 }}
                    ></motion.div>
                    <motion.div
                        key="bottomSheetPopup"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={popupVariants}
                        className={`${module}__popup`}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={`${module}__inner`}>
                            <div className={`${module}__header`}>
                                <strong className={`${module}__title`}>
                                    {title && title}
                                </strong>
                            </div>
                            <div className={`${module}__body`}>{children}</div>
                            {footer && (
                                <div className={`${module}__footer`}>
                                    {footer}
                                </div>
                            )}
                        </div>
                        <button
                            className={`${module}__close`}
                            onClick={handleClickClose}
                        >
                            <span className="a11y-hidden">닫기</span>
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
