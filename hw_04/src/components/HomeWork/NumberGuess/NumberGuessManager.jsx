// Задача.Гра “Вгадай число”. Правила гри:
// 1) комп”ютер генерує трицифрове число;
// 2) кожен гравець по черзі задає цифру, якої ще не було(відсліковуємо, щоб цифри не повторювалися гравцями — не дозволяємо повторно ввести(блокуємо кнопку “Зробити хід”)).
// 3) якщо цифру вгадано, вона відображаться у полі гри “Число”;
// 4) програє той, хто вгадав останню цифру.
// Бажано відображати біля області кожного гравця цифри, які він вгадав
import styles from "./NumberGuessManager.module.css"
import RandomNum from "./RandomNum"
import PlayerCard from "./PlayerCard"
import { useEffect, useState } from "react"

function NumberGuessManager() {
	// Масив гравців, може бути і більше ніж два
	const playersInfo = [
		{
			id: 1,
			title: 'Гравець 1',
			isActive: true,
			isGuess: false,
			guessedNums: [],
			isLoser: false
		},
		{
			id: 2,
			title: 'Гравець 2',
			isActive: false,
			isGuess: false,
			guessedNums: [],
			isLoser: false
		},
		{
			id: 3,
			title: 'Гравець 3',
			isActive: false,
			isGuess: false,
			guessedNums: [],
			isLoser: false
		}
	]

	// Стани
	const [secretNum, setSecretNum] = useState('')
	const [players, setPlayers] = useState(playersInfo)
	const [usedNumbers, setUsedNumbers] = useState([])

	// Юзефект, бо хочу, щоб лише один раз генерувалось число
	useEffect(() => {
		const randomNum = Math.floor(Math.random() * (999 - 100 + 1)) + 100
		// Переводжу в рядок, щоб далі перетворити в масив
		setSecretNum(String(randomNum))
	}, [])

	// Функція для визначення чи завершилась гра
	const checkGameOver = (updatedPlayers, playerId) => {
		// знаходжу всі вгадані цифри обох гравців
		const allGuessedNums = updatedPlayers.map(player => player.guessedNums).flat()
		// якщо всі вони відповідають загаданому числу
		const isAllGuessed = secretNum.split("").every(num => allGuessedNums.includes(parseInt(num)))
		// то визначаю програвшого
		if (isAllGuessed) {
			setPlayers(prev => prev.map(player => ({
				...player,
				isLoser: player.id === playerId
			})))
		}
	}

	const handleClick = (userNumber, playerId) => {
		// Якщо введено пустий рядок, то забороняю це відправляти
		if (userNumber === '') return
		// Пеерводжу введене чсило в рядок
		const num = parseInt(userNumber)
		// Якщо ця цифра вже є в масиві вже введних до цього, то виходимо і юзер може ввести нову цифру
		if (usedNumbers.includes(num)) return
		// Оновлюю масив вже введних цифр
		setUsedNumbers(prev => [...prev, num])

		// Функція для перемикання активного гравця
		const switchPlayer = () => {

			setPlayers(prev => {
				const activePlayerIndex = prev.findIndex(player => player.isActive)
				const nextActivePlayerIndex = (activePlayerIndex + 1) % prev.length

				return prev.map((player, index) => ({
					...player,
					isActive: index === nextActivePlayerIndex
				}))
			})
		}

		// Якщо гравець вгадав цифру
		if (secretNum.includes(userNumber)) {
			// Оновлюю інформацію по гравцям, винесла окремо в масив, щоб інформаці по гравцю встигла оновитись для функції onGuess (інакше вона не спрацьовувала)
			const updatedPlayers = players.map(player =>
				player.isActive
					? { ...player, guessedNums: [...player.guessedNums, num], isGuess: true }
					: player
			)
			setPlayers(updatedPlayers)
			checkGameOver(updatedPlayers, playerId)
			switchPlayer()
		} else {
			switchPlayer()
		}
	}

	const isGameOver = players.some(player => player.isLoser)

	return (
		<>
			<div className="main-cnt">
				{/* Передаю в ігрове поле секретне число і масив вгаданих цифр (об'єднаний в один з усіх гравців) */}
				< RandomNum secretNum={secretNum} guessedNums={players.map(player => player.guessedNums).flat()} />
				{/* Виводжу картки гравців */}
				<div className={styles.cards}>
					{players.map(player => (
						<PlayerCard key={player.id} player={player} handleClick={handleClick} isGameOver={isGameOver} />
					))}
				</div>
			</div>
		</>
	)
}

export default NumberGuessManager