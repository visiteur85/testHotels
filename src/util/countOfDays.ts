
export const getCountWord = (count: number, type: 'days' | 'hotels'): string => {
    if (type === 'days') {
        if (count === 1) return 'день';
        if (count >= 2 && count <= 4) return 'дня';
        return 'дней';
    }
    if (type === 'hotels') {
        if (count === 1) return 'отель';
        if (count >= 2 && count <= 4) return 'отеля';
        return 'отелей';
    }
    return '';
};