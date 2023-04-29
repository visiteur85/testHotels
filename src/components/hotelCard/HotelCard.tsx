import React, {useEffect} from 'react';
import style from './hotelCard.module.scss'
import {useAppDispatch, useAppSelector} from "../../store/store";
import 'dayjs/locale/ru';
import {getCountWord} from "../../util/countOfDays";
import {ReactComponent as Star} from "../../assets/svg/star.svg";
import {ReactComponent as Heart} from "../../assets/svg/heart.svg";
import {setFavoriteFalse, setFavoriteTrue} from "../../store/reducers/getHotel-reducer";
import {addFavoriteHotel, removeHotel} from "../../store/reducers/favoriteHotels-reducer";
import {favoriteHotelsSelector, selectHotels} from "../../store/selectors";


type HotelCardPropsType = {
    name: string
    hotelId: number
    rating: number
    price: number
    favorite: boolean
    formattedDate: string
    diffDate: number
    favoriteClass?:boolean


}

export const HotelCard = ({name, rating, price, favorite, hotelId, formattedDate, diffDate, favoriteClass}: HotelCardPropsType) => {
        const dispatch = useAppDispatch()
        const findedHotels = useAppSelector(selectHotels)
        const favoriteHotels = useAppSelector(favoriteHotelsSelector)
    console.log(favoriteClass)

    useEffect(() => {

            if (favoriteHotels.length > 0) {
                const checkHotel = favoriteHotels.find(hotel => hotel.hotelId === hotelId && hotel.priceAvg === price)
                if (checkHotel) {
                    dispatch(setFavoriteTrue(hotelId))
                }

            }
        }, [findedHotels.endDate])


        const onFavoriteClick = () => {
            if (!favorite) {
                dispatch(addFavoriteHotel({
                    hotelId: hotelId,
                    hotelName: name,
                    isFavorite: true,
                    stars: rating,
                    date: formattedDate,
                    period: diffDate,
                    priceAvg: price,
                    favoriteClass: true
                }))
                dispatch(setFavoriteTrue(hotelId))
            } else {
                dispatch(removeHotel({hotelId: hotelId, date: formattedDate, period: diffDate, price:price }))
                dispatch(setFavoriteFalse({hotelId, price}))

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
                        <div className={style.formattedDate}>{formattedDate} - {diffDate} {getCountWord(diffDate, 'days')}</div>
                        <div className={style.priceAndStars}>
                            <div className={` ${style.rait} ${favoriteClass ? style.check : style.ddd}`}>
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

