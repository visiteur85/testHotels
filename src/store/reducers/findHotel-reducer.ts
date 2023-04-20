import {createSlice, PayloadAction,} from "@reduxjs/toolkit";
import dayjs from "dayjs";
import {FindFormType} from "../../types/FindFormType";
import {converterTime} from "../../util/converterTime";

export const slice = createSlice({
    name: 'findHotel',
    initialState: {
        findHotel: {
            city: "Москва",
            date: dayjs().format('YYYY-MM-DD'),
            endDate: converterTime(1)
        } as FindFormType

    },
    reducers: {
        saveFoundHotels(state, action: PayloadAction<FindFormType>) {
            state.findHotel = action.payload
        },
    },

});

export const findHotelReducer = slice.reducer;
export const {saveFoundHotels  } = slice.actions;