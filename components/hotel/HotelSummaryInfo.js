import Link from "next/link";
import HoteRating from "./HoteRating";
import HotelReviews from "./HotelReviews";

const HotelSummaryInfo = ({ fromListPage, info }) => {
    return (
        <>
            <div className={fromListPage ? "flex-1" : "flex-1 container"}>
                <h2 className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}>{info?.name}</h2>
                <p>📍 {info?.city}</p>
                <div className="flex gap-2 items-center my-4">
                    <HoteRating id={info.id} />
                    <HotelReviews id={info?.id} />
                </div>
                <div className="bg-primary text-white px-3 font-semibold py-1 rounded w-fit">
                    {info?.propertyCategory} Star Property
                </div>
            </div>

            <div className="flex flex-col gap-2 items-end justify-center">
                <h2 className="text-2xl font-bold text-right">${parseInt((info.highRate + info.lowRate) / 2)}/night</h2>
                <p className=" text-right">Per Night for 1 Room</p>
                {
                    fromListPage ? (<Link href={`/hotels/${info.id}`}>
                        <button className="btn-primary ">Details</button>
                    </Link>) : (<button className="btn-primary ">Book</button>)
                }
            </div>
        </>
    );
};

export default HotelSummaryInfo;
