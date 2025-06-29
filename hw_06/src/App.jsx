import { useState } from 'react'
import './App.scss'
import MenuList from './components/MenuList'
import TestUseId from "./components/Lesson/useId/TestUseId"
import MainSortedListEx from './components/Lesson/useMemo/ex1/MainSortedListEx'
import MainGenerate from "./components/Lesson/useCallback/test1/MainGenerate"
import SearchableList_no from "./components/Lesson/useDefferedValue/__filter/SearchableList_no"
import SearchableList from "./components/Lesson/useDefferedValue/__filter/SearchableList"
import ChartTest from "./components/Lesson/useDefferedValue/_2_diagram/ChartTest"
import RequestSimpleTest from "./components/Lesson/useDefferedValue/request/RequestSimpleTest"
import RequestAbortTest from "./components/Lesson/useDefferedValue/request/RequestAbortTest"
import ProductsList from "./components/Lesson/customHooks/CustomHooks_API/ProductsList"
import Calculator from './components/HomeWork/Optimization/Calculator'
import DataGrid from './components/HomeWork/Filter/DataGrid'
import WindowSize from './components/HomeWork/CustomHooks/window/WindowSize'
import Debounce from './components/HomeWork/CustomHooks/debounce/Debounce'

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
		},
		{
			id: 7,
			name: 'Задача 07'
		},
		{
			id: 8,
			name: 'Задача 08'
		},
		{
			id: 9,
			name: 'Задача 09'
		}
	]

	let tasks = []
	if (activeCategory === 1) tasks = tasksOnLesson
	if (activeCategory === 2) tasks = tasksOnCheck

	const handleBack = () => {
		setActiveCategory(null)
		setActiveTask(null)
	}

	// Створюємо великий список продуктів для прикладу
	const largeProductList = Array.from({ length: 50000 }, (_, i) => ({
		id: i,
		name: `Product ${i + 1}`,
	}))

	// для діаграм
	// Генеруємо дані для діаграми
	const points = Array.from({ length: 1000 }, (_, index) => ({
		name: `Item ${index + 1}`,
		value: index * 0.1,
	}))

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
				{/* useId */}
				{activeCategory === 1 && activeTask === 1 && < TestUseId />}
				{/* useCallback */}
				{activeCategory === 1 && activeTask === 2 && < MainGenerate />}
				{/* useMemo */}
				{activeCategory === 1 && activeTask === 3 && < MainSortedListEx />}
				{/* useDeferredValue */}
				{activeCategory === 1 && activeTask === 4 && < SearchableList_no items={largeProductList} />}
				{activeCategory === 1 && activeTask === 5 && < SearchableList items={largeProductList} />}
				{activeCategory === 1 && activeTask === 6 && < ChartTest points={points} />}
				{activeCategory === 1 && activeTask === 7 && < RequestSimpleTest />}
				{activeCategory === 1 && activeTask === 8 && < RequestAbortTest />}
				{/* Custom Hooks */}
				{activeCategory === 1 && activeTask === 9 && < ProductsList />}

				{/* Задачі на перевірку */}
				{activeCategory === 2 && activeTask === 1 && < Calculator />}
				{activeCategory === 2 && activeTask === 2 && < DataGrid />}
				{activeCategory === 2 && activeTask === 3 && < WindowSize />}
				{activeCategory === 2 && activeTask === 4 && < Debounce />}
			</main>
		</>
	)
}

export default App
