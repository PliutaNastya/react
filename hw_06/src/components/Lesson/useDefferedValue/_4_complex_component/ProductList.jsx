function ProductList({ products, filterTerm }) {
  // Дорогий рендеринг: фільтрація великого списку
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filterTerm.toLowerCase())
  )

  return (
    <ul>
      {filteredProducts.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  )
}

export default ProductList
