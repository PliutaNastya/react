import { useState } from 'react'

function SearchableList_no({ items }) {
  const [searchTerm, setSearchTerm] = useState('')

  // Фільтрація відбувається з відкладеним значенням
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
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

export default SearchableList_no
