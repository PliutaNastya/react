// З клавіатури вводиться довжина у сантиметрах. Виводити скільки це метрів, кілометрів.
import { useState } from "react"

function LessonTask05() {
	const [sm, setSm] = useState(0)

	const handleChange = (e) => {
		const value = parseFloat(e.target.value)
		setSm(value)
	}

	const meters = sm / 100
	const kmetr = meters / 1000

	return (
		<>
			<div className="main-cnt">
				<div>
					<label htmlFor="input">Введіть довжину у см</label>
					<input type="number" id="input" value={sm} onChange={handleChange} />
				</div>
				<div>
					<p>Довжина у метрах {meters.toFixed(2)}</p>
					<p>Довжина у кілометрах {kmetr.toFixed(5)}</p>
				</div>
			</div>
		</>
	)
}

export default LessonTask05