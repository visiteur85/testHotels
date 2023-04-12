import React from 'react';
import {AuthInput} from "../../authInput/authInput";
import {SubmitHandler, useForm} from "react-hook-form";
import {LoginFormType} from "../../../types/LoginFormType";
import s from "./auorizationForm.module.scss"
import {Button} from "../../Button/UniversalButton";
import {saveLoginToStorage} from "../../../util/loginForLocalStorage";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../../util/path";


export const AutorizationForm = () => {
    const navigate = useNavigate()


    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
    } = useForm<LoginFormType>({mode: 'onBlur'});
    const onSubmit: SubmitHandler<LoginFormType> = (data) => {
        saveLoginToStorage(data)
        navigate(PATH.MAIN_PAGE)
    };
    return (
        <div className={s.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.emailInput}>
                    <AuthInput
                        register={register}
                        error={errors.email}
                        name='email'
                        required='Введите email'
                        inputName="Email"
                    />
                </div>
                <div className={s.passwordInput}>
                    <AuthInput
                        register={register}
                        error={errors.password}
                        name='password'
                        required='Введите пароль'
                        inputName="Пароль"
                    />
                </div>
                <Button type='submit' isValid={isValid}>
                    Войти
                </Button>
            </form>
        </div>
    );
};

