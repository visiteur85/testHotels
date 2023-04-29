import React, {useState} from 'react';
import style from './favoriteHotels.module.scss'
import {Sorting} from "../../Sorting/Sorting";
import {HotelCard} from "../../hotelCard/HotelCard";
import {useAppSelector} from "../../../store/store";
import {favoriteHotelsSelector} from "../../../store/selectors";
import {FavoriteHotel, SortOrderType, SortPropertyType} from "../../../types/hotelsType";

export const FavoritesHotels = () => {
    const favoriteHotels: FavoriteHotel[] = useAppSelector(favoriteHotelsSelector)

    const [sort, setSort] = useState<{ order: SortOrderType, property: SortPropertyType }>({order: 'up', property: ''})

    const handleToggle = (property: SortPropertyType) => {


        setSort((prevSort) => ({
            order:
                prevSort.property === property && prevSort.order === 'up'
                    ? 'down'
                    : 'up',
            property:property
        }));

    }

    const sortedFavorites = () => {

        if (sort.property) {


            return [...favoriteHotels].sort((a, b) => {
                const priceDiff = a.priceAvg - b.priceAvg;
                const ratingDiff = a.stars - b.stars;
                const diff = sort.property === 'price' ? priceDiff : ratingDiff;
                return sort.order === 'up' ? diff : -diff
            });
        }
        return favoriteHotels
    }

    return (
        <div className={style.favoritesHotels}>
            <h2>Избранное</h2>
            <div className={style.buttons}>
                <Sorting name="Рейтинг" order={sort.order} selected={sort.property === 'rating'}
                         onChangeProperty={() => handleToggle('rating')}
                />
                <Sorting name="Цена" order={sort.order} selected={sort.property === 'price'}
                         onChangeProperty={() => handleToggle('price')}
                />
            </div>
            {sortedFavorites().length === 0 ?
                <div className={style.text}>Отелей не найдено</div> :
                <div className={style.hotelsCards}>
                    {sortedFavorites().map((hotel) => {
                        return (
                            <div className={style.hotelInfo} key={hotel.hotelId + '' + hotel.date}>
                                <HotelCard name={hotel.hotelName}
                                           hotelId={hotel.hotelId}
                                           rating={hotel.stars}
                                           price={hotel.priceAvg}
                                           favorite={hotel.isFavorite}
                                           formattedDate={hotel.date}
                                           diffDate={hotel.period}

                                           favoriteClass={hotel.favoriteClass}
                                />
                            </div>)
                    })}
                </div>
            }

        </div>
    );
};

