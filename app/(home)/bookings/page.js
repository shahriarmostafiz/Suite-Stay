import { auth } from '@/auth';
import PastBooking from '@/components/user/PastBookings';
import UpcomingBooking from '@/components/user/UpcomingBookings';
import ProfileInfo from '@/components/user/UserInfo';
import { getUserbyEmail, getUsersBooking } from '@/db/queries';
import { redirect } from 'next/navigation';
import React from 'react';

const BookingsPage = async () => {
    const authInfo = await auth()
    if (!authInfo) {
        redirect("/login")
    }
    const userInfo = await getUserbyEmail(authInfo?.user?.email)
    const userBookings = await getUsersBooking(userInfo?.id)

    let pastBooking = []
    let futureBooking = []
    if (userBookings.length) {
        pastBooking = userBookings.filter(booking => {
            return (new Date(booking.checkout).getTime() < new Date().getTime() || new Date(booking.checkin).getTime() < new Date().getTime())
        })
        futureBooking = userBookings.filter(booking => {
            return (new Date(booking.checkin).getTime() > new Date().getTime())
        })
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
                        <PastBooking bookings={pastBooking} time={"past"} />
                        <PastBooking bookings={futureBooking} time={"future"} />
                    </div>
                </div>
            </section>

        </>
    );
};

export default BookingsPage;