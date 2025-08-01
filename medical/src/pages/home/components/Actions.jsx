import frontRoutes from "@/routes/frontRoutes"
import { Link} from "react-router"

function Actions() {

	return (
		<div className="actions">
			<h2>Швидкі дії</h2>
			<ul>
				<li>
					<Link className="link" to={frontRoutes.navigate.patients.createAbs}>Новий пацієнт</Link>
				</li>
				<li>
					<Link className="link" to={frontRoutes.navigate.doctors.createAbs}>Новий лікар</Link>
				</li>
				<li>
					<Link className="link" to={frontRoutes.navigate.appointments.createAbs}>Новий запис</Link>
				</li>
			</ul>
		</div>
	)
}

export default Actions