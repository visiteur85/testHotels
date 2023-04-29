import React from 'react';
import style from './sorting.module.scss'
import {SortOrderType} from "../../types/hotelsType";


type SortType = {
    name: string
    order: SortOrderType
    selected: boolean
    onChangeProperty: () => void

}

export const Sorting = ({name, order, selected, onChangeProperty}: SortType) => {

    const onClickHandler = () => {
        onChangeProperty()
    }
    return (
        <div className={
            selected ? `${style.selected} ${style.sortToggle}` : style.sortToggle
        } onClick={onClickHandler}>
            {name}
            <div className={style.arrows}>
                <div className={`${order === 'up' ? style.highlight : ''} ${
                    style.arrow
                }`}/>
                <div
                    className={`${order === 'down' ? style.highlight : ''} ${
                        style.arrow
                    }`}
                />
            </div>
        </div>
    );
};

