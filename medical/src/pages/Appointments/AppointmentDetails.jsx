import { useGetAppointmentByIdQuery } from "@/api"
import { Link, useParams } from "react-router"
import { formatDate, statusLabels } from "../../utils"
import frontRoutes from "@/routes/frontRoutes"
import Spinner from "@/components/Spinner"
import { useAppointmentsDataContext } from "@/context/AppointmentsDataContext"

function AppointmentDetails() {
	const { patientEntities, doctorEntities } = useAppointmentsDataContext()

	const { id } = useParams()
	const { data: appointment, isLoading } = useGetAppointmentByIdQuery(id)

	return (
		<section className="appointment">
			<h2>Загальна інформація</h2>
			{isLoading ? <Spinner />
				: <ul className="details-list">
					<li className="detail-item">
						<span>Пацієнт:</span> {patientEntities[appointment.patientId]?.fullName}
					</li>
					<li className="detail-item">
						<span>Лікар:</span> {doctorEntities[appointment.doctorId]?.fullName}
					</li>
					<li className="detail-item">
						<span>Дата:</span>{formatDate(appointment.date)?.details}
					</li>
					<li className="detail-item">
						<span>Причина:</span> {appointment.reason}
					</li>
					<li className="detail-item">
						<span>Статус:</span> {statusLabels[appointment.status]}
					</li>
				</ul>
			}
			<Link to={frontRoutes.navigate.appointments.main} className="link">Повернутись назад</Link>
		</section>
	)
}

export default AppointmentDetails