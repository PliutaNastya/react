import BusList from "./components/BusList"

function BusChoice() {
	return (
		<section className="buses">
			<div className="buses__container">
				<h2 className="title">Bus Selection Page</h2>
				<BusList />
			</div>
		</section>
	)
}

export default BusChoice