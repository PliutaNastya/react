import { useGetDoctorByIdQuery } from "@/api"
import Spinner from "@/components/Spinner"
import frontRoutes from "@/routes/frontRoutes"
import { Link, useParams } from "react-router"

function DoctorDetails() {
	const { id } = useParams()

	const { data: doctor = null, isLoading } = useGetDoctorByIdQuery(id)
	
	if (!isLoading && !doctor) return <p>Даних не знайдено</p>

	return (
		<section className="doctor">
			<h2>Загальна інформація про лікаря</h2>
			{isLoading ? <Spinner />
				: <ul className="details-list">
					<li className="detail-item">
						<span>ПІБ:</span> {doctor?.fullName}
					</li>
					<li className="detail-item">
						<span>Спеціальність:</span> {doctor?.specialty}
					</li>
					<li className="detail-item">
						<span>Телефон:</span> <a href={`tel:${doctor?.phone}`}>{doctor?.phone}</a>
					</li>
					<li className="detail-item">
						<span>Електронна пошта:</span> <a href={`mailto:${doctor?.email}`}>{doctor?.email}</a>
					</li>
					<li className="detail-item">
						<span>Кімната:</span> {doctor?.room}
					</li>
					<li className="detail-item">
						<span>Деталі:</span> {doctor?.notes || 'Відсутні'}
					</li>
				</ul>
			}
			<Link to={frontRoutes.navigate.doctors.main} className="link">Повернутись назад</Link>
		</section>
	)
}

export default DoctorDetails