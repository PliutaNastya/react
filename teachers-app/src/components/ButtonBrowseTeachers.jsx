import frontRoutes from "@/routes/frontRoutes"
import { useNavigate } from "react-router"

function BrowseTeachers() {
	const navigate = useNavigate()

	const browseTeachers = () => {
		navigate(frontRoutes.navigate.teachers.index)
	}
	return (
		<button type="button" className="button" onClick={browseTeachers}>Browse Teachers</button>
	)
}

export default BrowseTeachers