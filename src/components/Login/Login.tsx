import React from 'react';
import style from './login.module.scss'
import {AutorizationForm} from "./autorisationForm/AutorizationForm";

export const Login = () => {
    return (
        <div className={style.loginPage}>
            <div className={style.wrapper}>
                <div className={style.loginPage__loginForm}>
                    <h1>Simple Hotel Check</h1>
                    <AutorizationForm/>
                </div>
            </div>
        </div>
    );
};
