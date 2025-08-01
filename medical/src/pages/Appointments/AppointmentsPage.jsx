import frontRoutes from "@/routes/frontRoutes"
import AppointmentsList from "./components/AppointmentsList"
import { Link } from "react-router"

function AppointmentsPage() {
	return (
		<section className="appointments">
			<Link to={frontRoutes.navigate.appointments.create} className="link">Додати новий запис на прийом</Link>
			<AppointmentsList/>
		</section>
	)
}

export default AppointmentsPage