import frontRoutes from "@/routes/frontRoutes"
import { Link, useLocation } from "react-router"
import logo from '@/assets/img/logo.svg'

function Logo() {
	const location = useLocation()
	const isHomePage = location.pathname === '/'

	return isHomePage ?
		<div className="logo">
			<img src={logo} alt="Logotype" />
		</div>
		:
		<Link to={frontRoutes.navigate.home} className="logo">
			<img src={logo} alt="Logotype" />
		</Link>
}

export default Logo