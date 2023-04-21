export     const countOfDays = (count:string)=> {
    if (+count === 1) return 'день'
    if (+count >= 2 && +count <= 4) return "дня"
    return "дней"
}