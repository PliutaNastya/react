import { useState, useDeferredValue, useEffect, useRef } from 'react'

function RequestAbortTest() {
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
	const deferredQuery = useDeferredValue(query)
	// треба саме useRef, а не константу, бо цей хук дозволяє зберігати значення між рендерингами, а константа просто кожен раз би створювалась нова
  const abortControllerRef = useRef(null)

  useEffect(() => {
    console.log(111222)

    // Скасовуємо попередній запит
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
    abortControllerRef.current = new AbortController()

    const fetchProducts = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/search?q=${encodeURIComponent(
            deferredQuery
          )}`,
          { signal: abortControllerRef.current.signal }
        )
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Search error:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [deferredQuery])

  return (
    <div>
      <h1>Пошук товарів із useDeferredValue</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Введіть назву товару"
        style={{ padding: '8px', width: '300px', marginBottom: '20px' }}
      />
      <p>Пошуковий запит: {query}</p>
      <p>Відкладений запит: {deferredQuery}</p>
      {isLoading ? (
        <p>Завантаження...</p>
      ) : (
        <ul>
          {products.length ? (
            products.map((product) => (
              <li key={product.id}>
                <img src={product.imageUrl} alt={product.name} width="50" />
                {product.name} - ${product.price}
              </li>
            ))
          ) : (
            <p>Немає результатів</p>
          )}
        </ul>
      )}
    </div>
  )
}

export default RequestAbortTest
