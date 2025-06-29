function SortedList({ items }) {
  return (
    <ul>
      {items.map((el, i) => (
        <li key={i}>{el}</li>
      ))}
    </ul>
  )
}

export default SortedList
