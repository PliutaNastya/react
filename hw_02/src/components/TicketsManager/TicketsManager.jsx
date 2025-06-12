// З випадаючого списку вибираємо клас квитка у літаку.Якщо
// - бізнес - виводимо елементи для вибору газети та коньяку(якщо вибрано коньяк, то запропонувати закуску(так / ні)), на фоні зображення бізнес кают
// - економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.

import { useState } from "react"
import SelectBusiness from "./SelectBusiness"
import SelectBusiness2 from "./SelectBusiness2"
import ResultMessage from "./ResultMessage"
import SelectEconom from "./SelectEconom"

function TicketsManager() {
	
	const [chosenClass, setChosenClass] = useState('')
	const [chosenBusinessElement, setChosenBusinessElement] = useState('')
	const [snack, setSnack] = useState('')
	const [chosenEconom, setChosenEconom] = useState([])

	const handleChange = (value) => {
		setChosenClass(value)
		setChosenBusinessElement('')
		setSnack('')
		setChosenEconom([])
	}
	const isShowMessage = (chosenClass === 'business' && chosenBusinessElement === 'brandy' && snack)
		|| (chosenClass === 'business' && chosenBusinessElement === 'newspaper')
		|| (chosenClass === 'econom' && chosenEconom.length > 0)

	const getBgImage = () => {
		let imgClassName = ''

		if (chosenClass === 'business') imgClassName = 'business-img'
		else if (chosenClass === 'econom') imgClassName = 'econom-img'
		else imgClassName = ''

		return imgClassName
	} 

	return (
		<>
			<div className="task">
				<h2>Умова</h2>
				<div className="task-inner">
					<p>З випадаючого списку вибираємо клас квитка у літаку.Якщо</p>
					<ul>
						<li>бізнес - виводимо елементи для вибору газети та коньяку(якщо вибрано коньяк, то запропонувати закуску(так / ні)), на фоні зображення бізнес кают</li>
						<li>економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.</li>
					</ul>
				</div>
			</div>
			<div className={`tickets-cnt ${getBgImage()}`}>
				<div className="selects-cnt">
					<label htmlFor="select-tickets">Оберіть клас квитка</label>
					<select name="select-tickets" value={chosenClass} id="select-tickets" onChange={(e) => handleChange(e.target.value)}>
						<option value="" disabled></option>
						<option value="business">Бізнес клас</option>
						<option value="econom">Економ клас</option>
					</select>
					{chosenClass === 'business' &&
						<>
							<SelectBusiness onChange={setChosenBusinessElement} />
							{chosenBusinessElement === 'brandy' &&
								<SelectBusiness2 onChange={setSnack} />}

						</>
					}
					{chosenClass === 'econom' && <SelectEconom onBlur={setChosenEconom} />}
					{isShowMessage && <ResultMessage />}
				</div>
			</div>
		</>
	)
}

export default TicketsManager