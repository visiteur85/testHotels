import React from 'react';
import {Navigate} from "react-router-dom";
import {getLoginFromStorage} from "../../util/loginForLocalStorage";
import {PATH} from "../../util/path";
import {Footer} from "../footer/Footer";
import style from './mainPage.module.scss'
import {FindHotelForm} from "../FindHotel/FindHotelForm";


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
            <div className={style.subMainPage}>
                <div className={style.findAndFavorites}>
                    <div className={style.findHotel}>
                        <FindHotelForm/>
                    </div>
                    <div className={style.favoritesHotel}></div>
                </div>

                <div className={style.hotels}></div>

            </div>
        </div>
    );
};

