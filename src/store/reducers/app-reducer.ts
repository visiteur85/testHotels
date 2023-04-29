import {createSlice, PayloadAction,} from "@reduxjs/toolkit";


export const slice = createSlice({
    name: 'app',
    initialState: {
        isLoading: null as null | boolean,
        isInitialized: true
    },
    reducers: {
        isLoadingAc(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        isInitializedAC(state, action: PayloadAction<boolean>) {
            state.isInitialized = action.payload
        },

    },

});

export const appReducer = slice.reducer;
export const {isLoadingAc, isInitializedAC} = slice.actions;