import {instance} from "./instance/instanse";
import {FindFormType} from "../types/FindFormType";

export const hotelsApi = {
    hotels(filters:FindFormType) {
        return instance.get(``,
            {
                params: {
                    location: filters.city,
                    currency: 'rub',
                    checkIn: filters.date,
                    checkOut: filters.endDate,
                    limit: 10

                }
            }
        )
    }
}