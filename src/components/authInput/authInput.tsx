import React from 'react';
import {FieldError} from "react-hook-form";
import s from './authInput.module.scss'

type AuthTextFieldType = {
    register: any;
    error: FieldError | undefined;
    name: string;
    required: string;
    inputName: string
};

export const AuthInput = ({
                              register,
                              error,
                              name,
                              required,
                              inputName
                          }: AuthTextFieldType) => {
    const isPassword = () => (name === 'password' ? 8 : 2);
    const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const validation = {
        ...register(name, {
            required: required,
            pattern: {
                value: name === 'email' ? emailValidation : null,
                message: 'Введите корретный email',
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
            <span className={s.inputName}>{inputName}</span>
            <div className={s.inputStyle}>
                <input className={s.input} type={name} {...validation} />
                <div className={s.errorStyle}>
                    {error && (
                        <span className={s.error}>{error.message || 'Error'}</span>
                    )}
                </div>
            </div>
        </>
    );
};

