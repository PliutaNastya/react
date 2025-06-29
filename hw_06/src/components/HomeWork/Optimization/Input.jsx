import { useId } from "react"

function Input({value, onChange}) {
	const id = useId()

	return (
		<>
			<label htmlFor={id}>Введіть число</label>
			<input type="number" id={id} value={value} onChange={onChange} />
		</>
	)
}

export default Input