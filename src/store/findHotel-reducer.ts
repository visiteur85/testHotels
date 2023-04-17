import {createSlice,} from "@reduxjs/toolkit";
import dayjs from "dayjs";

export const slice = createSlice({
    name: 'findHotel',
    initialState: {
        findHotel: {
            city: "Москва",
            date: dayjs().format('YYYY-MM-DD'),
            endDate: dayjs().add(1, 'day').format('YYYY-MM-DD'),
        }

    },
    reducers: {
        // addTopic(state, action: PayloadAction<TopicType>) {
        //     state.topic = action.payload;
        // },
    },

});

export const findHotelReducer = slice.reducer;
export const {  } = slice.actions;