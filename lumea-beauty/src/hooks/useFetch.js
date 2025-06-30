import { useState, useEffect } from 'react'
export const API_BASE_URL = 'https://dummyjson.com' // Базовий URL бекенду

function useFetch(url) {
const [data, setData] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
	if (!url) {
	setData(null)
	setLoading(false)
	setError(null)
	return
	}
	const fullUrl = `${API_BASE_URL}${url}`
	// Створюємо контролер
	const abortController = new AbortController()
	// Створюємо signal
	const signal = abortController.signal

	setLoading(true)
	setError(null)

	console.log('Fetching:', fullUrl)
	const fetchData = async () => {
		try {
		// Додаємо signal у операцію
		const response = await fetch(fullUrl, { signal })

		if (!response.ok) {
			const errorData = await response
			.json()
			.catch(() => ({ message: 'Невідома помилка' }))
			throw new Error(
			errorData.message || `HTTP error! status: ${response.status}`
			)
		}

		const json = await response.json()
		setData(json)
	} catch (err) {
		if (err.name === 'AbortError') {
			console.log('Fetch request aborted.')
			return
		}
		setError(err.message)
	} finally {
		setLoading(false)
	}
	}

	fetchData()

	return () => {
	// Скасовуємо запит
	abortController.abort()
	console.log('Мережевий запит скасовано при очищенні.')
	}
}, [url])

return { data, loading, error }
}

export default useFetch
