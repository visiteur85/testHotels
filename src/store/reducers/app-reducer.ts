import {createSlice, PayloadAction,} from "@reduxjs/toolkit";


export const slice = createSlice({
    name: 'app',
    initialState: {
        isLoading: null as null | boolean
    },
    reducers: {
        isLoadingAc(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },

    },

});

export const appReducer = slice.reducer;
export const {isLoadingAc} = slice.actions;