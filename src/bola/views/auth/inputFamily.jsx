import React, { Fragment } from 'react'
import { ChangeEvent } from 'react';
import "../../styles/inputFamilyStyle.css"
import {ReactNode} from "react";

type InputField = {
    name: string;
    type: string;
    value: string;
    id: string;
};

type Props = {
    inputFields?: InputField[];
    numberOfInputFields?: number;
    className?: string;
    style?: React.CSSProperties;
    tagNames?: Record<string, string>;
    types?: Record<string, string>;
    icon?:ReactNode;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
};

const InputFamily = (props: Props) => {
    const emailPattern = /^(?=.*@)(?=.{6,}$)(gmail\.com|outlook\.com|yahoo\.com|mail\.ru|qq\.com|live\.com|163\.com|163\.net|icloud\.com|aol\.com|hotmail\.com|yandex\.com|zoho\.com|protonmail\.com|gmx\.com|gmx\.net|mail\.com|rediff\.com|naver\.com|web\.de)$/i;
    function changeInputAppearanceOnInvalid(event) {
        const inputFieldWithInvalidData = document.querySelector(`[name="${event.target.name}"]`);
        console.log(inputFieldWithInvalidData)
    }


    return (
        <div className='User_Info' style={{width: '100%', alignContent: 'center'}}>
            {props.inputFields.map((field, index) => {
                return (
                    <div className='User_Info_Div' key={index} style={{display: 'grid'}}>
                        <Fragment>
                            <label htmlFor={field.name}>{field.name}</label>
                            <input
                                className={field.id === 'hospitalEmail' || field.id === 'adminEmail' || field.id === 'password'
                                ? 'Input_Style Invalid_Input' : 'Input_Style'}
                                id={field.id}
                                type={field.type}
                                placeholder={field.value}
                                onChange={props.onchange}
                                
                                minLength={field.name === 'Phone Number' ? 11 : undefined}
                                maxLength={field.name === 'Phone Number' ? 14 : undefined}
                                pattern={field.name === 'Email' ? emailPattern : undefined}
                                onInvalid={changeInputAppearanceOnInvalid}
                                required
                            />
                          {props.icon && (<div className='Icon_Style'>{props.icon}</div>)}
                        </Fragment>
                      </div>
                )
            })}
        </div>
    )
}

export default InputFamily