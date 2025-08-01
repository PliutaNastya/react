import { Link } from "react-router"
import PatientsList from "./components/PatientsList"
import frontRoutes from "@/routes/frontRoutes"

function PatientsPage() {

	return (
		<section className="patients">
			<Link to={frontRoutes.navigate.patients.create} className="link">Додати нового пацієнта</Link>
			<PatientsList />
		</section>
	)
}

export default PatientsPage