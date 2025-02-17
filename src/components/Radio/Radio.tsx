// Radio.tsx
import React, { ChangeEvent, useState, useId, useEffect } from 'react';
import {useRadioContext} from '@/components/Radio/RadioGroup';

interface RadioProps {
    value: string;
    checked?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    onChange?: (values: { target: EventTarget & HTMLInputElement; checked: boolean; value: string }) => void;
}

export default function Radio({
    value,
    checked = false,
    disabled = false,
    children,
    onChange,
}: RadioProps) {
    const id = useId();

    let context;
    try {
        context = useRadioContext();
    } catch (error) {
        context = null; // RadioGroup이 없으면 null로 설정 -> 단독으로 radio 컴포넌트 사용할때
    }
    
    const isRadioGroup = context ? value === context.value : false; //true또는 false 반환
    // console.log(isRadioGroup, context);

    const [isChecked, setIsChecked] = useState<boolean>(checked);

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const { checked, value } = target;

        context ? context.radioHandleChange(event) : setIsChecked(checked);
        onChange?.({ target, checked, value });
    };

    return (
        <div className="radio">
            <input
                type="radio"
                className="radio__input"
                name={context ? context.name : id}
                id={id}
                value={value}
                disabled={disabled}
                onChange={handleChange}
                checked={context ? isRadioGroup : isChecked}
            />
            <label className="radio__label" htmlFor={id}>
                <i className="radio__icon"></i>
                <span className="radio__label-text">
                    {children}
                </span>
            </label>
        </div>
    );
}
