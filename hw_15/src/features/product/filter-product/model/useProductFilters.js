import { useState } from "react"

function useProductFilters() {
	const [searchValue, setSearchValue] = useState('')

	const handleChange = (e) => {
		const value = e.target.value
		setSearchValue(value.toLowerCase())
	}
	return {
		searchValue,
		handleChange
	}
}

export default useProductFilters