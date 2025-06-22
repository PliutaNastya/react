// Компонент "Розгортувана Панель" (Collapsible Panel)

import { useState } from "react"

function LessonTask02({ title, children }) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<h1 onClick={() => setIsOpen((v) => !v)}>{title}</h1>
			{isOpen && children}
		</>
	)
}

export default LessonTask02