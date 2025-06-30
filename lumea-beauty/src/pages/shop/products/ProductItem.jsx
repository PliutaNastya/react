import { memo } from "react"
import { Link } from "react-router"
import frontRoutes from "../../../routes/frontRoutes"

function ProductItem({ id, images, title, description, price, stock }) {

	return (
		<li className="card">
			<Link to={frontRoutes.navigate.shop.getDetailLink(id)}>
				<img src={images[0]} alt={title} />
				<div className="card__content">
					<h3>{title}</h3>
					<p>{description}</p>
					<p>Price: {price}€</p>
					<p>In stock: {stock}</p>
				</div>
			</Link>
		</li>
	)
}

export default memo(ProductItem)