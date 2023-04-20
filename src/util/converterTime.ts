import dayjs from "dayjs";

export const converterTime = (days:number) => {
    return dayjs().add(days, 'day').format('YYYY-MM-DD')
}