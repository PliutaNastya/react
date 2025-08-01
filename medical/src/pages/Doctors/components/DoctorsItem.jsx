import { useDeleteDoctorsMutation } from "@/api"
import frontRoutes from "@/routes/frontRoutes"
import { Link } from "react-router"

function DoctorsItem({ item }) {

	const [deleteDoctors, {isLoading}] = useDeleteDoctorsMutation()

	const onDelete = () => {
		deleteDoctors(item.id)
	}
	return (
		<li className="people-item">
			<p>{item.fullName || '-'}</p>
			<p>{item.specialty || '-'}</p>
			<div>
				<Link to={frontRoutes.navigate.doctors.details(item.id)} className="link">Деталі</Link>
				<Link to={frontRoutes.navigate.doctors.edit(item.id)} className="link">Редагувати</Link>
				<button onClick={onDelete} disabled={isLoading} className="link">{isLoading ? 'Видалення...' : 'Видалити'}</button>
			</div>
		</li>
	)
}

export default DoctorsItem