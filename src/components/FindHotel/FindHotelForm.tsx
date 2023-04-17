import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {AuthInput} from "../authInput/authInput";
import {FindFormType} from "../../types/FindFormType";
import {Button} from "../Button/UniversalButton";
import s from './findHotelForm.module.scss'
import dayjs from "dayjs";
import {useAppSelector} from "../../store/store";
import {selectHotels} from "../../store/selectors";


export const FindHotelForm = () => {
    const hotels = useAppSelector(selectHotels);
    console.log(hotels)
    const today = dayjs().format('YYYY-MM-DD');
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
    } = useForm<FindFormType>({mode: 'onBlur'});
    const onSubmit: SubmitHandler<FindFormType> = (data) => {
    };

    return (
        <div>
            <div className={s.formWrapper}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.cityInput}>
                        <AuthInput
                            register={register}
                            error={errors.city}
                            name='city'
                            required='Введите город'
                            inputName="Локация"
                            defaultValue="Москва"
                        />
                    </div>
                    <div className={s.dateInput}>
                        <AuthInput
                            register={register}
                            error={errors.date}
                            name='date'
                            required='Введите дату'
                            inputName="Дата заселения"
                            defaultValue={today}
                        />
                    </div>
                    <div className={s.dateEnd}>
                        <AuthInput
                            register={register}
                            error={errors.endDate}
                            name='number'
                            required='Введите количество дней'
                            inputName="Количество дней"
                            defaultValue="1"

                        />
                    </div>

                    <Button type='submit' isValid={isValid}>
                        Найти
                    </Button>

                </form>
            </div>
        </div>
    );
};

