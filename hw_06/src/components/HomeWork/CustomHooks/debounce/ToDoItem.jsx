import { memo } from "react"

function ToDoItem({ todo, completed }) {
	console.log('render')

	return (
		<li className="todo-item">
			<p>{todo}</p>
			<span>{completed ? '✅' : '🔲'} </span>
		</li>
	)
}

export default memo(ToDoItem)