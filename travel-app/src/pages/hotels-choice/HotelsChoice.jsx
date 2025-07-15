import HotelList from "./components/HotelList"

function HotelsChoice() {
	return (
		<section className="hotels">
			<div className="hotels__container">
				<h2 className="title">Choose Your Hotels for Accommodation</h2>
				<HotelList />
			</div>
		</section>
	)
}

export default HotelsChoice