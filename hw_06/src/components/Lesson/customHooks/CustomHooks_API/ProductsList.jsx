import { memo } from 'react'
import useFetch from './useFetch'

function ProductsList() {
  const { data: products, loading, error } = useFetch('/products')
  if (loading) {
    return <p>Завантаження продуктів...</p>
  }
  if (error) {
    return (
      <p style={{ color: 'red' }}>Помилка завантаження продуктів: {error}</p>
    )
  }

  return (
    <div>
      <h2>Наші продукти</h2>
      {products && products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
              />
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Немає продуктів.</p>
      )}
    </div>
  )
}

export default memo(ProductsList)
