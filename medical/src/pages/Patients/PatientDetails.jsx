import { useGetPatientByIdQuery } from "@/api"
import Spinner from "@/components/Spinner"
import frontRoutes from "@/routes/frontRoutes"
import { Link, useParams } from "react-router"

function PatientDetails() {
	const { id } = useParams()

	const { data: patient = null, isLoading } = useGetPatientByIdQuery(id)

	if (!isLoading && !patient) return <p>Даних не знайдено</p>

	return (
		<section className="patient">
			<h2>Загальна інформація про пацієнта</h2>
			{isLoading ? <Spinner />
				: <ul className="details-list">
					<li className="detail-item">
						<span>ПІБ:</span> {patient?.fullName}
					</li>
					<li className="detail-item">
						<span>Дата народження:</span> {patient?.birthDate}
					</li>
					<li className="detail-item">
						<span>Телефон:</span> <a href={`tel:${patient?.phone}`}>{patient?.phone}</a>
					</li>
					<li className="detail-item">
						<span>Електронна пошта:</span> <a href={`mailto:${patient?.email}`}>{patient?.email}</a>
					</li>
					<li className="detail-item">
						<span>Адреса:</span> {patient?.address}
					</li>
					<li className="detail-item">
						<span>Деталі:</span> {patient?.notes || 'Відсутні'}
					</li>
				</ul>
			}
			<Link to={frontRoutes.navigate.patients.main} className="link">Повернутись назад</Link>
		</section>
	)
}

export default PatientDetails