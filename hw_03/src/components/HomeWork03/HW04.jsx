// Пари для танців.Поступово вибираємо хлопця, дівчину і додаємо у обрані пари.Пару можна видалити.Поки не вибрано хлопця і дівчину кнопка «Додати» заблокована.Якщо не вистачає хлопців або дівчат вибір також блокується.
import { useState } from "react"


function HW04() {
	const girls = [
		{ id: 1, name: "Ольга Харлан" },
		{ id: 2, name: "Дар'я Білодід" },
		{ id: 3, name: "Еліна Світоліна" },
		{ id: 4, name: "Яна Шемякіна" },
		{ id: 5, name: "Алла Черкасова" },
		{ id: 6, name: "Марина Бех" },
		{ id: 7, name: "Анна Музичук" },
		{ id: 8, name: "Ірина Геращенко" },
		{ id: 9, name: "Тетяна Кіт" },
		{ id: 10, name: "Юлія Левченко" }
	]
	const boys = [
		{ id: 11, name: "Олег Верняєв" },
		{ id: 12, name: "Жан Беленюк" },
		{ id: 13, name: "Богдан Бондаренко" },
		{ id: 14, name: "Михайло Романчук" },
		{ id: 15, name: "Ігор Радівілов" },
		{ id: 16, name: "Ілля Кваша" },
		{ id: 17, name: "Павло Тимощенко" },
		{ id: 18, name: "Дмитро Підручний" },
		{ id: 19, name: "Олександр Усик" }
	]

	const [girlsList, setGirlsList] = useState(girls)
	const [boysList, setBoysList] = useState(boys)
	const [chosenList, setChosenList] = useState([])
	const [chosenGirl, setChosenGirl] = useState({})
	const [chosenBoy, setChosenBoy] = useState({})

	const getChosenGirl = (id) => {
		const girl = girlsList.find(girl => girl.id === id)
		setChosenGirl({
			id: girl.id,
			name: girl.name
		})
	}
	const getChosenBoy = (id) => {
		const boy = boysList.find(boy => boy.id === id)
		setChosenBoy({
			id: boy.id,
			name: boy.name,
		})
	}
	const moveToChosen = () => {
		if (chosenGirl.id && chosenBoy.id) {
			const pair = {
				id: Date.now(),
				girl: chosenGirl,
				boy: chosenBoy
			}
			setChosenList(prev => [...prev, pair])

			setGirlsList(prev => prev.filter(girl => girl.id !== chosenGirl.id))
			setBoysList(prev => prev.filter(boy => boy.id !== chosenBoy.id))

			setChosenGirl({})
			setChosenBoy({})
		}
	}

	const removePair = (id) => {
		const pair = chosenList.find(pair => pair.id === id)
		setChosenList(prev => prev.filter(pair => pair.id !== id))

		setGirlsList(prev => [...prev, pair.girl])
		setBoysList(prev => [...prev, pair.boy])
	}

	const isDisabled = !chosenGirl.id || !chosenBoy.id || girlsList.length === 0 || boysList.length === 0

	return (
		<>
			<div className="task-cnt">
				<p>Пари для танців. Поступово вибираємо хлопця, дівчину і додаємо у обрані пари. Пару можна видалити. Поки не вибрано хлопця і дівчину кнопка «Додати» заблокована.  Якщо не вистачає хлопців або дівчат вибір також блокується.</p>
			</div>
			<div className="main-cnt">
				<div className="dance-cnt">
					<div className="girls">
						<h2>Дівчата</h2>
						<ul>
							{girlsList.map(girl => (
								<li
									key={girl.id}
									style={chosenGirl.id === girl.id ? { border: '3px solid green' } : {}}
									onClick={() => getChosenGirl(girl.id)}>{girl.name}</li>
							))}
						</ul>
					</div>
					<div className="boys">
						<h2>Хлопці</h2>
						<ul>
							{boysList.map(boy => (
								<li
									key={boy.id}
									style={chosenBoy.id === boy.id ? { border: '3px solid green' } : {}}
									onClick={() => getChosenBoy(boy.id)}>{boy.name}</li>
							))}
						</ul>
					</div>
					<button type="button" disabled={isDisabled} onClick={moveToChosen}>Обрати</button>
				</div>
				<div className="chosen">
					<h2>Обрані пари</h2>
					<ul>
						{chosenList.map(pair => (
							<li key={pair.id}>
								На паркет запрошуються {pair.girl.name} та {pair.boy.name}
								<button type="button" onClick={() => removePair(pair.id)}>Видалити</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}

export default HW04