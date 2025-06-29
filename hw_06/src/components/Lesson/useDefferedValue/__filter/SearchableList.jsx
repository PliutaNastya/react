import { useState, useDeferredValue } from 'react'

function SearchableList({ items }) {
  const [searchTerm, setSearchTerm] = useState('')
  // Відкладаємо значення searchTerm для фільтрації
  const deferredSearchTerm = useDeferredValue(searchTerm)

  // Фільтрація відбувається з відкладеним значенням
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(deferredSearchTerm.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchableList
