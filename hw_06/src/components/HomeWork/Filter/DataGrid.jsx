import useFetch from "../../../hooks/useFetch"
import useInput from "../../../hooks/useInput"
import GridColumn from "./GridColumn"
import FilterButton from "./FilterButton";
import { useCallback, useDeferredValue, useMemo, useState } from "react";

function DataGrid() {
	// Отримую данні з API
	const { data, loading, error } = useFetch('/products?limit=194')
	// useState для значень сортування
	const [sortAction, setSortAction] = useState({
		action: '',
		dir: ''
	})
	// useDeferredValue для відкладення обчислень
	const deferredSortAction = useDeferredValue(sortAction)

	// Отримую інпут
	const input = useInput('')
	// Отримую його значення
	const inputValue = input.value
	// useDeferredValue для відкладення обчислень
	const deferredInputValue = useDeferredValue(inputValue)

	// Функція, яка буде передаватись елементам картки
	const handleSort = useCallback((action) => {
		setSortAction(prev => {
			if (prev.action === action) {
				return {
					action: action,
					dir: prev.dir === 'decrease' ? 'increase' : 'decrease'
				}
			} else {
				return {
					action: action,
					dir: 'decrease'
				}
			}
		})
	}, [])
	// так як функція передаеється як пропс, то використовуємо useCallback, щоб кратки дарма не перерендувались
	const handleSortByTitle = useCallback(() => handleSort('title'), [handleSort])
	const handleSortByPrice = useCallback(() => handleSort('price'), [handleSort])
	const handleSortByStock = useCallback(() => handleSort('stock'), [handleSort])

	// Функція для сортування
	const sortedProducts = useMemo(() => {
		if (!data || !data.products) return []

		// Копія продуктів
		const copyProducts = JSON.parse(JSON.stringify(data.products))
		// Отримую дію та напрвлення зміни для кнопок сортування (від найменшого до найбільшого, або від найбільшого до найменшого)
		const action = deferredSortAction.action
		const dir = deferredSortAction.dir === 'increase' ? -1 : 1

		// Фільтрування елементів введенням в інпут значенння
		const filteredItems = copyProducts.filter(item => item.title.toLowerCase().includes(deferredInputValue.toLocaleLowerCase()))

		// Сортування цих елементів по 3 критеріям, назва, ціна, кількість в наявності
		filteredItems.sort((a, b) => {
			// Якщо критерій по якому сортують має тип даних - число
			if (typeof a[action] === 'number') {
				return (a[action] - b[action])*dir
			}

			// Якщо критерій по якому сортують має тип даних - рядок
			if (typeof a[action] === 'string') {
				return a[action].localeCompare(b[action]) * dir
			}

			// Якщо однаково
			return 0
		})

		// Повертаємо цей масив
		return filteredItems
	}, [data, deferredSortAction, deferredInputValue]) // масив залежностей - дані, тип дії сортування, введене значення в поле пошуку

	return (
		<div className="main-cnt">
			<div className="task-cnt">
				<h2>Таблиця з фільтрацією та сортуванням, чутлива до UI</h2>
				<ul>
					<li>Створіть компонент DataGrid (батьківський) та GridRow (дочірній).</li>
					<li>DataGrid отримує великий масив даних, має поле вводу для фільтрації, кнопки для сортування
						за різними колонками.</li>
					<li>GridRow (обгорнутий у React.memo) відображає один рядок даних.</li>
					<li>Використайте useDeferredValue для пошукового запиту та/або параметрів сортування.</li>
					<li>Використайте useMemo для обчислення відфільтрованих та відсортованих даних на основі
						відкладених значень.</li>
					<li>Використайте useCallback для функцій-обробників сортування та інших інтерактивних
						елементів, які передаються до дочірніх компонентів.</li>
					<li>Мета: забезпечити швидкий відгук на введення та кліки, навіть якщо обробка даних займає
						час.</li>
				</ul>
			</div>
			<div className="result">
				{loading && <p>Loading...</p>}
				{error && <p>Error: {error}</p>}
				<div>
					<div className="filter-input">
						{/* Поле пошуку */}
						<label>
							<span>Search</span>
							<input type="search" {...input} value={inputValue} placeholder="Search..." />
						</label>
					</div>
					{/* Кнопки сортування */}
					<div className="filter-btns">
						<FilterButton title='Sort by name' onAction={handleSortByTitle} />
						<FilterButton title='Sort by price' onAction={handleSortByPrice} />
						<FilterButton title='Sort by remaining stock' onAction={handleSortByStock} />
					</div>
				</div>
				{/* Картки */}
				<ul className="cards">
					{sortedProducts.map(card => (
						< GridColumn key={card.id} images={card.images} title={card.title} description={card.description} price={card.price} stock={card.stock} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default DataGrid