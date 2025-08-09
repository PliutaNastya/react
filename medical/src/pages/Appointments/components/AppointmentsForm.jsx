import { emptyAppointmentData, getAppointmentFormFields } from "@/data/appointmentInputFields"
import { useEffect, useState } from "react"
import FormField from "./form-elements/FormField"
import { useNavigate, useParams } from "react-router"
import Spinner from "@/components/Spinner"
import { useAddNewAppointmentMutation, useGetAppointmentByIdQuery, useUpdateAppointmentMutation } from "@/api"
import frontRoutes from "@/routes/frontRoutes"
import { formatDate } from "../../../utils"
import { useAppointmentsDataContext } from "@/context/AppointmentsDataContext"

function AppointmentsForm() {
	// Виклик даних про пацієнтів та лікарів з контексту
	const { patientEntities, doctorEntities } = useAppointmentsDataContext()

	// Отримання опцій лікаря для побудови селекту в формі
	const doctorsOptions = Object.values(doctorEntities).map(doctor => ({
		id: doctor.id,
		label: doctor.fullName
	}))

	// Отримання опцій пацієнта для побудови селекту в формі
	const patientOptions = Object.values(patientEntities).map(patient => ({
		id: patient.id,
		label: patient.fullName
	}))

	// Стан для форми
	const [formData, setFormData] = useState(() => emptyAppointmentData)
	// Отримання id
	const { id } = useParams()
	const navigate = useNavigate()
	
	// Отримання даних записів
	const { data: appointmentData } = useGetAppointmentByIdQuery(id)
	// Отримання функцій оновлення та додавання записів
	const [updateAppointment, { isLoading: isEditing }] = useUpdateAppointmentMutation()
	const [addNewAppointment, { isLoading: isCreating }] = useAddNewAppointmentMutation()

	// Отримання масиву даних для формування полів форми
	const appointmentsFormFields = getAppointmentFormFields(doctorsOptions, patientOptions)
	const isLoading = id ? isEditing : isCreating

	// useEffect для заповнення полів форми, якщо дані існують
	useEffect(() => {
		if (appointmentData) {
			setFormData({
				...appointmentData,
				date: formatDate(appointmentData.date).input,
			})
		}
	}, [appointmentData, patientEntities])

	// Функція для контролю змін в полях форми
	const handleChange = (e) => {
		const { name, value } = e.target

		setFormData(prev => ({
			...prev,
			[name]: value
		}))
	}

	// Функція контролю сабміту форми
	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			if (id) {
				await updateAppointment({ id, ...formData }).unwrap()
			} else {
				await addNewAppointment(formData).unwrap()
				setFormData(() => emptyAppointmentData)
			}
			navigate(frontRoutes.navigate.appointments.main)
		} catch (error) {
			console.log(error)
		}
	}

	// Отримання назви для кнопки
	const getButtonName = () => {
		if (id) return isEditing ? 'Редагування...' : 'Редагувати'
		return isCreating ? 'Додавання...' : 'Додати'
	}

	return (
		<div className="form-page">
			<h2>{id ? 'Редагування деталей прийому' : 'Додавання нового прийому'}</h2>
			<form onSubmit={handleSubmit}>
			
			{isLoading && <Spinner />}

			{
				appointmentsFormFields.map(field => (
					<FormField key={field.name} field={field} value={formData[field.name]} onChange={handleChange} />
				))
			}

			<button type="submit" className="link" disabled={isEditing || isCreating}>{getButtonName()}</button>
		</form>
		</div>
		
	)
}

export default AppointmentsForm

