// Перекладач.Користувачу виводять змішані картки з словами на англійській і українській мові.Користувач поступово клікає на картки(виділяємо синьою рамкою).Якщо знайдено правильні пари карток, що відповідають одному слову, то видаляємо ці картки.Інакше - виділяємо червоною рамкою і через секунду забираємо рамку.
import { useState } from "react"


function HW07() {
	const wordPairs = [
		{ id: 1, en: "Ukraine", ua: "Україна" },
		{ id: 2, en: "Kyiv", ua: "Київ" },
		{ id: 3, en: "Flag", ua: "Прапор" },
		{ id: 4, en: "Freedom", ua: "Свобода" },
		{ id: 5, en: "Independence", ua: "Незалежність" },
		{ id: 6, en: "Trident", ua: "Тризуб" },
		{ id: 7, en: "Sunflower", ua: "Соняшник" },
		{ id: 8, en: "Cossack", ua: "Козак" },
		{ id: 9, en: "Folk", ua: "Народ" },
		{ id: 10, en: "Dignity", ua: "Гідність" },
		{ id: 11, en: "Embroidery", ua: "Вишиванка" },
		{ id: 12, en: "Language", ua: "Мова" },
		{ id: 13, en: "Carpathians", ua: "Карпати" },
		{ id: 14, en: "Borsch", ua: "Борщ" },
		{ id: 15, en: "Peace", ua: "Мир" },
		{ id: 16, en: "Strength", ua: "Сила" },
		{ id: 17, en: "History", ua: "Історія" },
		{ id: 18, en: "Culture", ua: "Культура" },
		{ id: 19, en: "Unity", ua: "Єдність" },
		{ id: 20, en: "Hero", ua: "Герой" },
	]
	// Перемішую картки
	const [shuffledWordsUa, setShuffledWordsUa] = useState([...wordPairs].sort(() => Math.random() - 0.5))
	const [shuffledWordsEn, setShuffledWordsEn] = useState([...wordPairs].sort(() => Math.random() - 0.5))
	// Тут бду зберігати обрані картки
	const [selectedCards, setSelectedCards] = useState([])
	// Тут буду зберігати картки, які співпали
	const [matchedPairs, setMatchedPairs] = useState([])
	// Тут буду зберігати чи відбувається перевірка карток
	const [isChecking, setIsChecking] = useState(false)
	// Тут буду зберігати картки, які не співпали
	const [mismatchIds, setMismatchIds] = useState([])

	// Функція для обрання картки
	const selectCard = (id, lang) => {
		// Якщо відбувається перевірка карток, то не дозволяємо обрання
		if (isChecking) return

		// Якщо картка цієї мови вже вибрана, то забороняю обирати ще раз ту ж мову
		if (selectedCards.find(card => card.lang === lang)) return

		// Додаю картку до обраних
		const newSelection = [...selectedCards, { id, lang }]
		setSelectedCards(newSelection)

		// Коли обрано 2 картки, то починається перевірка
		if (newSelection.length === 2) {
			setIsChecking(true)

			// Беру 2 картки
			const [first, second] = newSelection

			// Перевіряю, і якщо картки співпадають, то додаю їх до збігів
			if (first.id === second.id && first.lang !== second.lang) {
				setMatchedPairs(prev => [...prev, first.id])

				// З затримкою видаляю картки, щоб встигла з'явитись рамка зеленого кольору
				setTimeout(() => {
					setShuffledWordsUa(prev => prev.filter(word => word.id !== first.id))
					setShuffledWordsEn(prev => prev.filter(word => word.id !== first.id))
					// Очищаю масив обраних карток
					setSelectedCards([])
					// Зупиняю перевірку
					setIsChecking(false)
				}, 500)
			} else {
				// Якщо співпадіння не було, то додаю картки до масиву тих, що не співпали
				setMismatchIds(newSelection)
				// З затримкою очищаю масиви не співпадінь, обраних карток та зупиняю перевірку
				setTimeout(() => {
					setMismatchIds([])
					setSelectedCards([])
					setIsChecking(false)
				}, 1000)
			}
		}
	}
	
	// Функція для отримання назви класу карток
	const getClassName = (id, lang) => {
		// Якщо картки співпали, то зелена рамка
		if (matchedPairs.includes(id)) return 'green'
		
		// Якщо картка обрана, то синій колір
		const isSelected = selectedCards.some(card => card.id === id && card.lang === lang)
		// Якщо картки не співпали, то червона рамка
		const isMismatch = mismatchIds.some(card => card.id === id && card.lang === lang)

		if (isMismatch) return "red"
		if (isSelected) return "blue"

		// Якщо нічого не відбувається, то класу нема
		return ""
	}

	return (
		<>
			<div className="task-cnt">
				<p>Перекладач. Користувачу виводять змішані картки з словами на англійській і українській мові. Користувач поступово клікає на картки (виділяємо синьою рамкою). Якщо знайдено правильні пари карток, що відповідають одному слову, то видаляємо ці картки. Інакше - виділяємо червоною рамкою і через секунду забираємо рамку.</p>
			</div>
			<div className="main-cnt translator-cnt">
				<ul>
					{shuffledWordsUa.map(word => (
						<li className={getClassName(word.id, 'ua')} key={word.id} onClick={() => selectCard(word.id, 'ua')}>{word.ua}</li>
					))}
				</ul>
				<ul>
					{shuffledWordsEn.map(word => (
						<li className={getClassName(word.id, 'en')} key={word.id} onClick={() => selectCard(word.id, 'en')}>{word.en}</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default HW07