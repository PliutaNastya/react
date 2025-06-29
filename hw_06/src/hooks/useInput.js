import { useCallback, useState } from "react"

function useInput(initialValue = '') {
	const [value, setValue] = useState(initialValue)

	const handleChange = useCallback(e => {
		setValue(e.target.value)
	}, [])

	const clearValue = useCallback(() => {
		setValue('')
	}, [])

	return {
		value,
		onChange: handleChange,
		onClear: clearValue,
	}
}

export default useInput