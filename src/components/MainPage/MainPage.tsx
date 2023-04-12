import React from 'react';
import {Navigate} from "react-router-dom";
import {getLoginFromStorage} from "../../util/loginForLocalStorage";
import {PATH} from "../../util/path";
import {Footer} from "../footer/Footer";
import style from './mainPage.module.scss'
import {FindHotel} from "../FindHotel/FindHotel";
import {Result} from "../Result/Result";
import {FavoritsHotels} from "../FavoritesHotel/FavoritsHotels";

export const MainPage = () => {
    const login = getLoginFromStorage()

    if (!login) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <div className={style.mainPage}>
            <div className={style.footer}>
                <Footer/>
            </div>
            <div className={style.hotels}>
                <div className={style.find}>
                    <FindHotel/>
                </div>
                <div className={style.favorites}>
                    <FavoritsHotels/>
                </div>
                <div className={style.result}>
                <Result/>
                </div>
            </div>


        </div>
    );
};

