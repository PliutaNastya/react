import { useEffect, useRef } from "react"

function LessonTask02() {
	const inpRef = useRef(null)

	useEffect(() => {
		// useEffect спрацьовує лише коли елемент відрендериться, але про всяк випадок краще буде використати `?.`
		inpRef.current?.focus()
	}, [])

	function handleClick() {
		inpRef.current?.focus()
	}

	return (
		<>
			<div className="main-cnt">
				<label htmlFor="name">Name</label>
				<input type="text" id="name" ref={inpRef} />

				<button type="button" onClick={handleClick} style={{ marginBlockStart: '25px' }}>Set Focus</button>
			</div>
		</>
	)
}

export default LessonTask02