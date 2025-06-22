import styles from "./MessengerManager.module.css"
import { useState } from "react"

function InputMessage({ onSend }) {
	const [userMessage, setUserMessage] = useState('')

	const onClick = () => {
		if (!userMessage || userMessage.trim() === '') return
		onSend(userMessage)
		setUserMessage('')
	}

	return (
		<div className={styles.inputCnt}>
			<input type="text" value={userMessage} onChange={e => setUserMessage(e.target.value)}/>
			<button type="button" onClick={() => onClick()}>Send</button>
		</div>
	)
}

export default InputMessage