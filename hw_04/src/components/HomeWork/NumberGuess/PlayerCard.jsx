import styles from "./NumberGuessManager.module.css"
import { useState } from "react"

function PlayerCard({ player, handleClick, isGameOver }) {
	const { title, id, isActive, isLoser, guessedNums } = player

	const [userNumber, setUserNumber] = useState('')

	const handleChange = (e) => {
		const value = e.target.value

		// Дозволяю вводити лише одну цифру
		if (!/^\d?$/.test(value)) return

		setUserNumber(value)
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
				<button disabled={!isActive || isGameOver} type="button" onClick={() => {
					handleClick(userNumber, id)
					setUserNumber('')
				}}>Зробити хід</button>
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