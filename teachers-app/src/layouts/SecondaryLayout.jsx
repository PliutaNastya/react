import ButtonGoToHome from "@/components/ButtonGoToHome"
import { Outlet } from "react-router"

function SecondaryLayout() {
	return (
		<main>
			< Outlet />
			<div className="container">
				< ButtonGoToHome />
			</div>
		</main>
	)
}

export default SecondaryLayout