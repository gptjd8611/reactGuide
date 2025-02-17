import React, { useState, useId, useEffect } from 'react';
import cn from 'classnames';

interface CheckboxProps {
    value?: string;
    type?: 'large';
    disabled?: boolean;
    checked?: boolean;
    isLabel?: boolean;
    children?: React.ReactNode;
    title?: string;
    onChange?: (checked: boolean) => void;
}

export default function Checkbox({
    value,
    type,
    disabled = false,
    checked = false,
    isLabel = true,
    children,
    title,
    onChange,
}: CheckboxProps) {
    const id = useId();
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = e.target.checked;
        setIsChecked(newChecked);
        onChange?.(newChecked); // 호출될 때만 실행 , 인자로 업데이트된 체크 상태 전달
    };

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    return (
        <div className={cn('checkbox', {
                'checkbox--large': type === 'large',
            })} 
        >
            <input 
                type="checkbox" 
                id={id} 
                value={value}
                className="checkbox__input" 
                checked={isChecked} 
                onChange={handleChange} 
                title={title} 
                disabled={disabled} 
            />
            { isLabel &&  (
                    <label htmlFor={id} className='checkbox__label'>
                        <i className='checkbox__icon'></i>
                        <span className="checkbox__text">{children}</span>
                    </label>
                )
            }
        </div>
    );
}
