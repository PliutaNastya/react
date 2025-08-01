import { useDeletePatientsMutation } from "@/api"
import frontRoutes from "@/routes/frontRoutes"
import { Link } from "react-router"

function PatientsItem({ item }) {
	
	const [deletePatient, { isLoading }] = useDeletePatientsMutation()
	
	const onDelete = () => {
		deletePatient(item.id)
	}

	return (
		<li className="people-item">
			<p>{item.fullName || 'Дані імені відсутні'}</p>
			<a href={`tel:${item.phone}`}>{item.phone || 'Номер телефону відсутній'}</a>
			<div>
				<Link to={frontRoutes.navigate.patients.details(item.id)} className="link">Деталі</Link>
				<Link to={frontRoutes.navigate.patients.edit(item.id)} className="link">Редагувати</Link>
				<button onClick={onDelete} disabled={isLoading} className="link">{isLoading ? 'Видалення...' : 'Видалити'}</button>
			</div>
		</li>
	)
}

export default PatientsItem