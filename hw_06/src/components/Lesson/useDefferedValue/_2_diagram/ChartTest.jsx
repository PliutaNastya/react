import { useState, useDeferredValue } from 'react'
import ChartComponent from './ChartComponent'

function ChartTest({ points }) {
  const [inputValue, setInputValue] = useState('')
  const deferredValue = useDeferredValue(inputValue)

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const data = points.map((point) => ({
    ...point,
    value: Math.sin(point.value + Number(deferredValue || 0)) * 50 + 50,
  }))

  return (
    <div style={{ padding: '20px' }}>
      <h1>useDeferredValue з Recharts</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введіть число для зсуву синусоїди"
        style={{ marginBottom: '20px', padding: '8px', width: '200px' }}
      />
      <p>Введене значення: {inputValue}</p>
      <p>Відкладене значення: {deferredValue}</p>
      <ChartComponent data={data} />
    </div>
  )
}

export default ChartTest
