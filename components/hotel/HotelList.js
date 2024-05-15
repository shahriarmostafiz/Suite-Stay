import { getAllHotels } from "@/db/queries";
import HotelCard from "./HotelCard";


const HotelList = async () => {
    const allHotels = await getAllHotels()
    // console.log("number of hotels found", allHotels.length);
    return (
        <div className="col-span-9">
            <div className="space-y-4">
                {
                    allHotels?.map(hotel => <HotelCard key={hotel.id} hotel={hotel} />)
                }
            </div>
        </div>
    );
};

export default HotelList;
