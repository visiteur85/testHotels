import React from 'react';
import style from './hotelCard.module.scss'
import {useAppDispatch, useAppSelector} from "../../../../store/store";
import {selectHotels} from "../../../../store/selectors";
import 'dayjs/locale/ru';
import {countOfDays} from "../../../../util/countOfDays";
import {ReactComponent as Star} from "../../../../assets/svg/star.svg";
import {ReactComponent as Heart} from "../../../../assets/svg/heart.svg";
import {changeFavorite} from "../../../../store/reducers/getHotel-reducer";


type HotelCardPropsType = {
    name: string
    hotelId: number
    rating: number
    price: number
    favorite: boolean

}

export const HotelCard = ({name, rating, price, favorite, hotelId}: HotelCardPropsType) => {
    const dispatch = useAppDispatch()
    const findedHotels = useAppSelector(selectHotels);

    const dayjs = require('dayjs');
    const duration = require('dayjs/plugin/duration');
    const localizedFormat = require('dayjs/plugin/localizedFormat');
    dayjs.extend(localizedFormat, duration);
    const formattedDate = dayjs(findedHotels.date).locale('ru').format('DD MMMM YYYY');
    const startDate = dayjs(findedHotels.date);
    const endDate = dayjs(findedHotels.endDate);
    const diff = endDate.diff(startDate, 'day');
    const onFavoriteClick = () => {
        dispatch(changeFavorite(hotelId))
    }


    return (
        <div className={style.hotelCard}>
            <div className={style.hotelInfo}>

                <div className={style.infoAboutHotel}>
                    <div className={style.nameAndFavorite}>
                        <div className={style.nameHotel}>{name}</div>
                        <div>
                            <Heart onClick={onFavoriteClick} className={favorite ? style.fill : ""}/>
                        </div>
                    </div>
                    <div className={style.formattedDate}>{formattedDate} - {diff} {countOfDays(diff)}</div>
                    <div className={style.priceAndStars}>
                        <div className={style.rait}>
                            {Array.from({length: 5}, (_, index) =>
                                <Star key={index} className={index + 1 <= rating ? style.fill : ""}
                                />)}
                        </div>

                        <p><span className={style.nameOfPrice}>Цена:</span><span
                            className={style.price}>{Math.trunc(price)} ₽</span></p>


                    </div>
                </div>
            </div>

        </div>
    );
};

