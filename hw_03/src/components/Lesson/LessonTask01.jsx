import { useEffect, useState } from "react"

function LessonTask01() {
	const [dogImg, setDogImg] = useState(null)
	const [updateKey, setUpdateKey] = useState(null)

	useEffect(() => {

		async function loadDogImage() {
			try {
				const res = await fetch('https://dog.ceo/api/breeds/image/random')
				const data = await res.json()
				setDogImg(data.message)
			} catch (error) {
				console.log(error.message)
			}
		}
		loadDogImage()
	}, [updateKey]) // якщо масиву залежностей не буде, то буде безкынечний цикл

	const handleClick = () => setUpdateKey(prev => prev + 1)

	return (
		<>
			<div className="main-cnt">
				{
					dogImg ? (
						<img src={dogImg} alt="dog" style={{width: '100%'}} />
					) : <p>Зображення ще немає!</p>
				}
				<button onClick={handleClick} style={{marginBlockStart: '25px'}}>Наступне</button>
			</div>
		</>
	)
}

export default LessonTask01