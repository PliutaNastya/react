import { Link } from "react-router"
import image from "@/assets/img/page404_icon.svg"

function Page404() {
	return (
		<div className="not-found">
			<div className="not-found__container">
				<div className="not-found__image">
					<img src={image} alt="Page 404 Icon." />
				</div>
				<p className="not-found__message">Oops! it seems you follow backlink.</p>
			</div>
		</div>
	)
}

export default Page404