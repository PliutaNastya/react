import { useGetDoctorsQuery, useGetPatientsQuery } from "@/api"
import { useSelector } from "react-redux"
import { selectDoctorEntities } from "@/features/doctors/doctorsSelectors"
import { selectPatientEntities } from "@/features/patients/patientsSelectors"
import Spinner from "@/components/Spinner"
import { AppointmentsDataContext } from "@/context/AppointmentsDataContext"

function AppointmentsDataProvider({ children }) {

	const { isLoading: doctorsLoading } = useGetDoctorsQuery({ page: 1, limit: 50 })
	const { isLoading: patientsLoading } = useGetPatientsQuery({ page: 1, limit: 100 })

	const doctorEntities = useSelector(selectDoctorEntities)
	const patientEntities = useSelector(selectPatientEntities)

	if (doctorsLoading || patientsLoading) return <Spinner />

	return (
		<AppointmentsDataContext value={{ doctorEntities, patientEntities }}>
			{children}
		</AppointmentsDataContext>
	)
}

export default AppointmentsDataProvider
