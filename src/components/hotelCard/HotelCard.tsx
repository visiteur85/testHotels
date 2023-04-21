import React from 'react';
import style from './hotelCard.module.scss'
import houseIcon from '../../assets/pictures/house.png'
import {useAppSelector} from "../../store/store";
import {allHotelsfromServer, selectHotels} from "../../store/selectors";
import 'dayjs/locale/ru';
import {countOfDays} from "../../util/countOfDays";
import {ReactComponent as Star} from "../../assets/svg/star.svg";

type HotelCardPropsType = {
    name: string
    hotelId: number
    raiting: number
}

export const HotelCard = ({name, raiting}: HotelCardPropsType) => {
    const findedHotels = useAppSelector(selectHotels);

    const dayjs = require('dayjs');
    const duration = require('dayjs/plugin/duration');
    const localizedFormat = require('dayjs/plugin/localizedFormat');
    dayjs.extend(localizedFormat, duration);
    const formattedDate = dayjs(findedHotels.date).locale('ru').format('DD MMMM YYYY');
    const startDate = dayjs(findedHotels.date);
    const endDate = dayjs(findedHotels.endDate);
    const diff = endDate.diff(startDate, 'day');


    return (
        <div className={style.hotelCard}>
            <div className={style.hotelInfo}>
                <div className={style.house}>
                    <img src={houseIcon} alt=""/>
                </div>
                <div>
                    <div>{name}</div>
                    <div>{formattedDate} - {diff} {countOfDays(diff)}</div>
                    <div className={style.rait}>
                        {Array.from({length: 5}, (_, index) =>
                            <Star key={index} className={index + 1 <= raiting ? style.fill : ""}
                            />)}
                    </div>


                </div>

            </div>
            <div className={style.hotelInfo}>asdfasdff</div>
        </div>
    );
};

