import React, {useEffect, useLayoutEffect, useState} from 'react';
import style from './hotelCard.module.scss'
import {useAppDispatch, useAppSelector} from "../../store/store";
import 'dayjs/locale/ru';
import {countOfDays} from "../../util/countOfDays";
import {ReactComponent as Star} from "../../assets/svg/star.svg";
import {ReactComponent as Heart} from "../../assets/svg/heart.svg";
import {setFavoriteFalse, setFavoriteTrue} from "../../store/reducers/getHotel-reducer";
import {addFavoriteHotel, removeHotel} from "../../store/reducers/favoriteHotels-reducer";
import {allHotelsfromServer, favoriteHotelsSelector, selectHotels} from "../../store/selectors";


type HotelCardPropsType = {
    name: string
    hotelId: number
    rating: number
    price: number
    favorite: boolean
    formattedDate: string
    diffDate: number


}

export const HotelCard = ({name, rating, price, favorite, hotelId, formattedDate, diffDate}: HotelCardPropsType) => {
        const dispatch = useAppDispatch()
        const allHotels = useAppSelector(selectHotels)

        const favoriteHotels = useAppSelector(favoriteHotelsSelector)
        useLayoutEffect(() => {
            console.log(123)
            if (favoriteHotels.length > 0) {
                const aaa = favoriteHotels.find(hotel => hotel.hotelId === hotelId && hotel.date === formattedDate && hotel.period === diffDate)
                if (aaa) {
                    dispatch(setFavoriteTrue(hotelId))
                }

            }
        }, [])


        const onFavoriteClick = () => {
            if (!favorite) {
                dispatch(addFavoriteHotel({
                    hotelId: hotelId,
                    hotelName: name,
                    isFavorite: true,
                    stars: rating,
                    date: formattedDate,
                    period: diffDate,
                    priceAvg: price
                }))
                dispatch(setFavoriteTrue(hotelId))

            } else {
                dispatch(removeHotel({hotelId: hotelId, date: formattedDate, period: diffDate}))
                dispatch(setFavoriteFalse(hotelId))

            }
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
                        <div className={style.formattedDate}>{formattedDate} - {diffDate} {countOfDays(diffDate)}</div>
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
    }
;

