import {createSlice, PayloadAction,} from "@reduxjs/toolkit";

import {HotelsWithFavoriteType} from "../../types/hotelsType";

export const slice = createSlice({
    name: 'getHotel',
    initialState: {
        hotels: [] as HotelsWithFavoriteType[]
    },
    reducers: {
        getHotelsAC(state, action: PayloadAction<HotelsWithFavoriteType[]>) {
            state.hotels = action.payload
        },
        // changeFavorite(state, action: PayloadAction<number>) {
        //     state.hotels = state.hotels.map((hotel) => {
        //         if (hotel.hotelId === action.payload) {
        //             return {...hotel, isFavorite: !hotel.isFavorite}
        //         }
        //         return hotel
        //     })
        // },
        setFavoriteTrue(state, action: PayloadAction<number>) {
            state.hotels = state.hotels.map((hotel) => {
                if (hotel.hotelId === action.payload) {
                    return {...hotel, isFavorite: true}
                }
                return hotel
            })
        },
        setFavoriteFalse(state, action: PayloadAction<{hotelId:number, price:number}>) {
            state.hotels = state.hotels.map((hotel) => {
                if (hotel.hotelId === action.payload.hotelId && hotel.priceAvg === action.payload.price  ) {
                    return {...hotel, isFavorite: false}
                }
                return hotel
            })
        }
    },

});

export const getHotelReducer = slice.reducer;
export const {getHotelsAC,setFavoriteTrue, setFavoriteFalse} = slice.actions;