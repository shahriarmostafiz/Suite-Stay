import Gallery from "@/components/hotel/Details/Gallery";
import Overview from "@/components/hotel/Details/Overview";
import Summary from "@/components/hotel/Details/Summery";
import { getAHotelInfo } from "@/db/queries";

const DetailPage = async ({ params: { id } }) => {
    const hotel = await getAHotelInfo(id)
    console.log(hotel);
    return (
        <>
            <Summary hotel={hotel} />
            <Gallery gallery={hotel.gallery} />
            <Overview overview={hotel.overview} />
        </>
    );
};

export default DetailPage;