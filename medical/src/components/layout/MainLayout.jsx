import { Outlet } from "react-router"
import Header from "./Header"
import Menu from "./Menu"
import AppointmentsDataProvider from "@/providers/AppointmentsDataProvider"
import { useGetDoctorsQuery, useGetPatientsQuery } from "@/api";

function MainLayout() {
	// Дані зникали через хвилину, через очищення кешу при невикористані даних
	// тому тут викликаю хуки, на самому верхньому рівні
	useGetPatientsQuery({ page: 1, limit: 1000 })
	useGetDoctorsQuery({ page: 1, limit: 1000 })

	return (
		<>
			<aside>
				<Menu />
			</aside>
			<AppointmentsDataProvider>
				<main>
					<Header />
					<Outlet />
				</main>
			</AppointmentsDataProvider>
		</>
	)
}

export default MainLayout