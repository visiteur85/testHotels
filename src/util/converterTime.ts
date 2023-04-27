import dayjs from "dayjs";

export const converterTime = (days:number, data:any) => {
    return dayjs(data).add(days, 'day').format('YYYY-MM-DD')
}