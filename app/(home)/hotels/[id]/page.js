import Gallery from "@/components/hotel/Details/Gallery";
import Overview from "@/components/hotel/Details/Overview";
import Summary from "@/components/hotel/Details/Summery";
import { getAHotelInfo } from "@/db/queries";

const DetailPage = async ({ params: { id }, searchParams: { checkin, checkout } }) => {
    const hotel = await getAHotelInfo(id, checkin, checkout)
    console.log(hotel);
    return (
        <>
            <Summary hotel={hotel} checkin={checkin} checkout={checkout} />
            <Gallery gallery={hotel.gallery} />
            <Overview overview={hotel.overview} />
        </>
    );
};

export default DetailPage;