import frontRoutes from "@/routes/frontRoutes"
import { useNavigate } from "react-router"

function ButtonViewMeeting() {
	const navigate = useNavigate()

	const viewMeeting = () => {
		navigate(frontRoutes.navigate.meetings)
	}
	return (
		<button type="button" className="button" onClick={viewMeeting}>View Meeting Attendees</button>
	)
}

export default ButtonViewMeeting