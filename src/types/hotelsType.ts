export type HotelsType = {
    hotelId:number
    hotelName:string
    priceAvg:number
    stars:number

}
export type HotelsWithFavoriteType = HotelsType & {isFavorite:boolean}