import { hotelModel } from "@/models/hotels.model";
import { replaceIDinArray, replaceObjectId } from "@/utils/data.utils";
import connectMongo from "./connectMongo";
import { ratingModel } from "@/models/ratings.model";
import { reviewModel } from "@/models/reviews.model";

export async function getAllHotels() {
    await connectMongo()
    const hotels = await hotelModel.find().lean()
    return replaceIDinArray(hotels)
}

export async function getAHotelInfo(id) {
    await connectMongo()
    const hotel = await hotelModel.findById(id).lean()
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