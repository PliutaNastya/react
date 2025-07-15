import { buses } from "../utils"
import BusCard from "./BusCard"

function BusList() {
	return (
		<ul className="list">
			{
				buses.map(bus => (
					<BusCard key={bus.id} {...bus} />
				))
			}
		</ul>
	)
}

export default BusList