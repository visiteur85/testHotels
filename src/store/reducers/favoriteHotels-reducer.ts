import {createSlice, PayloadAction,} from "@reduxjs/toolkit";

import {FavoriteHotel, RemovingHotelType} from "../../types/hotelsType";

export const slice = createSlice({
    name: 'favoriteHotels',
    initialState: {
        favoriteHotels: [] as FavoriteHotel[]


    },
    reducers: {
        addFavoriteHotel(state, action: PayloadAction<FavoriteHotel>) {
            state.favoriteHotels.push(action.payload)
        },
        removeHotel(state, action: PayloadAction<RemovingHotelType>) {

            state.favoriteHotels = state.favoriteHotels.filter((hotel) => {
                return (
                    hotel.hotelId !== action.payload.hotelId ||
                    hotel.date !== action.payload.date ||
                    hotel.period !== action.payload.period ||
                    hotel.priceAvg !== action.payload.price
                )

            })

        }
    },

});

export const favoriteHotelsReducer = slice.reducer;
export const {addFavoriteHotel, removeHotel} = slice.actions;