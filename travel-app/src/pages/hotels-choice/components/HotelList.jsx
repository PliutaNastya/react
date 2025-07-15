import { hotels } from "../utils"
import HotelCard from "./HotelCard"

function HotelList() {
	return (
		<ul className="list">
			{
				hotels.map(hotel => (
					<HotelCard key={hotel.id} {...hotel} />
				))
			}
		</ul>
	)
}

export default HotelList