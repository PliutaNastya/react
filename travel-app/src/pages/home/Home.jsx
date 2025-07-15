import { useContext } from "react"
import popularTrips from "./utils"
import { ThemeContext } from "@/context/ThemeContext"

function Home() {
	const {theme} = useContext(ThemeContext)
	return (
		<section className="hero">
			<div className="hero__container">
				<p><strong>Mountains | Plains | Beaches</strong></p>
				<h1>Spend your vacation with our activites</h1>
				<ul>
					{
						popularTrips.map(trip => (
							<li key={trip.id}>
								<img src={theme === 'light' ? trip.imageDay : trip.imageNight} alt={trip.title} />
								<h2>{trip.title}</h2>
							</li>
						))
					}
				</ul>
			</div>
		</section>
	)
}

export default Home