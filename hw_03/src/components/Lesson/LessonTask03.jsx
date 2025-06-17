// Валідація полів. Є два поля. При натисненні на кнопку перевіряти чи поле порожнє, якщо так,  то ставити туди курсор.
import { useRef, useState } from "react"

function LessonTask03() {
	const loginRef = useRef(null)
	const passwordRef = useRef(null)
	const [message, setMessage] = useState('')

	const handleClick = () => {
		if (loginRef.current?.value === '') {
			loginRef.current?.focus()
			setMessage('Логін не введено!')
			return
		}
		if (passwordRef.current?.value === '') {
			passwordRef.current?.focus()
			setMessage('Пароль не введено!')
			return
		}
		setMessage('Відмінно!')
	}

	return (
		<>
			<div className="main-cnt">
				<div>
					<label htmlFor="login">Login</label>
					<input ref={loginRef} type="text" id="login" />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input ref={passwordRef} type="text" id="password" />
				</div>
				<button type="button" onClick={handleClick}>Log in</button>
				<p>{message}</p>
			</div>
		</>
	)
}

export default LessonTask03