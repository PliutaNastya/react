import { useEffect, useState } from "react"

function LessonTask03({ url, children }) {

	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	// Якщо нам треба робити запит, то використовуємо useEffect
	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true)
				setError(null)
				// отримуємо дані
				const res = await fetch(url)
				// розпарсимо їх
				const resData = await res.json()
				console.log(resData)
				console.log(children)

				setData(resData)
			} catch (error) {
				setError(error)
			} finally {
				setIsLoading(false)
			}
		}
		fetchData()
	}, [url])

	if (isLoading) return <div>Loading ...</div>
	else if (error) return <div>ERROR!!! </div>
	//===== ВИКОРИСТОВУЄМО У return !!!!!!
	return children(data)
}

export default LessonTask03