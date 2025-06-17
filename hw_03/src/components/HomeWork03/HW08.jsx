// Хрестики - нулики.З історією(можна повернутись назад)
import { useState } from "react"

function HW08({ game }) {

	const [gameField, setGameField] = useState(game)
	const [currentPlayer, setCurrentPlayer] = useState('x')
	const [historyList, setHistoryList] = useState([])
	const [historyIndex, setHistoryIndex] = useState(0)
	const [isGameOver, setIsGameOver] = useState(false)

	const onClick = (id) => {

		// Оновлюю поле 
		const newGameField = gameField.map(cell => cell.id === id ? { ...cell, value: currentPlayer, isOpen: true } : cell)
		setGameField(newGameField)
		
		// Створюю копію нової гри для історії
		setHistoryList(prev => [...prev, JSON.parse(JSON.stringify(newGameField))])
		setHistoryIndex(prev => prev + 1)

		if (checkWin(newGameField)) {
			alert(`Переміг - ${currentPlayer}`)
			setIsGameOver(true)
		} else if (newGameField.every(cell => cell.isOpen)) {
			alert('Нічия')
			setIsGameOver(true)
		} 
		

		setCurrentPlayer(prev => prev === 'x' ? 'o' : 'x')
	}
	const checkWin = (field) => {
		const winCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 4, 6],
			[2, 5, 8],
			[0, 4, 8],
		]

		for (let combination of winCombinations) {
			let isWinning = combination.every(id => field[id].value === currentPlayer)
			if(isWinning) return true
		}
		return false
	}

	const goBack = () => {
		if (historyIndex > 0) {
			setHistoryIndex(prev => prev - 1)
			setGameField(historyList[historyIndex - 1])
		}
	}

	const goAhead = () => {
		if (historyIndex < historyList.length - 1) {
			setHistoryIndex(prev => prev + 1)
			setGameField(historyList[historyIndex + 1])
		}
	}

	return (
		<>
			<div className="main-cnt">
				<h1>Хрестики-нулики</h1>
				<h2>Клікайте на поле. Першим буде хрестик.</h2>
				<div className="game-cnt">
					{gameField.map(cell => (
						<button key={cell.id} className="cell" disabled={cell.isOpen || isGameOver} onClick={() => onClick(cell.id)}>{cell.value}</button>
					))}
				</div>
				<button type="button" onClick={goBack}>Відмінити хід</button>
				<button type="button" onClick={goAhead}>Повернути хід</button>
			</div>
		</>
	)
}

export default HW08