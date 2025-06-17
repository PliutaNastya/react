// Динамічний пошук.Є список працівників і поле пошуку.При введенні відображаються усі, які містять вказаний фрагмент
import { useState } from "react"


function HW05() {
	const employees = [
		{ id: 1, name: "Іван Коваль" },
		{ id: 2, name: "Олена Шевченко" },
		{ id: 3, name: "Максим Ткачук" },
		{ id: 4, name: "Анастасія Павленко" },
		{ id: 5, name: "Артем Бондар" },
		{ id: 6, name: "Юлія Мороз" },
		{ id: 7, name: "Віктор Гнатюк" },
		{ id: 8, name: "Тетяна Соловей" },
		{ id: 9, name: "Олександр Дяченко" },
		{ id: 10, name: "Наталія Кравець" },
		{ id: 11, name: "Дмитро Іващенко" },
		{ id: 12, name: "Марія Литвин" },
		{ id: 13, name: "Руслан Зінченко" },
		{ id: 14, name: "Світлана Мельник" },
		{ id: 15, name: "Богдан Остапчук" },
	]
	const [userInput, setUserInput] = useState('')

	const filteredList = employees.filter(employee => employee.name.toLowerCase().includes(userInput.toLowerCase()))
	
	return (
		<>
			<div className="task-cnt">
				<p>Динамічний пошук. Є список працівників і поле пошуку. При введенні відображаються усі, які містять вказаний фрагмент</p>
			</div>
			<div className="main-cnt">
				<div className="input-cnt">
					<label htmlFor="employeeName">Ім'я</label>
					<input type="text" id="employeeName" placeholder="Я шукаю..." value={userInput} onChange={(e) => setUserInput(e.target.value)} />
				</div>
				<ul className="employee-list">
					{filteredList.map(employee => (
						<li key={employee.id}>{employee.name}</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default HW05