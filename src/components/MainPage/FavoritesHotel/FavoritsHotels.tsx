import React from 'react';
import style from './favoriteHotels.module.scss'

export const FavoritesHotels = () => {
    return (
        <div className={style.favoritesHotels}>
            <h2>Избранное</h2>
            <div className={style.buttons}>
                <div className={style.rateButton}>Рейтинг</div>
                <div className={style.priceButton}>Цена</div>
            </div>
        </div>
    );
};

