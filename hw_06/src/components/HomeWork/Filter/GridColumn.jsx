import { memo } from "react"

function GridColumn({ images, title, description, price, stock }) {
	console.log('Render')

	return (
		<li className="card">
			<a href="#">
				<img src={images[0]} alt={title} />
				<h3>{title}</h3>
				<p>{description}</p>
				<p>Price: {price}€</p>
				<p>In stock: {stock}</p>
			</a>
		</li>
	)
}

export default memo(GridColumn)