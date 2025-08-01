import { useDeleteAppointmentMutation } from "@/api"
import frontRoutes from "@/routes/frontRoutes"
import { Link } from "react-router"
import { statusLabels } from "../../../utils"
import { useAppointmentsDataContext } from "@/context/AppointmentsDataContext"

function AppointmentsItem({ item }) {
	// Виклик даних про пацієнтів та лікарів з контексту
	const { patientEntities, doctorEntities } = useAppointmentsDataContext()

	// Отримання функції для видалення запису
	const [deleteAppointment, { isLoading }] = useDeleteAppointmentMutation()
	const onDelete = () => {
		deleteAppointment(item.id)
	}

	return (
		<li className="people-item">
			<Link to={frontRoutes.navigate.patients.detailsAbs(`${item.patientId}`)}>Пацієнт: {patientEntities[`${item.patientId}`]?.fullName || "Ім'я відсутнє"}</Link>
			<Link to={frontRoutes.navigate.doctors.detailsAbs(`${item.doctorId}`)}>Лікар: {doctorEntities[`${item.doctorId}`]?.fullName || "Ім'я відсутнє"}</Link>
			<div>
				<Link to={frontRoutes.navigate.appointments.details(item.id)} className="link">Деталі</Link>
				<Link to={frontRoutes.navigate.appointments.edit(item.id)} className="link">Редагувати</Link>
				<button onClick={onDelete} disabled={isLoading} className="link">{isLoading ? 'Видалення...' : 'Видалити'}</button>
				<p>{statusLabels[item.status] || 'Без статусу'}</p>
			</div>
		</li>
	)
}

export default AppointmentsItem