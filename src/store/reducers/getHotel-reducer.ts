import {createSlice, PayloadAction,} from "@reduxjs/toolkit";
import dayjs from "dayjs";
import {HotelsType, HotelsWithFavoriteType} from "../../types/hotelsType";

export const slice = createSlice({
    name: 'getHotel',
    initialState: {
        hotels: [] as HotelsWithFavoriteType[]


    },
    reducers: {

        getHotelsAC(state, action: PayloadAction<HotelsWithFavoriteType[]>) {
            state.hotels = action.payload
        }
    },

});

export const getHotelReducer = slice.reducer;
export const {getHotelsAC} = slice.actions;