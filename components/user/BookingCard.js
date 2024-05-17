import { getAHotelInfo } from '@/db/queries';
import { getDays } from '@/utils/data.utils';
import React from 'react';

const BookingCard = async ({ booking }) => {
    const hotel = await getAHotelInfo(booking?.hotelId.toString())

    const days = getDays(booking?.checkin, booking?.checkout)
    const basePrice = parseInt((hotel.highRate + hotel.lowRate) / 2)
    const cost = days * basePrice
    return (
        <div className="bg-[#ebf6e9] p-4 rounded-md">
            <div className="flex justify-between items-center ">
                <div>
                    <h3 className="text-xl font-semibold">{hotel?.name}</h3>
                    <div className="text-sm text-gray-600 my-4">
                        <p>Check In: {booking?.checkin}</p>
                        <p>Check Out: {booking?.checkout}</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-right">${cost}</h3>
                    <p className="text-sm text-gray-600">${basePrice} per night x {days} days</p>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;