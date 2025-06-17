// Вводиться дозволена швидкість і поточна швидкість авто.Якщо не введено дозволену швидкість, то елемент введення поточної швидкості заблокований.Якщо швидкість менше 50 % дозволеної, то колір input – оранжевий, якщо від 50 % до 100 % - зелений, вище 100 % - червоний.Якщо значення вище 90 % починає блимати повідомлення «Увага!»

import { useState } from "react"


function HW02() {
	const [allowedSpeed, setAllowedSpeed] = useState(null)
	const [currentSpeed, setCurrentSpeed] = useState(null)

	const disabled = allowedSpeed === null

	const getInputColor = () => {

		let borderColorObj = {}

		if (currentSpeed !== null) {
			if (currentSpeed < allowedSpeed * 0.5) borderColorObj = { border: '3px solid orange' }
			if (currentSpeed >= allowedSpeed * 0.5 && currentSpeed <= allowedSpeed) borderColorObj = { border: '3px solid green' }
			if (currentSpeed > allowedSpeed) borderColorObj = { border: '3px solid red' }
		}

		return borderColorObj
	}
	const isShowWarning = currentSpeed !== null && currentSpeed >= allowedSpeed * 0.9

	return (
		<>
			<div className="task-cnt">
				<p>Вводиться дозволена швидкість і поточна швидкість авто. Якщо не введено дозволену швидкість, то елемент введення поточної швидкості заблокований. Якщо швидкість менше 50% дозволеної, то колір input – оранжевий, якщо від 50% до 100% - зелений, вище 100% - червоний. Якщо значення вище 90% починає блимати повідомлення «Увага!»</p>
			</div>
			<div className="main-cnt">
				<label className="speed">
					Дозволено
					<input type="number" name="allowed" min={0} id="allowed" onChange={e => setAllowedSpeed(parseInt(e.target.value))} />
					{isShowWarning && <p className="blink">Увага!</p>}
				</label>
				<label className="speed">
					Поточна
					<input type="number" name="current" min={0} id="current" disabled={disabled} onChange={e => setCurrentSpeed(parseInt(e.target.value))} style={getInputColor()} />
				</label>
			</div>
		</>
	)
}

export default HW02