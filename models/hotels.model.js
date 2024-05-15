import mongoose, { Schema } from "mongoose";

const hotelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    airportCode: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    highRate: {
        type: Number,
        required: false
    },
    location: {
        type: Object,
        required: false
    },
    locationDescription: {
        type: String,
        required: true
    },
    lowRate: {
        type: Number,
        required: false
    },
    postalCode: {
        type: Number,
        required: false
    },
    propertyCategory: {
        type: Number,
        required: false
    },
    shortDescription: {
        type: String,
        required: true
    },
    stateProvinceCode: {
        type: String,
        required: true
    },
    thumbNailUrl: {
        type: String,
        required: true
    },
    gallery: {
        type: Array,
        required: false
    },
    overview: {
        type: String,
        required: true
    },
    amenities: {
        type: Array,
        required: false
    }

})
export const hotelModel = mongoose.models.hotels ?? mongoose.model("hotels", hotelSchema) 