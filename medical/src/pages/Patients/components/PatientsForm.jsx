import { useAddNewPatientMutation, useGetPatientByIdQuery, useUpdatePatientMutation } from "@/api"
import Spinner from "@/components/Spinner"
import { emptyData, patientInputFields } from "@/data/patientInputFields"
import frontRoutes from "@/routes/frontRoutes"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

function PatientsForm() {

	const [formData, setFormData] = useState(() => emptyData)
	const { id } = useParams()
	const navigate = useNavigate()
	
	const { data: patientData} = useGetPatientByIdQuery(id, { skip: !id })
	const [updatePatient, { isLoading: isEditing }] = useUpdatePatientMutation()
	const [addNewPatient, { isLoading: isCreating }] = useAddNewPatientMutation()

	const isLoading = isEditing || isCreating

	useEffect(() => {
		if (patientData) setFormData(patientData)
	}, [patientData])

	const handleInput = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (id) {
			await updatePatient(formData).unwrap()
		} else {
			await addNewPatient(formData).unwrap()
			setFormData(() => emptyData)
		}
		navigate(frontRoutes.navigate.patients.main)
	}

	const getButtonName = () => {
		if (id) return isEditing ? 'Редагування...' : 'Редагувати'
		return isCreating ? 'Додавання...' : 'Додати'
	}

	return (
		<div className="form-page">
			<h2>{id ? 'Редагування пацієнта' : 'Додавання нового пацієнту'}</h2>
			<form onSubmit={handleSubmit}>
				{isLoading && <Spinner />}

				{patientInputFields.map((field) => (
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

export default PatientsForm