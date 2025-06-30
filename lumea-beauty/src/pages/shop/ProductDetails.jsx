import { useNavigate, useParams, Link } from 'react-router'
import frontRoutes from '../../routes/frontRoutes'
import useFetch from '../../hooks/useFetch'
import { useEffect } from 'react'
import apiRoutes from '../../api/apiRoutes'
import Spinner from '../../components/Spinner'

function ProductDetails() {
	const { id } = useParams()
	const navigate = useNavigate()
	const { data: product, loading, error } = useFetch(apiRoutes.getProductById(id))

	console.log(product)

	// Переносимо редирект у useEffect
	useEffect(() => {
		if (!loading && (error || !product)) {
			navigate(frontRoutes.pages.shop.index)
		}
	}, [loading, error, product, navigate])

	if (loading) return <Spinner />
	if (!product) return null

	return (
		<section className="product">
			<div className="product__container">
				<Link to={frontRoutes.navigate.shop.returnBackToProducts()} className="product__back-link" >← Back to Products</Link>
				<div className="product__body">
					<div className="product__image">
						<img src={product.images[0]} alt={product.title} />
					</div>
					<div className="product__info">
						<h1 className="product__title">{product.title}</h1>
						<p className="product__brand">{product.brand}</p>
						<p className="product__category">{product.category}</p>
						<p className="product__description">{product.description}</p>
	
						<div className="product__price-box">
							<span className="product__price">{product.price} €</span>
							{product.discountPercentage > 0 && (
								<span className="product__discount">
									− {product.discountPercentage}%
								</span>
							)}
						</div>
	
						<p className="product__stock">In stock: {product.stock}</p>
						<p className="product__rating">⭐ {product.rating.toFixed(2)}</p>
	
						<button type='button' className="product__btn button">Add to cart</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductDetails
