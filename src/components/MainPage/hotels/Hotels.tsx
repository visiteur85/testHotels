import React from 'react';
import style from './hotels.module.scss'
import {allHotelsfromServer, selectHotels} from "../../../store/selectors";
import {useAppSelector} from "../../../store/store";
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import vector from '../../../assets/svg/Vector.svg'
import {Carousel} from "./Slider/Slider";
import {HotelCard} from "../../hotelCard/HotelCard";
import houseIcon from "../../../assets/pictures/house.png";


export const Hotels = () => {
        const foundHotels = useAppSelector(selectHotels);
        const allHotels = useAppSelector(allHotelsfromServer)
        const localizedFormat = require('dayjs/plugin/localizedFormat');
        dayjs.extend(localizedFormat);


        const startDate = dayjs(foundHotels.date);
        const endDate = dayjs(foundHotels.endDate);

        const diff = endDate.diff(startDate, 'day');


        const formattedDate = dayjs(foundHotels.date).locale('ru').format('DD MMMM YYYY');
        return (
            <div className={style.allHotels}>
                <div className={style.heading}>
                    <div>
                        <span className={style.nameofHeading}>Отели</span>
                        <img src={vector} alt=""/>
                        <span className={style.nameofCity}>{foundHotels.city}</span>
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
                            <div className={style.hotelInfo} key={m.hotelId + '' + m.priceAvg}>
                                <div className={style.house}>
                                    <img src={houseIcon} alt=""/>
                                </div>
                                <HotelCard name={m.hotelName} hotelId={m.hotelId}
                                           rating={m.stars}
                                           price={m.priceAvg}
                                           favorite={m.isFavorite}
                                           formattedDate={formattedDate}
                                           diffDate={diff}
                                    // ob={ {hotelName: m.hotelName}}


                                />
                            </div>)
                    })}
                </div>
            </div>
        );
    }
;

