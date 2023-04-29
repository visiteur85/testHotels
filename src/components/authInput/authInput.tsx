import React from 'react';
import {FieldError} from "react-hook-form";
import s from './authInput.module.scss'


type AuthTextFieldType = {
    register: any;
    error: FieldError | undefined;
    name: string;
    required: string;
    inputName: string
    defaultValue?: string
    placeholder?:string


};

export const AuthInput = ({
                              register,
                              placeholder,
                              error,
                              name,
                              required,
                              inputName,
                              defaultValue,
                          }: AuthTextFieldType) => {
    const isPassword = () => (name === 'password' ? 8 : 1);
    const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const endDateValidation = /^\d+$/

    const validation = {
        ...register(name, {
            required: required,
            pattern: {
                value: (name === 'email') ? emailValidation : (name === 'endDate') ? endDateValidation : null,
                message: name === 'email' ? 'Введите корретный email' : 'Только цифры',
            },
            minLength: {
                value: name === 'email' ? null : isPassword(),
                message:
                    name === 'password'
                        ? 'Пароль должен содержать 8 символов'
                        : 'warningMessage',
            },
        }),
    };

    return (
        <>
            <span className={`${!error ? s.inputName : s.inputNameError}`}>{inputName}</span>
            <div className={s.inputStyle}>
                <input className={`${!error ? s.input : s.inputError}`} type={name} {...validation}
                       defaultValue={defaultValue} placeholder={ placeholder} min={new Date().toISOString().split('T')[0]}/>
                <div className={s.errorStyle}>
                    {error && (
                        <span className={s.error}>{error.message || 'Error'}</span>
                    )}
                </div>
            </div>
        </>
    );
};

