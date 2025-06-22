import styles from "./NumberGuessManager.module.css"
import { useState } from "react"

function PlayerCard({ player, onGuess, setPlayers, usedNumbers, setUsedNumbers, secretNum }) {
	const { title, id, isActive, isLoser, guessedNums } = player

	const [userNumber, setUserNumber] = useState('')

	const handleChange = (e) => {
		const value = e.target.value

		// Дозволяю вводити лише одну цифру
		if (!/^\d?$/.test(value)) return

		setUserNumber(value)
	}

	const handleClick = () => {
		// Якщо введено пустий рядок, то забороняю це відправляти
		if (userNumber === '') return
		// Пеерводжу введене чсило в рядок
		const num = parseInt(userNumber)
		// Якщо ця цифра вже є в масиві вже введних до цього, то виходимо і юзер може ввести нову цифру
		if (usedNumbers.includes(num)) return
		// Оновлюю масив вже введних цифр
		setUsedNumbers(prev => [...prev, num])
		// Якщо гравець вгадав цифру
		if (secretNum.includes(userNumber)) {
			// Оновлюю інформацію по гравцю
			setPlayers(prev =>
				prev.map(player =>
					player.isActive
						? { ...player, guessedNums: [...player.guessedNums, num], isGuess: true }
						: player
				)
			)
			onGuess(id)
			// Перемикаю активного гравця
			setPlayers(prev => {
				const activePlayerIndex = prev.findIndex(player => player.isActive)
				const nextActivePlayerIndex = (activePlayerIndex + 1) % prev.length

				return prev.map((player, index) => ({
					...player,
					isActive: index === nextActivePlayerIndex
				}))
			})

		} else {
			// Якщо не вгадав, то все-одно перемикаюактивного гравця
			setPlayers(prev => {
				const activePlayerIndex = prev.findIndex(player => player.isActive)
				const nextActivePlayerIndex = (activePlayerIndex + 1) % prev.length
				return prev.map((player, index) => ({
					...player,
					isActive: index === nextActivePlayerIndex
				}))
			})
		}
		// Очищую інпут
		setUserNumber('')
	}

	return (
		<>
			<div className={styles.card}>
				{/* Номер гравця */}
				<h3>{title}</h3>
				{/* Поле введення */}
				<label className={isLoser ? styles.lose : null}>
					<span>Цифра</span>
					<input type="number" value={userNumber} onChange={handleChange} />
				</label>
				{/* Кнопка */}
				<button disabled={!isActive || usedNumbers.includes(parseInt(userNumber))} type="button" onClick={handleClick}>Зробити хід</button>
				{/* Блок, де виводяться вгадані цифри */}
				<div className={styles.guessedList}>
					<h4>Вгадані числа:</h4>
					<ul>
						{guessedNums.map((num, index) => (
							<li key={index}>{num}</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}

export default PlayerCard