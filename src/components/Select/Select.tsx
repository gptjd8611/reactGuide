import React, { useState } from 'react';
import Select, { OnChangeValue , MultiValue } from 'react-select'
import cn from 'classnames';

interface Option {
    label: string;
    value: string;
}

interface SelectProps {
    options: Option[];
    isMulti?: boolean;
    placeholder?: string;
    defaultValue?: Option | Option[];  // defaultValue 타입 추가
    isClearable? : boolean;
    isSearchable? : boolean;
    isDisabled? : boolean;
    className?: string;
    classNamePrefix?: string;
}

export default function SelectBox({
    options,
    isMulti=false,
    placeholder,
    defaultValue,
    isClearable=false,
    isSearchable=false,
    isDisabled=false,
    className = 'select', //최상위 부모 class명
    classNamePrefix = 'select', //prefix class명
}: SelectProps) {
    const [selectedOption, setSelectedOption] = useState<MultiValue<Option> | Option | null>(null);

    const handleChange = (selectedOption: OnChangeValue<Option, boolean>) => {
        setSelectedOption(selectedOption);  // 선택된 옵션 저장
        console.log('선택된 값:', selectedOption);
    };

    return (
        <>
            <Select 
                options={options} 
                isMulti={isMulti}
                placeholder={placeholder}    
                defaultValue={defaultValue}    
                isClearable={isClearable}    
                isSearchable={isSearchable}    
                isDisabled={isDisabled}
                noOptionsMessage={()=> '일치하는 옵션이 없습니다.'} //option값 없을 시 노출되는 문구
                onChange={handleChange}
                className={className}
                classNamePrefix={classNamePrefix}
                styles={{ // 이렇게 인라인으로 custom 할 수는 있으나 scss에서 괸리할지 고민,,,(ex: multivalue)
                    multiValue: (base) => ({
                        ...base,
                        backgroundColor: '#f0f8ff', // 배경색 설정
                        color: '#333', // 텍스트 색상 설정
                    }),
                    multiValueLabel: (base) => ({
                        ...base,
                        color: '#007bff', // multiValue 라벨 텍스트 색상
                    }),
                    multiValueRemove: (base) => ({
                        ...base,
                        color: '#ff6347', // multiValue Remove 버튼 색상
                        ':hover': {
                            backgroundColor: '#ff6347',
                            color: 'white',
                        },
                    }),
                }}
            />
            <div style={{marginTop: '10px'}}>
                { /* selectedOption이 Option일 경우에만 label에 접근 */}
                선택된 옵션(onChange 이벤트) : {Array.isArray(selectedOption)
                    ? selectedOption.map(opt => opt.label).join(', ')  // 배열일 경우, 각 Option의 label을 출력
                    : selectedOption && 'label' in selectedOption // 1. selectedOption이 null이 아닌지 확인, 2.selectedOption이 Option 객체일 경우에만 label 접근 ('property' in object)
                    ? selectedOption.label
                    : '없음'}  
                { /* selectedOption이 Option이 아닐 경우 '없음'  */}
            </div>
        </>
    )
}
