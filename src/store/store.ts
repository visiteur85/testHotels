import createSagaMiddleware from '@redux-saga/core';
import {AnyAction, combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {findHotelReducer} from "./findHotel-reducer";

const sagaMiddleware = createSagaMiddleware();
const reducers = {
    find: findHotelReducer,

};

const reducer = combineReducers(reducers);

function* sagas() {
    // yield takeEvery('CREATE-CONNECTION', createConnectionSaga);
    // yield takeEvery('CLOSE-CONNECTION', closeConnectionSaga);
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