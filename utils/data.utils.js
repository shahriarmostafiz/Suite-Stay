export const replaceIDinArray = (array) => {
    const mappedArray = array.map(item => {
        return {
            id: item._id.toString(),
            ...item
        }
    }).map(({ _id, ...rest }) => rest)
    return mappedArray
}
export const replaceObjectId = (obj) => {
    const { _id, ...updatedObj } = {
        ...obj, id: obj._id.toString()
    }
    return updatedObj
}

// export function isDateInBetween(date, from, to) {
//     return (
//         new Date(date).getTime() >= new Date(from).getTime() && new Date(date).getTime() <= new Date(to).getTime()
//     )

// }
export const isDateInbetween = (date, from, to) => {
    return (new Date(date).getTime() >= new Date(from).getTime() && new Date(date).getTime() <= new Date(to).getTime());
}

export const getDays = (from, to) => {
    const seconds = (new Date(to).getTime() - new Date(from).getTime()) / 1000
    const days = parseInt(seconds) / (60 * 60 * 24)
    return days
}