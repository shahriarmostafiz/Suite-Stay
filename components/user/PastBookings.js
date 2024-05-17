import BookingCard from "./BookingCard";

const PastBooking = ({ bookings, time }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">{time === "past" ? " 🕛️ Past" : "⌛️ Upcomming"} Bookings</h2>

            {
                bookings.length ?


                    bookings?.map(booking => <BookingCard booking={booking} key={booking?.id} />)
                    : <div className="bg-[#ebf6e9] p-4 min-h-[132px] rounded-md text-xl font-semibold">
                        No bookings
                    </div>
            }
        </div>
    );
};

export default PastBooking;
