import {AppState} from "./store";

export const selectHotels = (state: AppState)=>state.find.findHotel;
export const allHotelsfromServer = (state:AppState)=>state.getHotels.hotels;
export const favoriteHotelsSelector = (state:AppState)=>state.favoriteHotels.favoriteHotels

export const appStatus = (state:AppState)=>state.appReducer