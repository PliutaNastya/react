// З клавіатури вводиться температура.Змінювати колір фону у залежності від значення:
// менше нуля – білий
// від 0 до 10 – синій,
// від 11 до 22 – зелений
// вище 22 – червоний

import { useEffect, useState } from "react"


function HW01() {
	const [temperature, setTemperature] = useState(null)
	
	useEffect(() => {
		const body = document.body
		body.classList.remove('body-white', 'body-blue', 'body-green', 'body-red')
		
		let className = ''

		if (temperature < 0) className = 'body-white'
		else if (temperature < 11) className = 'body-blue'
		else if (temperature < 23) className = 'body-green'
		else className = 'body-red'

		if(temperature !== null) body.classList.add(className)
		
	}, [temperature])

	const handleChange = (e) => {
		const value = parseInt(e.target.value)

		if (!isNaN(value)) setTemperature(value)
	}

	console.log(temperature)

	return (
		<>
			<div className="task-cnt">
				<p>З клавіатури вводиться температура.Змінювати колір фону у залежності від значення:</p>
				<ul>
					<li>менше нуля – білий</li>
					<li>від 0 до 10 – синій</li>
					<li>від 11 до 22 – зелений</li>
					<li>вище 22 – червоний</li>
				</ul>
			</div>
			<div className="main-cnt">
				<label htmlFor="temperature">Введіть значення температури</label>
				<input type="number" min="-70" max="70" onChange={handleChange} />
			</div>
		</>
	)
}

export default HW01