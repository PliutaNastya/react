// Створіть кастомний хук useDebounce, який приймає значення та затримку в мілісекундах.Він повинен повертати "відкладене" значення, яке оновлюється лише після того, як минув заданий час без змін.

import { useEffect, useRef, useState } from "react"

function useDebounce(value, delay) {
	const [debouncedValue, setDebouncedValue] = useState(value)
	const timeoutRef = useRef(null)

	useEffect(() => {
	
			timeoutRef.current = setTimeout(() => {
				setDebouncedValue(value)
			}, delay)
	
			return () => clearTimeout(timeoutRef.current)
			
		}, [value, delay])

	return debouncedValue
}

export default useDebounce