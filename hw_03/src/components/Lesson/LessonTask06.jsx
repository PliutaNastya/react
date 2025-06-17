// Однорядковий сапер. Однорядкова таблиця, до клітинок якої додано інформацію про наявність міни (використати атрибути). Спочатку клітинки сірі. При натисненні на клітинку аналізується чи є там міна і тоді колір стає червоним, якщо немає – зеленим. Додати можливість відкриття усіх сусідніх незамінованих клітинок при відкритті незамінованої клітинки.
import { useState } from "react"

// JavaScript підхід
function LessonTask06({ gameField }) {
	// 	function onClick(e) {
	// 		const td = e.target
	// 		if (td.tagName === 'TD') {
	// 			if (td.getAttribute('mine') === '1') td.style.backgroundColor = 'red'
	// 			else td.style.backgroundColor = 'green'
	// 		}
	// 	}

	const [gameFld, setGameFld] = useState(gameField)
	const [historyList, setHistoryList] = useState([])
	const [historyIndex, setHistoryIndex] = useState(0) // 'back' | 'ahead'

	const cellClick = (id) => {

		setHistoryList(prevH => [...prevH, JSON.parse(JSON.stringify(gameFld))])
		setHistoryIndex(prev => prev + 1)

		// Функціональне оновлення
		setGameFld(prev => prev.map(cell => cell.id === id ? { ...cell, isOpen: true } : cell
		))
	}

	console.log(historyList)
	console.log(historyIndex)
	const goBack = () => {
		// Якщо тільки кнопка назад
		// const lastGameField = historyList.at(-1)
		// setGameFld(lastGameField)
		// setHistoryList(prevH => prevH.filter((el, index) => index !== historyList.length-1))

		// Якщо є і кнопка відмінити хід і кнопка повернути хід
		if (historyIndex > 0) {
			setHistoryIndex(prev => prev - 1)
			setGameFld(historyList[historyIndex - 1])
		}
	}

	const goAhead = () => {
		if (historyIndex < historyList.length - 1) {
			setHistoryIndex(prev => prev + 1)
			setGameFld(historyList[historyIndex + 1])
		}
	}

	const getStyleObj = (el) => {
		let styleObj = null

		if (el.isOpen) {
			if (el.mine === 1) styleObj = { backgroundColor: 'red' }
			else styleObj = { backgroundColor: 'green' }
		} else styleObj = { backgroundColor: '#7700795b' }

		return styleObj
	}

	return (
		<>
			<div className="main-cnt">
				<h1>Saper</h1>
				<table >
					<tbody>
						<tr>
							{/* JavaScript підхід */
							/* {gameField.map((el, ind) => (
								<td key={ind} mine={el}></td>
							))} */}

							{
								gameFld.map(el => (
									<td key={el.id} onClick={() => cellClick(el.id)} style={getStyleObj(el)}></td>
								))
							}
						</tr>
					</tbody>
				</table>
				<button type="button" onClick={goBack}>Back</button>
				<button type="button" onClick={goAhead}>Cancel back</button>
			</div>
		</>
	)
}

export default LessonTask06