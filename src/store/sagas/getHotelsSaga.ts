import {FindFormType} from "../../types/FindFormType";
import {call, put} from '@redux-saga/core/effects';
import {hotelsApi} from "../../api/hotelsApi";
import {AxiosError, AxiosResponse} from 'axios';
import {PayloadAction} from "@reduxjs/toolkit";
import {HotelsType, HotelsWithFavoriteType} from "../../types/hotelsType";
import {getHotelsAC} from "../reducers/getHotel-reducer";
import {isLoadingAc} from "../reducers/app-reducer";


export function* getHotelsSaga(action: PayloadAction<FindFormType>) {
    try {
        yield put(isLoadingAc(true))
        const res: AxiosResponse<HotelsType[]> = yield call(hotelsApi.hotels, action.payload)
        if (res) {
            yield put(isLoadingAc(false))
        }

        const hotelsWithFavorite: HotelsWithFavoriteType[] = res.data.map((m)=> {return  {...m, isFavorite:false}})

        yield put(getHotelsAC(hotelsWithFavorite))
    } catch (e) {

    }

}

export const getHotels = (filters: FindFormType) => ({type: 'GET-HOTELS', payload: filters})



