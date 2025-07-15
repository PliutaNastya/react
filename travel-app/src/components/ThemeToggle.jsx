import { useContext } from "react"
import Icon from "./Icon"
import { ThemeContext } from "@/context/ThemeContext"

function ThemeToggle() {
	const {theme, toggleTheme} = useContext(ThemeContext)

	console.log(theme, toggleTheme)
	return (
		<div className="theme-toggle">
			<Icon name='sun-icon' />
			<label className="switch">
				<input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
				<span></span>
			</label>
			<Icon name='moon-icon' />
		</div>
	)
}

export default ThemeToggle