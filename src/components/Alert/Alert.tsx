import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cn from 'classnames';
import { Button, ButtonGroup } from '@/components';

interface AlertFooter {
    ok?: string;
    cancel?: string;
}

interface AlertProps {
    className?: string;
    title?: React.ReactNode;
    footer?: AlertFooter | null;
    children?: React.ReactNode;
    isOpen?: boolean;
    setOpen: (isOpen: boolean) => void;
    onOk?: () => void;
    onCancel?: () => void;
    onOpen?: () => void;
    onClose?: () => void;
    onCloseComplete?: () => void;
}

const popupVariants = {
    hidden: { opacity: 0, y: 60, x: '-50%' },
    visible: { opacity: 1, y: '-50%', x: '-50%' },
};

const dimVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export default function Alert({
    className,
    title,
    footer,
    children,
    isOpen,
    setOpen,
    onOk,
    onCancel,
    onOpen,
    onClose,
    onCloseComplete,
}: AlertProps) {
    const module = 'alert';

    const handleClickClose = (): void => {
        setOpen(false);
        onClose?.();
    };

    const handleClickCancle = (): void => {
        onCancel?.();
    };

    const handleClickOk = (): void => {
        onOk?.();
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
                        key="alertPopup"
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
                                    <ButtonGroup>
                                        {footer?.cancel && (
                                            <Button
                                                size="small"
                                                onClick={handleClickCancle}
                                            >
                                                {footer?.cancel}
                                            </Button>
                                        )}
                                        {footer?.ok && (
                                            <Button
                                                type="primary"
                                                size="small"
                                                onClick={handleClickOk}
                                            >
                                                {footer?.ok}
                                            </Button>
                                        )}
                                    </ButtonGroup>
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
