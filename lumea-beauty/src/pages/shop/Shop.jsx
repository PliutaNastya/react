import { Outlet } from 'react-router'

import Hero from "../../components/Hero"
import shopImage from "../../assets/img/shop/shop_image.webp"
import ProductList from "./products/ProductList"

function Shop() {
	return (
		<div className="shop">
			< Hero title='Discover Your Beauty Ritual' text='Explore our curated collection of cosmetics designed to celebrate every skin tone and every style.' image={shopImage} alt='A collection of various makeup products arranged in a pile on a clean white surface.' />
			<section className="products">
				<div className="products__container">
					<h2 className="products__title title">Our Products</h2>
					<ProductList />
					< Outlet />
				</div>
			</section>
		</div>
	)
}

export default Shop