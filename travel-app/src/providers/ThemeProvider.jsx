import { ThemeContext } from "@/context/ThemeContext"
import { useEffect, useState } from "react"

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState('light')

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme(prev => prev === 'light' ? 'dark' : 'light')
	}
		return (
		<ThemeContext value={{ theme, toggleTheme}}>
			{children}
		</ThemeContext>
	)
}

export default ThemeProvider