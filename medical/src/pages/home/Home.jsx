import { useGetAllAppointmentsQuery, useGetDoctorsQuery, useGetPatientsQuery } from "@/api"
import TotalCards from "./components/TotalCards"
import Spinner from "@/components/Spinner"
import Actions from "./components/Actions"
import { useSelector } from "react-redux"
import { selectAllDoctors } from "@/features/doctors/doctorsSelectors"
import { selectAllPatients } from "@/features/patients/patientsSelectors"
import ActualAppointments from "./components/ActualAppointments"

function Home() {
	const { isLoading: dLoading, isError: dError } = useGetDoctorsQuery({ page: 1, limit: 1000 })
	const { isLoading: pLoading, isError: pError } = useGetPatientsQuery({ page: 1, limit: 1000 })

	const doctors = useSelector(selectAllDoctors)
	const patients = useSelector(selectAllPatients)

	const { data: appointmentsData, isLoading: aLoading, isError: aError } = useGetAllAppointmentsQuery({ page: 1, limit: 1000 })

	const totalPatients = patients.length || 0
	const totalDoctors = doctors.length || 0
	const totalAppointments =  appointmentsData?.items?.length || 0

	return (
		<section className="home">

			{/* Помилки */}
			{pError && <p>Error: {pError.message}</p>}
			{dError && <p>Error: {dError.message}</p>}
			{aError && <p>Error: {aError.message}</p>}

			{/* Лоудінг */}
			{(pLoading || dLoading || aLoading) ? <Spinner />
				:
				<TotalCards patients={totalPatients} doctors={totalDoctors} appointments={totalAppointments} />
			}

			<Actions />
			<ActualAppointments />
		</section>
	)
}

export default Home