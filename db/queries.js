import { hotelModel } from "@/models/hotels.model";
import { isDateInbetween, replaceIDinArray, replaceObjectId } from "@/utils/data.utils";
import connectMongo from "./connectMongo";
import { ratingModel } from "@/models/ratings.model";
import { reviewModel } from "@/models/reviews.model";
import { bookingModel } from "@/models/bookings.model";
import { userModel } from "@/models/users.model";

export async function getAllHotels(destination, checkin, checkout) {

    const destReg = new RegExp(destination, "i")
    await connectMongo()
    const hotels = await hotelModel.find({ city: { $regex: destReg } }).lean()

    let allHotels = hotels;

    if (checkin && checkout) {
        allHotels = await Promise.all(
            allHotels.map(async (hotel) => {
                const found = await findBooking(hotel._id, checkin, checkout)
                if (found) {
                    hotel["isbooked"] = true
                } else {
                    hotel["isbooked"] = false
                }
                return hotel
            }))
    }
    return replaceIDinArray(allHotels)
}

async function findBooking(hotelId, checkin, checkout) {
    const matches = await bookingModel.find({ hotelId: hotelId.toString() }).lean()
    console.log(matches);

    const found = matches.find((match) => {
        return (
            isDateInbetween(checkin, match.checkin, match.checkout) || isDateInbetween(checkout, match.checkin, match.checkout)
        )
    })
    // console.log("found", found);
    return found
}

export async function getAHotelInfo(id, checkin, checkout) {
    await connectMongo()
    const hotel = await hotelModel.findById(id).lean()
    if (checkin && checkout) {
        const found = await findBooking(hotel._id, checkin, checkout)
        if (found) {
            hotel["isbooked"] = true

        } else {
            hotel["isbooked"] = false

        }
    }
    return replaceObjectId(hotel)
}

export async function getHotelRatings(id) {
    await connectMongo()
    const hotelRatings = await ratingModel.find({ hotelId: id }).lean()
    return replaceIDinArray(hotelRatings)
}
export async function getHotelReviews(id) {
    await connectMongo()
    const hotelReviews = await reviewModel.find({ hotelId: id }).lean()
    return replaceIDinArray(hotelReviews)


}



export async function getUserbyEmail(email) {
    const user = await userModel.findOne({ email: email }).lean()
    return replaceObjectId(user)
}

export async function getUsersBooking(userId) {
    const bookings = await bookingModel.find({ userId: userId }).lean()
    if (bookings.length) {
        return replaceIDinArray(bookings)
    } else {
        return []
    }
}