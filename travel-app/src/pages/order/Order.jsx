import { TravelContext } from "@/context/TravelContext"
import { useContext } from "react"
import BusCard from "../bus-choice/components/BusCard"
import { buses } from "../bus-choice/utils"
import { hotels } from "../hotels-choice/utils"
import HotelCard from "../hotels-choice/components/HotelCard"

function Order() {
	const { travelState } = useContext(TravelContext)
	console.log(travelState)

	const getBusDetails = (id) => {
		return buses.find(bus => bus.id === id) || {}
	}

	const getHotelDetails = (id) => {
		return hotels.find(hotel => hotel.id === id) || {}
	}

	return (
		<section className="order">
			<div className="order__container">
				<h2 className="title">Order</h2>
				{travelState.buses.length ? (
					<>
						<h3>Selected Buses</h3>
						<ul className="list">
							{travelState?.buses?.map(busId => (
								<BusCard key={busId} {...getBusDetails(busId)} />
							))}
						</ul>
					</>
				) : <p>no buses selected</p>}
				{travelState.hotels.length ? (
					<>
						<h3>Selected Hotels</h3>
						<ul className="list">
							{travelState?.hotels.map(hotelId => (
								<HotelCard key={hotelId} {...getHotelDetails(hotelId)} />
							))}
						</ul>
					</>

				)
					: <p>no hotels selected</p>}
			</div>
		</section>
	)
}

export default Order