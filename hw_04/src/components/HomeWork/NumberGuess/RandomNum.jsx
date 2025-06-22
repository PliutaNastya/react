import styles from "./NumberGuessManager.module.css"

function RandomNum({ secretNum, guessedNums }) {
	
	return (
		<>
			<div className={styles.secretNum}>
				<h2>Загадане число</h2>
				{secretNum.split("").map((num, index) => (
					<span key={index}>{guessedNums.includes(Number(num)) ? num : '-'}</span>
				))}
			</div>
		</>
	)
}

export default RandomNum