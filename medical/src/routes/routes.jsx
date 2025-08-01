import frontRoutes from "@/routes/frontRoutes"
import MainLayout from "@/components/layout/MainLayout"
import Home from "@/pages/home/Home"
import ErrorPage from "@/pages/errors/ErrorPage"
import PatientsPage from "@/pages/Patients/PatientsPage"
import DoctorsPage from "@/pages/Doctors/DoctorsPage"
import PatientsForm from "@/pages/Patients/components/PatientsForm"
import DoctorsForm from "@/pages/Doctors/components/DoctorsForm"
import AppointmentsPage from "@/pages/Appointments/AppointmentsPage"
import AppointmentsForm from "@/pages/Appointments/components/AppointmentsForm"
import Page404 from "@/pages/errors/Page404"
import PatientDetails from "@/pages/Patients/PatientDetails"
import DoctorDetails from "@/pages/Doctors/DoctorDetails"
import AppointmentDetails from "@/pages/Appointments/AppointmentDetails"

export const routes = [
	{
		path: frontRoutes.pages.home,
		Component: MainLayout,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				Component: Home,
				meta: {
					labelForMainMenu: 'Домашня',
					icon: 'home-icon'
				}
			},
			{
				path: frontRoutes.pages.patients.base,
				children: [
					{
						index: true,
						Component: PatientsPage,
						meta: {
							labelForMainMenu: 'Пацієнти',
							icon: 'patient-icon'
						}
					},
					{
						path: frontRoutes.pages.patients.edit,
						Component: PatientsForm
					},
					{
						path: frontRoutes.pages.patients.details,
						Component: PatientDetails
					}
				]
			},
			{
				path: frontRoutes.pages.doctors.base,
				children: [
					{
						index: true,
						Component: DoctorsPage,
						meta: {
							labelForMainMenu: 'Лікарі',
							icon: 'doctor-icon'
						}
					},
					{
						path: frontRoutes.pages.doctors.edit,
						Component: DoctorsForm
					},
					{
						path: frontRoutes.pages.doctors.details,
						Component: DoctorDetails
					}
				]
			},
			{
				path: frontRoutes.pages.appointments.base,
				children: [
					{
						index: true,
						Component: AppointmentsPage,
						meta: {
							labelForMainMenu: 'Прийоми',
							icon: 'appointments-icon'
						}
					},
					{
						path: frontRoutes.pages.appointments.edit,
						Component: AppointmentsForm
					},
					{
						path: frontRoutes.pages.appointments.details,
						Component: AppointmentDetails
					}
				]
			},
		],
	},
	{
		path: '*',
		Component: Page404 
	}
]