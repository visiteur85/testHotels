import React from 'react';
import style from './hotels.module.scss'
import {allHotelsfromServer, selectHotels} from "../../../store/selectors";
import {useAppSelector} from "../../../store/store";
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import vector from '../../../assets/svg/Vector.svg'
import {Carousel} from "./Slider/Slider";
import {HotelCard} from "./hotelCard/HotelCard";
import houseIcon from "../../../assets/pictures/house.png";


export const Hotels = () => {
    const findedHotels = useAppSelector(selectHotels);
    const allHotels = useAppSelector(allHotelsfromServer)
    const price = useAppSelector(allHotelsfromServer)
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
            <div className={style.allHotelsBlock}>
                {allHotels.map((m) => {
                    return (
                        <div className={style.hotelInfo}>
                            <div className={style.house}>
                                <img src={houseIcon} alt=""/>
                            </div>
                            <HotelCard name={m.hotelName} key={m.hotelId} hotelId={m.hotelId}
                                       rating={m.stars}
                                       price={m.priceAvg}
                                       favorite={m.isFavorite}


                            />
                        </div>)
                })}
            </div>
        </div>
    );
}
    ;

