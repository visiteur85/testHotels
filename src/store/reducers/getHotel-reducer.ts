import {createSlice, PayloadAction,} from "@reduxjs/toolkit";
import dayjs from "dayjs";
import {HotelsType} from "../../types/hotelsType";

export const slice = createSlice({
    name: 'getHotel',
    initialState: {
        hotels: [] as HotelsType[]


    },
    reducers: {

        getHotelsAC(state, action: PayloadAction<HotelsType[]>) {
            state.hotels = action.payload
            console.log('state',state.hotels)
        }
        // addTopic(state, action: PayloadAction<TopicType>) {
        //     state.topic = action.payload;
        // },
    },

});

export const getHotelReducer = slice.reducer;
export const {getHotelsAC} = slice.actions;