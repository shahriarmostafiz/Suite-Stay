import { getHotelRatings } from '@/db/queries';
import React from 'react';

const HoteRating = async ({ id }) => {

    let avgRating = "N/A";
    let rating;
    const allRatings = await getHotelRatings(id)
    if (allRatings.length === 1) {
        avgRating = allRatings[0].rating
    }

    if (allRatings.length > 1) {
        const ratingSUm = allRatings.reduce((sum, currentItem) => {
            return sum.rating + currentItem.rating
        })
        avgRating = ratingSUm / allRatings.length
    }

    // switch (avgRating) {
    //     case avgRating > 1:
    //         rating = "Poor"

    //         break;
    //     case avgRating > 2:
    //         rating = " average"

    //         break;
    //     case avgRating > 3:
    //         rating = "Good"

    //         break;
    //     case avgRating > 4:
    //         rating = "Very Good"

    //         break;
    //     case avgRating > 4.4:
    //         rating = "Excellent"

    //         break;

    //     default:
    //         rating = "No Ratings Available"
    // }
    if (avgRating > 4.4) {
        rating = "Excellent";
    } else if (avgRating > 4) {
        rating = "Very Good";
    } else if (avgRating > 3) {
        rating = "Good";
    } else if (avgRating > 2) {
        rating = "Average";
    } else if (avgRating > 0) {
        rating = "Poor";
    } else {
        rating = "No Ratings Available";
    }

    return (
        <>

            <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
                {avgRating}
            </div>
            <span className="font-medium">{rating}</span>
        </>
    );
};

export default HoteRating;