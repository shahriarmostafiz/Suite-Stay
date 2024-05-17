"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const PaymentForm = ({ checkin, checkout, userInfo, hotelInfo, cost }) => {

    const [payError, setPayError] = useState(null)
    const router = useRouter()

    const handlePayment = async (event) => {
        event.preventDefault()

        const info = {
            userId: userInfo?.id,
            hotelId: hotelInfo?.id,
            checkin, checkout
        }
        try {
            const res = await fetch("/api/auth/payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(info)
            })
            if (res.status === 201) {
                router.push("/bookings")
            }


        } catch (error) {
            console.log(error);
            setPayError(error.message)
        }
    }


    return (
        <>

            <form className="my-8" onSubmit={handlePayment}>
                <div className="my-4 space-y-2">
                    <label htmlFor="name" className="block">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={userInfo?.name}
                        className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
                    />
                </div>

                <div className="my-4 space-y-2">
                    <label htmlFor="email"

                        className="block">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={userInfo?.email}
                        className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
                    />
                </div>

                <div className="my-4 space-y-2">
                    <span>Check in</span>
                    <h4 className="mt-2">
                        <input type="date" name="checkin" id="checkin" value={checkin} disabled />
                    </h4>
                </div>

                <div className="my-4 space-y-2">
                    <span>Checkout</span>
                    <h4 className="mt-2">
                        <input type="date" name="checkout" id="checkout" value={checkout} disabled />
                    </h4>
                </div>

                <div className="my-4 space-y-2">
                    <label htmlFor="card" className="block">
                        Card Number
                    </label>
                    <input
                        type="text"
                        id="card"
                        className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
                    />
                </div>

                <div className="my-4 space-y-2">
                    <label htmlFor="expiry" className="block">
                        Expiry Date
                    </label>
                    <input
                        type="text"
                        id="expiry"
                        className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
                    />
                </div>

                <div className="my-4 space-y-2">
                    <label htmlFor="cvv" className="block">
                        CVV
                    </label>
                    <input
                        type="text"
                        id="cvv"
                        className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
                    />
                </div>

                <button type="submit" className="btn-primary w-full">
                    Pay Now (${cost})
                </button>
                {
                    payError && <p className="text-red-500">{payError}</p>
                }
            </form>
        </>
    );
};

export default PaymentForm;
