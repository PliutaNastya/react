import { useState } from 'react'
import './App.scss'
import MenuList from './components/MenuList'
import LessonTask01 from './components/Lesson/LessonTask01'
import LessonTask02 from './components/Lesson/LessonTask02'
import LessonTask03 from './components/Lesson/LessonTask03'
import LessonTask04 from './components/Lesson/LessonTask04'
import LessonTask05 from './components/Lesson/LessonTask05'
import LessonTask06 from './components/Lesson/LessonTask06'
import HW01 from './components/HomeWork03/HW01'
import HW02 from './components/HomeWork03/HW02'
import HW03 from './components/HomeWork03/HW03'
import HW04 from './components/HomeWork03/HW04'
import HW05 from './components/HomeWork03/HW05'
import HW06 from './components/HomeWork03/HW06'
import HW07 from './components/HomeWork03/HW07'
import HW08 from './components/HomeWork03/HW08'

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
		},
		{
			id: 3,
			name: 'Додаткові задачі'
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
		},
		{
			id: 3,
			name: 'Задача 03'
		},
		{
			id: 4,
			name: 'Задача 04'
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
		}
	]
	const tasksExtra = [
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
	if (activeCategory === 3) tasks = tasksExtra

	const handleBack = () => {
		setActiveCategory(null)
		setActiveTask(null)
	}

	// Для 6ої задачі з уроку
	// JavaScript підхід
	// const gameField = [0, 1, 1, 0]
	// React підхід
	const gameField = [
		{
			id: 1,
			mine: 0,
			isOpen: false,
		},
		{
			id: 2,
			mine: 1,
			isOpen: false,
		},
		{
			id: 3,
			mine: 1,
			isOpen: false,
		},
		{
			id: 4,
			mine: 0,
			isOpen: false,
		},
	]

	const ticTacToe = [
		{
			id: 0,
			value: '',
			isOpen: false,
		},
		{
			id: 1,
			value: '',
			isOpen: false,
		},
		{
			id: 2,
			value: '',
			isOpen: false,
		},
		{
			id: 3,
			value: '',
			isOpen: false,
		},
		{
			id: 4,
			value: '',
			isOpen: false,
		},
		{
			id: 5,
			value: '',
			isOpen: false,
		},
		{
			id: 6,
			value: '',
			isOpen: false,
		},
		{
			id: 7,
			value: '',
			isOpen: false,
		},
		{
			id: 8,
			value: '',
			isOpen: false,
		}
	]

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
				{activeCategory === 1 && activeTask === 6 && < LessonTask06 gameField={gameField} />}

				{/* Задачі на перевірку */}
				{activeCategory === 2 && activeTask === 1 && < HW04 />}
				{activeCategory === 2 && activeTask === 2 && < HW07 />}
				{activeCategory === 2 && activeTask === 3 && < HW08 game={ticTacToe} />}
				{activeCategory === 2 && activeTask === 4 && < HW06 />}
				
				{/* Додаткові задачі */}
				{activeCategory === 3 && activeTask === 1 && < HW01 />}
				{activeCategory === 3 && activeTask === 2 && < HW02 />}
				{activeCategory === 3 && activeTask === 3 && < HW03 />}
				{activeCategory === 3 && activeTask === 4 && < HW05 />}
			</main>
		</>
	)
}

export default App
