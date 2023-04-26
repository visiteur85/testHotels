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
        },
        changeFavorite(state, action: PayloadAction<number>) {
            state.hotels = state.hotels.map((hotel) => {
                if (hotel.hotelId === action.payload) {
                    return {...hotel, isFavorite: !hotel.isFavorite}
                }
                return hotel
            })
        }
    },

});

export const getHotelReducer = slice.reducer;
export const {getHotelsAC, changeFavorite} = slice.actions;