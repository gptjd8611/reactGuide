import React, {createContext, useContext, useState, ReactNode, ChangeEvent } from 'react';

interface RadioContextProps {
    name: string;
    value: string;
    radioHandleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RadioContext = createContext<RadioContextProps | null>(
    null,
);

export function useRadioContext() {
    const context = useContext(RadioContext);
    if (!context) {
        throw new Error('context undefined!');
    }
    return context;
}
interface RadioGroupProps {
    name: string;
    defaultValue: string;
    children: ReactNode;
    onChange?: (values: { target: EventTarget & HTMLInputElement; checked: boolean; value: string }) => void; 
    //values는 핸들러 함수에 전달되는 인자 이름이며, 이 객체는 'target, 'checked', 'value' 3가지 속성을 가짐, void는 반환값이 없음을 나타냄
}

export default function RadioGroup({
    name,
    defaultValue,
    children,
    onChange,
}: RadioGroupProps) {
    const [value, setvalue] = useState<string>(defaultValue);
    
    const radioHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const { checked, value } = target;
        // console.log(checked, value, target)
        setvalue(event.target.value);
        onChange?.({ target, checked, value }); //onChange 함수가 존재할 경우에만, 즉 onChange가 undefined나 null이 아닐 때만 그 함수를 호출, onChange 함수가 호출될 때 { target, checked, value }라는 객체가 인자로 전달
    };

    const contextValue: RadioContextProps = {
        name,
        value,
        radioHandleChange,
    };
    // console.log(contextValue);

    return (
        <RadioContext.Provider value={contextValue}>
            <div className="radioGroup">
                {children}
            </div>
        </RadioContext.Provider>
    );
}
