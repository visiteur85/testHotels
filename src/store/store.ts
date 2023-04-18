import createSagaMiddleware from '@redux-saga/core';
import {AnyAction, combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {findHotelReducer} from "./reducers/findHotel-reducer";
import {getHotelReducer} from "./reducers/getHotel-reducer";
import { takeEvery } from '@redux-saga/core/effects';
import {getHotelsSaga} from "./sagas/getHotelsSaga";

const sagaMiddleware = createSagaMiddleware();
const reducers = {
    find: findHotelReducer,
    getHotels:getHotelReducer

};

const reducer = combineReducers(reducers);

function* sagas() {
    yield takeEvery('GET-HOTELS', getHotelsSaga);
}

export const makeStore = () => {
    const store = configureStore({
        reducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(sagaMiddleware),
    });
    sagaMiddleware.run(sagas);
    return store;
};

export type AppState = ReturnType<AppStore['getState']>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppThunkDispatch = ThunkDispatch<AppState, any, AnyAction>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch: () => AppThunkDispatch = useDispatch;