import ProductItem from './ProductItem'
import styles from './ProductItem.module.css'

function ProductsList({ productsList }) {
	let content
	if (productsList?.length)
		content = productsList.map((prod, ind) => (
			<ProductItem key={ind} {...prod} />
		))
	else content = <h1>Список порожній</h1>

	return (
		<div className={styles.prodCnt}>
			{content}
		</div>
	)
}

export default ProductsList
