// Створіть поле пошуку, де результати пошуку оновлюються не відразу після кожного символу, а з невеликою затримкою(наприклад, 500мс) після зупинки введення, використовуючи useDebounce.

import { useDeferredValue, useMemo } from "react"
import useFetch from "../../../../hooks/useFetch"
import useInput from "../../../../hooks/useInput"
import ToDoItem from "./ToDoItem"
import useDebounce from "../../../../hooks/useDebounce"

function Debounce() {
	// Отримую дані
	const { data, loading, error } = useFetch('/todos?limit=254')
	// Отримую інпут
	const input = useInput('')
	// Отримую введене значення в інпут
	const inputValue = input.value
	// useDeferredValue для відкладення обчислень
	const deferredInputValue = useDeferredValue(inputValue)
	// useDebounce - кастомний хук, для змін не одразу, а з затримкою
	const debouncedInputValue = useDebounce(deferredInputValue, 500)
	
	// Отримую масив, якщо щось піде не так, то буде порожній масив
	const todos = data?.todos || []
	
	// Фільтрую згідно з введеним в поле пошуку значенням
	const filteredItems = useMemo(() => todos.filter(item => item.todo.toLowerCase().includes(debouncedInputValue.toLowerCase())), [debouncedInputValue, todos])

	return (
		<div className="main-cnt">
			<div className="task-cnt">
				<h2>useDebounce – відкладений виклик функції</h2>
				<p>Створіть кастомний хук useDebounce, який приймає значення та затримку в мілісекундах. Він повинен повертати "відкладене" значення, яке оновлюється лише після того, як минув заданий час без змін.</p>
				<p>Створіть поле пошуку, де результати пошуку оновлюються не відразу після кожного символу, а з невеликою затримкою (наприклад, 500мс) після зупинки введення, використовуючи useDebounce.</p>
			</div>
			<div className="result">
				{loading && <p>Loading...</p>}
				{error && <p>Error: {error}</p>}
				{/* Поле пошуку */}
				<div className="filter-input">
					<label>
						<span>Search</span>
						<input type="search" {...input} value={inputValue} placeholder="Search..." />
					</label>
				</div>
				{/* Список завдань */}
				<ul className="todo-list">
					{filteredItems.map(item => (
						<ToDoItem key={item.id} todo={item.todo} completed={item.completed} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default Debounce