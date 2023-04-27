export     const countOfDays = (count:number)=> {
    if (count === 1) return 'день'
    if (count >= 2 && count <= 4) return "дня"
    return "дней"
}