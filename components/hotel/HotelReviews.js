import { auth } from '@/auth';
import { getHotelReviews } from '@/db/queries';
import Link from 'next/link';
import React from 'react';

const HotelReviews = async ({ id }) => {
    const user = await auth()

    const hotelReviews = await getHotelReviews(id)
    if (!hotelReviews.length && user) {
        return <Link href={"#"} className='underline'>Add a Review </Link>
    }

    if (hotelReviews.length) {
        return (
            <Link href={`/reviews/${id}`}>{hotelReviews.length} {" "}
                {
                    hotelReviews.length > 1 ? " Reviews" : "Review"
                }
            </Link>
        );
    }
}




export default HotelReviews;