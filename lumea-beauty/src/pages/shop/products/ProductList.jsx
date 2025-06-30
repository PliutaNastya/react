import apiRoutes from "../../../api/apiRoutes"
import Spinner from "../../../components/Spinner"
import useFetch from "../../../hooks/useFetch"
import ProductItem from "./ProductItem"

function ProductList() {
	// Отримую данні з API
	const { data, loading, error } = useFetch(`${apiRoutes.productsList}?limit=10`)
	console.log(data)

	if (loading) return <Spinner />
	if (error) return <p>Error: {error}</p>
	if (!data || !data.products) return <p>No products found.</p>

	const productsList = data.products

	return (
		<ul className="cards">
			{productsList.map(card => (
				< ProductItem key={card.id} id={card.id} images={card.images} title={card.title} description={card.description} price={card.price} stock={card.stock} />
			))}
		</ul>
	)
}

export default ProductList