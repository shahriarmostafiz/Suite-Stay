import { auth } from '@/auth';
import PaymentForm from '@/components/payment/PaymentForm';
import { getAHotelInfo, getUserbyEmail } from '@/db/queries';
import { getDays } from '@/utils/data.utils';
import { redirect } from 'next/navigation';
import React from 'react';



const PaymentPage = async ({ params: { id }, searchParams: { checkin, checkout } }) => {
    const authInfo = await auth()
    if (!authInfo) {
        redirect("/login")
    }
    const userInfo = await getUserbyEmail(authInfo?.user?.email)
    const hotelInfo = await getAHotelInfo(id, checkin, checkout)

    const days = getDays(checkin, checkout)
    const basePrice = parseInt((hotelInfo.highRate + hotelInfo.lowRate) / 2)
    const cost = days * basePrice

    // console.log("user:", userInfo);
    return (
        <section className="container">
            <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
                <h2 className="font-bold text-2xl">Payment Details</h2>
                <p className="text-gray-600 text-sm">You have picked <b>{hotelInfo?.name}</b> <br />  base price is <b> $ {basePrice}
                    /night</b>
                    <br />

                </p>
                <p className="text-bold ">
                    Your Total for {days} days is  USD ${cost}
                </p>
                <PaymentForm checkin={checkin} checkout={checkout} hotelInfo={hotelInfo} userInfo={userInfo} cost={cost} />
            </div>
        </section>
    );
};

export default PaymentPage;