import { useState } from 'react'
import './App.scss'
import MenuList from './components/MenuList'
import MessengerManager from './components/HomeWork03/Messenger/MessengerManager'
import NumberGuessManager from './components/HomeWork03/NumberGuess/NumberGuessManager'
import LessonTask01 from './components/Lesson/LessonTask01'
import LessonTask02 from './components/Lesson/LessonTask02'
import LessonTask03 from './components/Lesson/LessonTask03'
import LessonTask04 from './components/Lesson/LessonTask04'
import LessonTask05 from './components/Lesson/LessonTask05'

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
		}
	]

	let tasks = []
	if (activeCategory === 1) tasks = tasksOnLesson
	if (activeCategory === 2) tasks = tasksOnCheck

	const handleBack = () => {
		setActiveCategory(null)
		setActiveTask(null)
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
				{activeCategory === 1 && activeTask === 1 && < LessonTask01 />}
				{activeCategory === 1 && activeTask === 2 && < LessonTask02 />}
				{activeCategory === 1 && activeTask === 3 && < LessonTask03 />}
				{activeCategory === 1 && activeTask === 4 && < LessonTask04 />}
				{activeCategory === 1 && activeTask === 5 && < LessonTask05 />}

				{/* Задачі на перевірку */}
				{activeCategory === 2 && activeTask === 1 && < MessengerManager />}
				{activeCategory === 2 && activeTask === 2 && < NumberGuessManager />}
			</main>
		</>
	)
}

export default App
