// Дано список спортсменів.Потрібно сформувати список тих, які будуть брати участь у змаганні.При цьому є два стовпці.В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний.При натисканні на зелену стрілку спортсмен переміщається у список для змагань.При натисканні на червону стрілку спортсмен переміщається у загальний список.
import { useState } from "react"


function HW03() {
	const athletes = [
		{ id: 1, name: "Олег Верняєв" },
		{ id: 2, name: "Яна Шемякіна" },
		{ id: 3, name: "Жан Беленюк" },
		{ id: 4, name: "Дар'я Білодід" },
		{ id: 5, name: "Ольга Харлан" },
		{ id: 6, name: "Богдан Бондаренко" },
		{ id: 7, name: "Еліна Світоліна" },
		{ id: 8, name: "Михайло Романчук" },
		{ id: 9, name: "Ігор Радівілов" },
		{ id: 10, name: "Ілля Кваша" }
	]

	const [allAthletesList, setAllAthletesList] = useState(athletes)
	const [chosenList, setChosenList] = useState([])

	const moveToChosen = (id) => {
		const chosenAthlete = allAthletesList.find(athlete => athlete.id === id)
		setChosenList(prev => [...prev, chosenAthlete])
		setAllAthletesList(prev => prev.filter(athlete => athlete.id !== id))
	}

	const moveBackToAll = (id) => {
		const chosenAthlete = chosenList.find(athlete => athlete.id === id)
		setAllAthletesList(prev => [...prev, chosenAthlete])
		setChosenList(prev => prev.filter(athlete => athlete.id !== id))
	}

	return (
		<>
			<div className="task-cnt">
				<p>Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.</p>
			</div>
			<div className="main-cnt">
				<div className="athletes-cnt">
					<ul>
						{allAthletesList.map(athlete => (
							<li key={athlete.id}>
								{athlete.name}
								<button type="button" onClick={() => moveToChosen(athlete.id)}>Обрати</button>
							</li>
						))}
					</ul>
					<ul>
						{chosenList.map(athlete => (
							<li key={athlete.id}>
								{athlete.name}
								<button type="button" onClick={() => moveBackToAll(athlete.id)}>Виключити</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}

export default HW03