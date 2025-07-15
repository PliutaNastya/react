import { TravelContext } from "@/context/TravelContext"
import { useReducer } from "react"

import { TRAVEL_ACTIONS_TYPES } from './travelActionsTypes'

const initialTravelState = {
	buses: [],
	hotels: [],
}

const travelReducer = (currentState, action) => {
	const itemId = action.payload

	let newState

	switch (action.type) {
		case TRAVEL_ACTIONS_TYPES.TOGGLE_BUS:
			newState = {
				...currentState,
				buses: currentState.buses.includes(itemId) ? currentState.buses.filter(busId => busId !== itemId) : [...currentState.buses, itemId]
			}
			break
		case TRAVEL_ACTIONS_TYPES.TOGGLE_HOTEL:
			newState = {
				...currentState,
				hotels: currentState.hotels.includes(itemId) ? currentState.hotels.filter(hotelId => hotelId !== itemId) : [...currentState.hotels, itemId]
			}
			break
		default:
			newState = currentState
			break
	}

	return newState
}

function TravelProvider({ children }) {
	const [travelState, dispatch] = useReducer(travelReducer, initialTravelState)

	return (
		<TravelContext value={{travelState, dispatch}}>
			{children}
		</TravelContext>
	)
}

export default TravelProvider