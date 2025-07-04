import { useLocation, useNavigate } from "react-router"
import TeachersCard from "../teachers/components/TeachersCard"
import frontRoutes from "@/routes/frontRoutes"

function Meetings() {
	const { state } = useLocation()
	const navigate = useNavigate()

	let content
	if (state?.teachers) content = <ul>
		{state.teachers.map(teacher => (
			<TeachersCard key={teacher.id} teacher={teacher} />))}
	</ul>
	else content = <h2>No participants</h2>

	return (
		<section className="meetings">
			<div className="meetings__container">
				<h1 className="title">Meeting Participants</h1>
				{content}
				<button type="button" className="button" onClick={() => navigate(frontRoutes.navigate.teachers.index)}>Back to Teachers</button>
			</div>
		</section>
	)
}

export default Meetings