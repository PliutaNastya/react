import { TravelContext } from "@/context/TravelContext"
import { TRAVEL_ACTIONS_TYPES } from "@/providers/travelActionsTypes"
import { useContext } from "react"

function HotelCard({ id, image, name, stars, pricePerNight, location }) {

	const { travelState, dispatch } = useContext(TravelContext)

	const toggleHotelSelect = () => {
		dispatch({
			type: TRAVEL_ACTIONS_TYPES.TOGGLE_HOTEL,
			payload: id
		})
	}

	return (
		<li className="card">
			<img src={image} alt="Hotel Image" />
			<div className="card__content">
				<h4>{name}</h4>
				<p>Stars: <span>{'★'.repeat(stars)}</span></p>
				<p>Price per night: €<span>{pricePerNight}</span></p>
				<p>{location}</p>
			</div>
			<button type="button" onClick={toggleHotelSelect}>
				{travelState.hotels.includes(id) ? 'Deselect' : 'Select'}
			</button>
		</li>
	)
}

export default HotelCard