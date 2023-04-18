import {FindFormType} from "../../types/FindFormType";
import {call, put} from '@redux-saga/core/effects';
import {hotelsApi} from "../../api/hotelsApi";
import {AxiosError, AxiosResponse} from 'axios';
import {PayloadAction} from "@reduxjs/toolkit";
import {HotelsType} from "../../types/hotelsType";
import {getHotelsAC} from "../reducers/getHotel-reducer";


export function* getHotelsSaga(action: PayloadAction<FindFormType>) {
    try {
        const res: AxiosResponse<HotelsType[]> = yield call(hotelsApi.hotels, action.payload)
        console.log(res.data)
        yield put(getHotelsAC(res.data))
    } catch (e) {

    }

}

export const getHotels = (filters: FindFormType) => ({type: 'GET-HOTELS', payload: filters})



