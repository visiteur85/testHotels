import React from 'react';
import style from './hotelCard.module.scss'
import houseIcon from '../../assets/pictures/house.png'
import {useAppSelector} from "../../store/store";
import {allHotelsfromServer, selectHotels} from "../../store/selectors";
import 'dayjs/locale/ru';
import {countOfDays} from "../../util/countOfDays";
import {ReactComponent as Star} from "../../assets/svg/star.svg";
import {ReactComponent as Heart} from "../../assets/svg/heart.svg";


type HotelCardPropsType = {
    name: string
    hotelId: number
    raiting: number
    price: number
    favorite:boolean

}

export const HotelCard = ({name, raiting, price, favorite, hotelId }: HotelCardPropsType) => {
    const findedHotels = useAppSelector(selectHotels);

    const dayjs = require('dayjs');
    const duration = require('dayjs/plugin/duration');
    const localizedFormat = require('dayjs/plugin/localizedFormat');
    dayjs.extend(localizedFormat, duration);
    const formattedDate = dayjs(findedHotels.date).locale('ru').format('DD MMMM YYYY');
    const startDate = dayjs(findedHotels.date);
    const endDate = dayjs(findedHotels.endDate);
    const diff = endDate.diff(startDate, 'day');
    const onFavoriteClick = ()=> {

    }


    return (
        <div className={style.hotelCard}>
            <div className={style.hotelInfo}>
                <div className={style.house}>
                    <img src={houseIcon} alt=""/>
                </div>
                <div className={style.infoAboutHotel}>
                    <div className={style.nameAndFavorite}>
                        <div className={style.nameHotel}>{name}</div>
                        <Heart className={favorite ? style.fill: ""} />
                    </div>
                    <div className={style.formattedDate}>{formattedDate} - {diff} {countOfDays(diff)}</div>
                    <div className={style.priceAndStars}>
                        <div className={style.rait}>
                            {Array.from({length: 5}, (_, index) =>
                                <Star key={index} className={index + 1 <= raiting ? style.fill : ""}
                                />)}
                        </div>

                        <p><span className={style.nameOfPrice}>Цена:</span><span
                            className={style.price}>{Math.trunc(price)} ₽ </span></p>


                    </div>
                </div>
            </div>

        </div>
    );
};

