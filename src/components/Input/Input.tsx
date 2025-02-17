import React, { useState, useId, useRef, useEffect } from 'react';
import cn from 'classnames';

interface InputProps {
    className?: string;
    children?: React.ReactNode;
    name?: string;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    maxLength?: number;
    type: 'text' | 'password' | 'number' ;
    hasLabel?: boolean;
    labelText?: string;
    status?: 'error' | 'warning';
    statusText?: string;
    unitText?: string;
    hasButton?: boolean;
    verifyNumber?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;  // onChange 타입 지정
    onBlur?: React.FocusEventHandler<HTMLInputElement>;     // onBlur 타입 지정
    onClear?: () => void;
}

export default function Input({
    className,
    children, 
    defaultValue,
    placeholder,
    disabled,
    readOnly,
    required,
    maxLength,
    type = 'text',
    hasLabel = true,
    labelText,
    status,
    statusText,
    unitText,
    hasButton = false,
    verifyNumber,
    onChange,
    onBlur,
    onClear,
}: InputProps) {
    const id = useId();
    const messageId = useId(); //오류메시지 id
    const [value, setValue] = useState(defaultValue || '');
    const [isFocused, setIsFocused] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null); // input 요소에 대한 참조 생성

    // value update
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
        setHasInteracted(true); // 사용자가 값을 변경하면 true로 설정
        onChange?.(e); // onChange가 있을 때만 호출
    };

    // text value clear
    const handleClear = () => {
        setValue('');
        inputRef.current?.focus(); // 입력 필드에 포커스 설정
        
        onClear?.(); // onClear가 있을 때만 호출
    };

    // 사용자가 입력 필드를 변경하고,value값이 있고, readonly랑 disabled가 아닐 때 삭제 버튼 표시
    const showDeleteButton = hasInteracted && value !== '' && !readOnly && !disabled && !verifyNumber ;

    // label과 input의 classNames를 함수로 분리
    const labelClassNames = cn("input__label", { 'ir': !hasLabel });
    const inputClassNames = cn("input__field", {
        'disabled': disabled,
        'readOnly': readOnly,
        'focus': isFocused,
    });

    return (
        <div className={cn("input", className, {
            'error': status === 'error',
            'warning': status === 'warning',
            'input--has-unit': unitText,
        })}>
            <label className={labelClassNames} htmlFor={id}>{labelText}</label>
            <div className="input__box">
                <input
                    className={inputClassNames}
                    name={id}
                    id={id}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readOnly}
                    required={required}
                    maxLength={maxLength}
                    onChange={handleChange}
                    onBlur={(e) => {
                        setIsFocused(false); // 포커스 해제 시 상태 업데이트
                        onBlur?.(e); // onBlur가 있을 때만 호출
                    }}
                    onFocus={() => setIsFocused(true)} // 포커스 시 상태 업데이트
                    ref={inputRef}
                    aria-invalid={status ? true : undefined} //오류메시지 접근성
                    aria-errormessage={status ? messageId : undefined} //오류메시지 접근성
                />
                { showDeleteButton  && (
                    <button 
                        type="button" 
                        className="input__delete-button" 
                        aria-label="입력 텍스트 삭제"
                        onClick={handleClear}
                    ></button>
                )}
                {unitText && <span className="input__unit">{unitText}</span>}
                {hasButton && children }
                {verifyNumber && (
                    <span className='number'>{verifyNumber}</span>
                )}
            </div>
            {status && <p className="input__message" id={messageId}>{statusText}</p>}
        </div>
    );
}
