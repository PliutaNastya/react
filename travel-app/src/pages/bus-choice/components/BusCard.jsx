import { TravelContext } from "@/context/TravelContext"
import { TRAVEL_ACTIONS_TYPES } from "@/providers/travelActionsTypes"
import { useContext } from "react"

function BusCard({ id, image, carrier, model, seats, price }) {
	
	const { travelState, dispatch } = useContext(TravelContext)

	const toggleBusSelect = () => {
		dispatch({
			type: TRAVEL_ACTIONS_TYPES.TOGGLE_BUS,
			payload: id,
		})
	}

	return (
		<li className="card">
			<img src={image} alt="Bus Image" />
			<div className="card__content">
				<h4>{carrier}</h4>
				<p>{model}</p>
				<p>Seats: <span>{seats}</span></p>
				<p>Price: €<span>{price}</span></p>
			</div>
			<button type="button" onClick={toggleBusSelect}>
				{travelState.buses.includes(id) ? 'Deselect' : 'Select'}
			</button>
		</li>
	)
}

export default BusCard