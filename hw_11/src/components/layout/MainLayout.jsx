import { Outlet } from "react-router"
import Footer from "./Footer"
import Header from "./Header"

function MainLayout() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default MainLayout