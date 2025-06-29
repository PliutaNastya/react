// Створіть кастомний хук useWindowSize, який повертає поточну ширину та висоту вікна браузера.Він повинен оновлюватися при зміні розміру вікна.

import { useEffect, useState } from "react"
import useDebounce from "./useDebounce"

function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		windowWidth: window.innerWidth,
		windowHeight: window.innerHeight,
	})

	useEffect(() => {
		const resize = () => {
			setWindowSize(prev => ({
				...prev,
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight
			}))
		}
		window.addEventListener('resize', resize)
		resize()

		return () => window.removeEventListener('resize', resize)
	}, [])

	const debouncedWidth = useDebounce(windowSize.windowWidth, 300)
	const debouncedHeight = useDebounce(windowSize.windowHeight, 300)

	return {
		windowWidth: debouncedWidth,
		windowHeight: debouncedHeight
	}
}

export default useWindowSize