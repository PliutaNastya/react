import { emptyAppointmentData, getAppointmentFormFields } from "@/data/appointmentInputFields"
import { useEffect, useState } from "react"
import FormField from "./form-elements/FormField"
import { useNavigate, useParams } from "react-router"
import Spinner from "@/components/Spinner"
import { useAddNewAppointmentMutation, useGetAppointmentByIdQuery, useGetDoctorsQuery, useGetPatientsQuery, useUpdateAppointmentMutation } from "@/api"
import frontRoutes from "@/routes/frontRoutes"
import { formatDate } from "../../../utils"
import { useAppointmentsDataContext } from "@/context/AppointmentsDataContext"

function AppointmentsForm() {

	const { patientEntities, doctorEntities } = useAppointmentsDataContext()

	const doctorsOptions = Object.values(doctorEntities).map(doctor => ({
		id: doctor.id,
		label: doctor.fullName
	}))

	const patientOptions = Object.values(patientEntities).map(patient => ({
		id: patient.id,
		label: patient.fullName
	}))

	const [formData, setFormData] = useState(() => emptyAppointmentData)
	const { id } = useParams()
	const navigate = useNavigate()
	const { data: appointmentData, isLoading } = useGetAppointmentByIdQuery(id)
	const [updateAppointment, { isLoading: isEditing }] = useUpdateAppointmentMutation()
	const [addNewAppointment, { isLoading: isCreating }] = useAddNewAppointmentMutation()

	const appointmentsFormFields = getAppointmentFormFields(doctorsOptions, patientOptions)

	useEffect(() => {
		if (appointmentData) {
			setFormData({
				...appointmentData,
				date: formatDate(appointmentData.date).input,
			})
		}
	}, [appointmentData, patientEntities])

	const handleChange = (e) => {
		const { name, value } = e.target

		setFormData(prev => ({
			...prev,
			[name]: value
		}))
	}

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

