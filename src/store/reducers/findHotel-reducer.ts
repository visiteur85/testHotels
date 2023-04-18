import {createSlice,} from "@reduxjs/toolkit";
import dayjs from "dayjs";
import {FindFormType} from "../../types/FindFormType";

export const slice = createSlice({
    name: 'findHotel',
    initialState: {
        findHotel: {
            city: "Москва",
            date: dayjs().format('YYYY-MM-DD'),
            endDate: dayjs().add(1, 'day').format('YYYY-MM-DD'),
        } as FindFormType

    },
    reducers: {
        // addTopic(state, action: PayloadAction<TopicType>) {
        //     state.topic = action.payload;
        // },
    },

});

export const findHotelReducer = slice.reducer;
export const {  } = slice.actions;