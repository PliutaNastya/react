import MainLayout from "@/layouts/MainLayout"
import SecondaryLayout from "@/layouts/SecondaryLayout"
import { Route, Routes } from "react-router"
import frontRoutes from "./frontRoutes"
import Home from "@/pages/home/Home"
import TeachersList from "@/pages/teachers/TeachersList"
import TeachersForm from "@/pages/teachers/TeachersForm"
import TeachersDetail from "@/pages/teachers/TeachersDetail"
import Meetings from "@/pages/meetings/Meetings"
import AboutApp from "@/pages/about-app/AboutApp"
import AboutDev from "@/pages/about-dev/AboutDev"
import Page404 from "@/pages/page404/Page404"

function AppRoutes() {
	return (
		<Routes>
			<Route element={< MainLayout />}>
				<Route path={frontRoutes.pages.home} element={< Home />} />
				<Route path={frontRoutes.pages.teachers.index}>
					<Route index element={< TeachersList />} />
					<Route path={frontRoutes.pages.teachers.add} element={< TeachersForm />} />
					<Route path={frontRoutes.pages.teachers.edit} element={< TeachersForm />} />
					<Route path={frontRoutes.pages.teachers.detail} element={< TeachersDetail />} />
				</Route>
				<Route path={frontRoutes.pages.meetings} element={< Meetings />} />
			</Route>

			<Route element={< SecondaryLayout />}>
				<Route path={frontRoutes.pages.aboutApp} element={< AboutApp />} />
				<Route path={frontRoutes.pages.aboutDev} element={< AboutDev />} />
				<Route path='*' element={< Page404 />} />
			</Route>
		</Routes>
	)
}

export default AppRoutes