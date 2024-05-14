import PastBooking from '@/components/user/PastBookings';
import UpcomingBooking from '@/components/user/UpcomingBookings';
import ProfileInfo from '@/components/user/UserInfo';
import React from 'react';

const BookingsPage = () => {
    return (
        <>
            <section className="mt-[100px]">
                <div className="container">
                    {/* profile */}
                    <ProfileInfo />
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <PastBooking />
                        <UpcomingBooking />
                    </div>
                </div>
            </section>

        </>
    );
};

export default BookingsPage;