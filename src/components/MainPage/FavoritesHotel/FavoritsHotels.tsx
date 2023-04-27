import React from 'react';
import style from './favoriteHotels.module.scss'
import {Sorting} from "../../Sorting/Sorting";
import {HotelCard} from "../../hotelCard/HotelCard";
import {useAppSelector} from "../../../store/store";
import {favoriteHotelsSelector} from "../../../store/selectors";
import {FavoriteHotel} from "../../../types/hotelsType";

export const FavoritesHotels = () => {

    const favoriteHotels: FavoriteHotel[] = useAppSelector(favoriteHotelsSelector)

    return (
        <div className={style.favoritesHotels}>
            <h2>Избранное</h2>
            <div className={style.buttons}>
                <Sorting name="Рейтинг"/>
                <Sorting name="Цена"/>
            </div>
            {favoriteHotels.length === 0 ?
                <div className={style.text}>Отелей не найдено</div> :
                <div className={style.hotelsCards} >
                    {favoriteHotels.map((hotel)=>{return (
                        <HotelCard name={hotel.hotelName}
                                   hotelId={hotel.hotelId}
                                   rating={hotel.stars}
                                   price={hotel.priceAvg}
                                   favorite={hotel.isFavorite}
                                   formattedDate={hotel.date}
                                   diffDate={hotel.period}
                                   key={hotel.hotelId}
                        />

                    )})}

                </div>
            }

        </div>
    );
};

