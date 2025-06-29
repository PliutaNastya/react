import { memo } from "react"

function FilterButton({ title, onAction }) {
	console.log('Button render go')

	return ( 
		<button type="button" onClick={onAction} >{title}</button>
	)
}

export default memo(FilterButton)