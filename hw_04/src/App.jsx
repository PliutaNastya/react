import { useState } from 'react'
import './App.scss'
import MenuList from './components/MenuList'
import MessengerManager from './components/HomeWork/Messenger/MessengerManager'
import NumberGuessManager from './components/HomeWork/NumberGuess/NumberGuessManager'
import LessonTask01 from './components/Lesson/LessonTask01'
import LessonTask02 from './components/Lesson/LessonTask02'
import LessonTask03 from './components/Lesson/LessonTask03'
import ProductsList from './components/Lesson/Products/ProductsList'
import { products } from './data/productsList'
import DataCard from './components/Lesson/DataCard/DataCard'
import TodoManager from './components/Lesson/Todo/TodoManager'
import ReverseComp from './components/Lesson/Reverse/ReverseComp'
import ReverseCompMap from './components/Lesson/Reverse/ReverseCompMap'
import ReverseCompReverse from './components/Lesson/Reverse/ReverseCompReverse'

function App() {
	const [activeCategory, setActiveCategory] = useState(null)
	const [activeTask, setActiveTask] = useState(null)

	const categoryList = [
		{
			id: 1,
			name: 'Задачі з уроку'
		},
		{
			id: 2,
			name: 'Задачі на перевірку'
		}
	]
	const tasksOnCheck = [
		{
			id: 1,
			name: 'Задача 01'
		},
		{
			id: 2,
			name: 'Задача 02'
		}
	]
	const tasksOnLesson = [
		{
			id: 1,
			name: 'Задача 01'
		},
		{
			id: 2,
			name: 'Задача 02'
		},
		{
			id: 3,
			name: 'Задача 03'
		},
		{
			id: 4,
			name: 'Задача 04'
		},
		{
			id: 5,
			name: 'Задача 05'
		},
		{
			id: 6,
			name: 'Задача 06'
		},
		{
			id: 7,
			name: 'Задача 07'
		}
	]

	let tasks = []
	if (activeCategory === 1) tasks = tasksOnLesson
	if (activeCategory === 2) tasks = tasksOnCheck

	const handleBack = () => {
		setActiveCategory(null)
		setActiveTask(null)
	}

	const userData = {
		name: 'Anastasiia',
		age: 29,
		isActive: true,
	}

	return (
		<>
			<header className='header'>
				{
					activeCategory
						?
						<>
							<button onClick={handleBack} style={{ marginBlockEnd: '15px' }}>Назад</button>
							<MenuList tasks={tasks} onSelect={setActiveTask} />
						</>
						:
						<MenuList tasks={categoryList} onSelect={setActiveCategory} />
				}
			</header>
			<main>
				{/* Задачі з уроку */}
				{activeCategory === 1 && activeTask === 1 && < LessonTask01 name='Anastasiia' age={29} isActive={true} />}
				{/* або якщо є об'єкт з даними (погано для читабельності) */}
				{activeCategory === 1 && activeTask === 1 && < LessonTask01 {...userData} />}

				{/* ProductsList */}
				{activeCategory === 1 && activeTask === 2 && < ProductsList productsList={products} />}

				{/* Передача React-елементів (через children prop) */}
				{activeCategory === 1 && activeTask === 3 &&
					<>
						<LessonTask02 title="Panel 1">
							<p>1111</p>
							<p>222</p>
							<p>333</p>
						</LessonTask02>

						<LessonTask02 title="Panel 2">
							<p>1111</p>
							<p>222</p>
							<p>333</p>
						</LessonTask02>
					</>
				}

				{/* Явні (іменовані) пропси */}
				{activeCategory === 1 && activeTask === 4 &&
					<>
						<DataCard
							logo={'https://fruit-time.ua/images/products/5a/yabluko-fudzi.jpeg '}
							badgeText="акція"
							title="Samsumg"
						>
							<div>Text</div>
						</DataCard>
						<DataCard
							logo={'https://fruit-time.ua/images/products/5a/yabluko-fudzi.jpeg '}
							badgeText="акція"
							title="Samsumg"
							footer={<div>Price: 2000грн.</div>}
						>
							<img style={{ width: '100%' }} src="https://fruit-time.ua/images/products/5a/yabluko-fudzi.jpeg" />
						</DataCard>
					</>
				}

				{/* Передача даних з дочірнього у батківський через children-функції */}
				{activeCategory === 1 && activeTask === 5 &&
					<LessonTask03 url="https://jsonplaceholder.typicode.com/todos/1">
						{(data) => (
							<>
								<div>{data.id}</div>
								<div>{data.title}</div>
							</>
						)}
					</LessonTask03>
				}

				{/* React.Children */}
				{activeCategory === 1 && activeTask === 6 &&
					<>
						<ReverseComp>
							<p>1111</p>
							<p>2222</p>
							<p>3333</p>
						</ReverseComp>
						<ReverseCompMap>
							<p>1111</p>
						</ReverseCompMap>
						<ReverseCompReverse>
							<p>1111</p>
						</ReverseCompReverse>
					</>
				}

				{/* Передача функцій (для колбеків) */}
				{activeCategory === 1 && activeTask === 7 && < TodoManager />}

				{/* Задачі на перевірку */}
				{activeCategory === 2 && activeTask === 1 && < MessengerManager />}
				{activeCategory === 2 && activeTask === 2 && < NumberGuessManager />}
			</main>
		</>
	)
}

export default App
