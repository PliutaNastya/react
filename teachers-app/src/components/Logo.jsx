import logoImage from "@/assets/img/logo.svg"
import frontRoutes from "@/routes/frontRoutes"
import { Link, useLocation } from "react-router"

function Logo() {
	const location = useLocation()
	const isHomePage = location.pathname === '/'

	return isHomePage ?
		<div className="logo">
			<img src = { logoImage } alt = "Logotype" />
			<span>EduStaff</span>
		</div>
		:
		<Link to={frontRoutes.navigate.home} className="logo">
			<img src={logoImage} alt="Logotype" />
			<span>EduStaff</span>
		</Link>
}

export default Logo