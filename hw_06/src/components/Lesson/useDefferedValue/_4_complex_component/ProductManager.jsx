import { useDeferredValue, useState } from 'react'
import ProductList from './ProductList'

function ProductManager({ items }) {
  const [inputValue, setInputValue] = useState('')
  // Відкладаємо значення inputValue для ProductList
  const deferredInputValue = useDeferredValue(inputValue)

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Фільтрувати товари..."
      />
      {/* ProductList отримує відкладене значення,
          що дозволяє інпуту залишатися чуйним */}
      <ProductList products={items} filterTerm={deferredInputValue} />
    </div>
  )
}

export default ProductManager
