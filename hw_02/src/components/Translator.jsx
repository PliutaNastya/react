// Елемент тренажера англійської.Виводимо зображення елемента і слово.Користувач вводить відповідь.Якщо вірно – відтворюємо фразу «Добре.Молодець!» (і додаємо зелену рамку до елемента), якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).

import { useState } from "react"

// Імпорт всіх картинок з папки
const images = import.meta.glob('../assets/img/quiz/*.png', { eager: true })
/* 
  images будуть об'єктом у вигляді:
  {
	 '../assets/img/quiz/01.png': Module,
	 '../assets/img/quiz/02.png': Module,
	 ...
  }
*/

function Translator() {

	const [presentId, setPresentId] = useState(1)
	const [userAnswer, setUserAnswer] = useState('')
	const [isCorrect, setIsCorrect] = useState(null)

	const quizItems = [
		{
			'id': 1,
			'imgSrc': '../assets/img/quiz/01.png',
			'ua': 'торт',
			'en': ['cake', 'pastry'],
		},
		{
			'id': 2,
			'imgSrc': '../assets/img/quiz/02.png',
			'ua': 'морозиво',
			'en': ['ice cream', 'gelato'],
		},
		{
			'id': 3,
			'imgSrc': '../assets/img/quiz/03.png',
			'ua': 'пончик',
			'en': ['donut', 'doughnut'],
		},
		{
			'id': 4,
			'imgSrc': '../assets/img/quiz/04.png',
			'ua': 'шоколад',
			'en': ['chocolate'],
		},
		{
			'id': 5,
			'imgSrc': '../assets/img/quiz/05.png',
			'ua': 'печиво',
			'en': ['cookie', 'biscuit'],
		},
		{
			'id': 6,
			'imgSrc': '../assets/img/quiz/06.png',
			'ua': 'кекс',
			'en': ['cupcake', 'sponge cake'],
		},
		{
			'id': 7,
			'imgSrc': '../assets/img/quiz/07.png',
			'ua': 'цукерки',
			'en': ['candies', 'sweets'],
		},
		{
			'id': 8,
			'imgSrc': '../assets/img/quiz/08.png',
			'ua': 'льодяник',
			'en': ['lollipop'],
		},
		{
			'id': 9,
			'imgSrc': '../assets/img/quiz/09.png',
			'ua': 'маффін',
			'en': ['muffin'],
		},
	]

	const currentQuestion = quizItems.find(el => el.id === presentId)

	const checkAnswer = () => {

		if (currentQuestion.en.includes(userAnswer.trim().toLowerCase())) {
			setIsCorrect(true)
			setTimeout(() => {
				setPresentId((prev) => prev + 1)
				setUserAnswer('')
				setIsCorrect(null)
			}, 1500)
		}
		else {
			setIsCorrect(false)
			setTimeout(() => {
				setPresentId((prev) => prev + 1)
				setUserAnswer('')
				setIsCorrect(null)
			}, 1500)
		}

		console.log(currentQuestion.en)
	}

	const goToNextQuestion = () => {
		if (presentId < quizItems.length) {
			setPresentId((prev) => prev + 1)
		} 
	}

	const getClassNameForElement = () => {
		
		if (isCorrect === null) return ''
		return isCorrect ? 'green' : 'red'
	}

	const lastQuestion =  quizItems[quizItems.length-1]
	const isLastQuestion = () => currentQuestion.id === lastQuestion.id
	// console.log(currentQuestion.id)
	// console.log(lastQuestion.id)
	// console.log(isLastQuestion())

	return (
		<>
			<div className="task">
				<h2>Умова</h2>
				<div className="task-inner">
					<p>Елемент тренажера англійської. Виводимо зображення елемента і слово. Користувач вводить відповідь. Якщо вірно – відтворюємо фразу «Добре. Молодець!» (і додаємо зелену рамку до елемента), якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).</p>
				</div>
			</div>
			<div className="translator-cnt">
				<div className='question'>
					<div className="image-cnt">
						<img className={getClassNameForElement()} src={images[currentQuestion.imgSrc].default} alt="" />
					</div>
					<p>{currentQuestion.ua}</p>
				</div>
				<div className='answer'>
					<label htmlFor='answer'>Введіть Вашу Відповідь:</label>
					<input type="text" name="answer" id="answer" autoFocus value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
					<div className="quiz-actions">
						<button type='button' className='button' onClick={checkAnswer}>Перевірити</button>
						<button type='button' className='button' onClick={goToNextQuestion} disabled = {isLastQuestion()}>Наступне</button>
					</div>
					{isCorrect !== null && (
						isCorrect === true ? <p className={getClassNameForElement()}>Добре. Молодець!</p> : <p className={getClassNameForElement()}>Невірно, спробуйте ще раз!</p>)
					}
				</div>
			</div>
		</>
	)
}

export default Translator