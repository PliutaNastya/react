// Приклад.Створити імітатор мессенджера.Є можлиість додавати / відображати повідомлення і ставити лайки(додайте стилі на свій розсуд).
import MessageItem from "./MessageItem"
import InputMessage from "./InputMessage"
import styles from "./MessengerManager.module.css"
import { useState } from "react"

function MessengerManager() {

	const initialMessages = [
		{ id: 1, text: "Hello", likes: 2, dislikes: 1 },
		{ id: 2, text: "Hi", likes: 4, dislikes: 0 },
		{ id: 3, text: "Bye", likes: 2, dislikes: 2 },
		{ id: 4, text: "Ok", likes: 1, dislikes: 1 },
	]

	const [messages, setMessages] = useState(initialMessages)

	const onSend = (message) => {
		setMessages(prev => [...prev, {
			id: new Date().getTime(),
			text: message,
			likes: 0,
			dislikes: 0,
		}])
	}

	const handleLikes = (id, action) => {
		setMessages(prev => prev.map(message => message.id === id ? {...message, [action]: message[action] + 1} : message))
	}

	console.log(messages)

	return (
		<>
			<div className="main-cnt">
				<ul className={styles.list}>
					{messages.map(message => (
						<li key={message.id}><MessageItem {...message} onLikes={handleLikes} onDislikes={handleLikes} /></li>
					))}
				</ul>
				< InputMessage onSend={onSend} />
			</div>
		</>
	)
}

export default MessengerManager