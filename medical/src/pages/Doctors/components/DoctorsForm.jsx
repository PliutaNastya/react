import { useAddNewDoctorMutation, useGetDoctorByIdQuery, useUpdateDoctorMutation } from "@/api"
import Spinner from "@/components/Spinner"
import { doctorInputFields, emptyDoctorData } from "@/data/doctorInputFields"
import frontRoutes from "@/routes/frontRoutes"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

function DoctorsForm() {
	const [formData, setFormData] = useState(() => emptyDoctorData)
	const { id } = useParams()
	const navigate = useNavigate()

	const { data: doctorData, isLoading } = useGetDoctorByIdQuery(id, { skip: !id })
	const [updateDoctor, { isLoading: isEditing }] = useUpdateDoctorMutation()
	const [addNewDoctor, { isLoading: isCreating }] = useAddNewDoctorMutation()

	useEffect(() => {
		if (doctorData) setFormData(doctorData)
	}, [doctorData])

	const handleInput = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (id) {
			await updateDoctor(formData)
		} else {
			await addNewDoctor(formData)
			setFormData(() => emptyDoctorData)
		}
		navigate(frontRoutes.navigate.doctors.main)
	}

	const getButtonName = () => {
		if (id) return isEditing ? 'Редагування...' : 'Редагувати'
		return isCreating ? 'Додавання...' : 'Додати'
	}

	return (
		<div className="form-page">
			<h2>{id ? 'Редагування лікаря' : 'Додавання нового лікаря'}</h2>
			<form onSubmit={handleSubmit}>
				{isLoading && <Spinner />}

				{doctorInputFields.map((field) => (
					<label key={field.name}>
						<span>{field.title}</span>
						<input  {...field} value={formData[field.name]} onChange={handleInput} />
					</label>
				))}

				<button type="submit" className="link" disabled={isEditing || isCreating}>{getButtonName()}</button>
			</form>
		</div>

	)
}

export default DoctorsForm