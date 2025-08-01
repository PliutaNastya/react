import { useGetAllAppointmentsQuery } from "@/api"
import Spinner from "@/components/Spinner"
import { useAppointmentsDataContext } from "@/context/AppointmentsDataContext"
import frontRoutes from "@/routes/frontRoutes"
import { statusLabels } from "@/utils"
import { Link } from "react-router"

function ActualAppointments() {
	const { data: appointmentsData, isLoading } = useGetAllAppointmentsQuery({ page: 1, limit: 1000 })
	const activeAppointments = appointmentsData?.items?.filter(app => app.status === 'active')

	const {patientEntities, doctorEntities} = useAppointmentsDataContext()

	if (isLoading) return <Spinner />
	
	return (
		<div className="appointments-table">
			<h2>Активні прийоми</h2>
			<table>
				<thead>
					<tr>
						<th>Пацієнт</th>
						<th>Лікар</th>
						<th>Статус</th>
						<th>Деталі</th>
					</tr>
				</thead>
				<tbody>
					{activeAppointments?.map(app => (
						<tr key={app.id}>
							<td>{patientEntities[`${app.patientId}`]?.fullName || "Ім'я відсутнє"}</td>
							<td>{doctorEntities[`${app.doctorId}`]?.fullName || "Ім'я відсутнє"}</td>
							<td>{statusLabels[app.status]}</td>
							<td><Link to={frontRoutes.navigate.appointments.detailsAbs(app.id)} className="link">Деталі</Link></td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default ActualAppointments