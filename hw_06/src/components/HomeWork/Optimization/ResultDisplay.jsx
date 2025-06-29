import {memo} from "react"

function ResultDisplay({ result }) {
	console.log('Ререндер')

	return (<>
		<p>Результат додавання введених вами чисел:</p>
		<span>{result}</span>
	</>)
}

export default memo(ResultDisplay)