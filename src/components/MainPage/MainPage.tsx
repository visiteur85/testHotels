import React from 'react';
import {Navigate} from "react-router-dom";
import {getLoginFromStorage} from "../../util/loginForLocalStorage";
import {PATH} from "../../util/path";
import {Header} from "./header/Header";
import style from './mainPage.module.scss'
import {FindHotelForm} from "./FindHotel/FindHotelForm";
import {useAppSelector} from "../../store/store";
import {Hotels} from "./hotels/Hotels";


export const MainPage = () => {
    const hotels = useAppSelector(state => state.getHotels.hotels)
    const login = getLoginFromStorage()

    if (!login) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <div className={style.mainPage}>
            <div className={style.footer}>
                <Header/>
            </div>
            <div className={style.subMainPage}>
                <div className={style.findAndFavorites}>
                    <div className={style.findHotel}>
                        <FindHotelForm/>
                    </div>
                    <div className={style.favoritesHotel}>

                    </div>
                </div>

                <div className={style.hotels}>
                   <Hotels/>
                </div>

            </div>
        </div>
    );
};

