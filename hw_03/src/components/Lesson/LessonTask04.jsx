// Counter з підпискою (через кожну секунду виводити значення у консоль)
import { useEffect, useRef, useState } from "react"

function LessonTask04() {
	const [count, setCount] = useState(0)
	const countRefData = useRef(count)
	const intervalRef = useRef(null)

	// цей хук для роботи з таймером
	useEffect(() => {
		// ми використовуємо useState з принципом імутабельності
		// (стан не змінюється, а створюється новий), а стрілкова функція захоплює контекст і тому вона постійно посилається
		// на самий перший стан (тому в консолі постійно буде 0)
		// const intervalId = setInterval(() => {
		// 	console.log(countRefData.current)
		// }, 1000)

		intervalRef.current = setInterval(() => {
			console.log(countRefData.current)
		}, 1000)

		return () => {
			// це погано через замикання
			// clearInterval(intervalId)
			clearInterval(intervalRef.current)
		}
	}, [])

	// при зміні каунта оновлює значення каунтера
	useEffect(() => {
		countRefData.current = count
	}, [count])

	function handleClick() {
		setCount(prev => prev + 1)
	}

	return (
		<>
			<div className="main-cnt">
				<div>Count: {count} </div>
				<button type="button" onClick={handleClick}>Add</button>
			</div>
		</>
	)
}

export default LessonTask04