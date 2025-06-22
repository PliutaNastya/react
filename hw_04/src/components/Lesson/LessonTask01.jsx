// Описати UserProfile для відображеня даних про користувача
// (ім'я користувача, вік та статус активності)

function LessonTask01({ name, age, isActive }) {
	
	return (
		<>
			<div className="main-cnt">
				<h1>{name}</h1>
				<h3>{age}</h3>
				<h3>{isActive ? 'active' : 'not active'}</h3>
			</div>
		</>
	)
}

export default LessonTask01