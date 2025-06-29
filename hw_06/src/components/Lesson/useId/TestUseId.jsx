import { useId } from 'react'

function TestId() {
	const myId = useId()
	const myId2 = useId()
	return (
		<div className='main-cnt'>
			<label htmlFor={myId}>Вік користувача</label>
			<input type="text" id={myId} />

			<label htmlFor={myId2}>Вік користувача</label>
			<input type="text" id={myId2} />

			<label>
				Вік користувача
				<input type="text" id={myId} />
			</label>
		</div>
	)
}

export default TestId
