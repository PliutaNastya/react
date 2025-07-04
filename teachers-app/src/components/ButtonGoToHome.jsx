import frontRoutes from "@/routes/frontRoutes"
import { useNavigate } from "react-router"

function ButtonGoToHome() {
	const navigate = useNavigate()

	const goToHome = () => {
		navigate(frontRoutes.navigate.home)
	}
	return (
		<button type="button" className="button" onClick={goToHome}>Go to Home</button>
	)
}

export default ButtonGoToHome