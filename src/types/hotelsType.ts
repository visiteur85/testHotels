export type HotelsType = {
    hotelId: number
    hotelName: string
    priceAvg: number
    stars: number

}
export type HotelsWithFavoriteType = HotelsType & { isFavorite: boolean }


export type FavoriteHotel = HotelsWithFavoriteType & { date: string, period: number, favoriteClass:boolean };

export type RemovingHotelType = {
    hotelId: number
    date: string
    period: number


}


export type SortOrderType = 'up' | 'down';
export type SortPropertyType = 'rating' | 'price' | '';