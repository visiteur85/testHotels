import React from 'react';
import style from './hotels.module.scss'
import {selectHotels} from "../../store/selectors";
import {useAppSelector} from "../../store/store";
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import vector from '../../assets/svg/Vector.svg'
import {Carousel} from "../Slider/Slider";


export const Hotels = () => {
    const findedHotels = useAppSelector(selectHotels);
    const localizedFormat = require('dayjs/plugin/localizedFormat');
    dayjs.extend(localizedFormat);
    const formattedDate = dayjs(findedHotels.date).locale('ru').format('DD MMMM YYYY');
    return (
        <div className={style.allHotels}>
            <div className={style.heading}>
                <div>
                    <span className={style.nameofHeading}>Отели</span>
                    <img src={vector} alt=""/>
                    <span className={style.nameofCity}>{findedHotels.city}</span>
                </div>
                <div>
                    <span>{formattedDate}</span>
                </div>

            </div>
            <div className={style.carousel}>
                <Carousel/>
            </div>
            <p className={style.nameOfList}>Добавлено в избранное: <span>3</span> отеля</p>
            <div>asdfasdf</div>


        </div>
    );
};

