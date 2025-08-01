import frontRoutes from "@/routes/frontRoutes"
import DoctorsList from "./components/DoctorsList"
import { Link } from "react-router"

function DoctorsPage() {
	return (
		<section className="doctors">
			<Link to={frontRoutes.navigate.doctors.create} className="link">Додати нового лікаря</Link>
			<DoctorsList />
		</section>
	)
}

export default DoctorsPage