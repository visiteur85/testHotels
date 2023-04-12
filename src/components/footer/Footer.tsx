import React from 'react';
import logOut from "../../assets/svg/log out.svg"
import style from './footer.module.scss'
import {useNavigate} from "react-router-dom";
import {PATH} from "../../util/path";
import {removeFromStorage} from "../../util/local-storage";

export const Footer = () => {
    const navigate = useNavigate()

    const onLogOut = () => {
        removeFromStorage('login')
        navigate(PATH.LOGIN)
    }
    return (
        <>
            <h2 className={style.heading}>Simple Hotel Check</h2>
            <div className={style.logout}>
                <p className={style.logoutText}>Выйти</p>
                <div onClick={onLogOut}>
                    <img src={logOut} alt="logOut"/>
                </div>
            </div>
        </>
    );
};

