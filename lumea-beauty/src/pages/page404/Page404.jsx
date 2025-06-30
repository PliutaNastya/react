import { Link } from "react-router"
import frontRoutes from "../../routes/frontRoutes"
import image from "../../assets/img/page404/icon.svg";

function Page404() {
	return (
		<div className="not-found">
			<div className="not-found__container">
				<div className="not-found__image">
					<img src={image} alt="Page 404 Icon." />
				</div>
				<p className="not-found__message">Oops! it seems you follow backlink.</p>
				<Link to={frontRoutes.navigate.returnBackToHome()} className="not-found__button button">
					← Back to Home
				</Link>
			</div>
		</div>
	)
}

export default Page404