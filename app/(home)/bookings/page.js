import { auth } from '@/auth';
import PastBooking from '@/components/user/PastBookings';
import UpcomingBooking from '@/components/user/UpcomingBookings';
import ProfileInfo from '@/components/user/UserInfo';
import { redirect } from 'next/navigation';
import React from 'react';

const BookingsPage = async () => {
    const authInfo = await auth()
    if (!authInfo) {
        redirect("/login")
    }
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