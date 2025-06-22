import styles from './ProductItem.module.css'

function ProductItem({ name, price, image }) {
  return (
    <div className={styles.container}>
      <img src={image} alt="product" className={styles.img} />
      <h1>{name}</h1>
      <div className={styles.price}>
        <div>Price</div>
        <div>{price}</div>
      </div>
    </div>
  )
}

export default ProductItem
