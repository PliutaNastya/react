import { useMemo, useState } from "react"
import useInput from "../../../hooks/useInput"
import Input from "./Input"
import ResultDisplay from "./ResultDisplay"


function Calculator() {

	// useState для лічильника
	const [count, setCount] = useState(0)

	// Отримую інпути з кастомного хука useInput
	const inputA = useInput('')
	const inputB = useInput('')
	// Отримую їх значення для подальшого використання, використовую логічний оператор, щоб не отримувати NaN в результаті при очищенні полів
	const valueA = parseFloat(inputA.value) || 0
	const valueB = parseFloat(inputB.value) || 0

	// Розраховую суму з використанням useMemo для запобігання постійноо перерендерингу
	const sum = useMemo(() => {
		return valueA + valueB
	}, [valueA, valueB])

	return (
		<div className="main-cnt">
			<div className="task-cnt">
				<h2>Оптимізація вибіркового рендеру з useMemo та React.memo</h2>
				<p>Створіть компонент-калькулятор, який має два незалежні поля вводу: одне для числа A і одне для
					числа B. Також є окремий компонент ResultDisplay, який відображає A + B. Обгорніть ResultDisplay у
					React.memo(). Використайте useMemo в батьківському компоненті, щоб обчислити A + B і передати
					цей результат до ResultDisplay. Переконайтеся, що ResultDisplay ререндериться лише тоді, коли
					змінюються A або B, а не коли змінюється інший незалежний стан у батьківському компоненті
					(наприклад, лічильник, що не впливає на A чи B).</p>
			</div>
			<div className="result">
				{/* Поля введення */}
				<Input {...inputA} />
				<Input {...inputB} />
				{/* Кнопка для очищення полів */}
				<button onClick={() => {
					inputA.onClear()
					inputB.onClear()
				}}>Очистити</button>
				{/* Відображення результату */}
				<ResultDisplay result={sum} />
				{/* Лічильник (для наглядності), щоб перевірити чи нема зайвого перерендерингу) */}
				<div className="result">
					<p>Лічильник: {count}</p>
					<button type="button" onClick={() => setCount(prev => prev + 1)}>Збільшити на 1</button>
				</div>
			</div>
		</div>
	)
}

export default Calculator