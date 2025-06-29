import { useState, useDeferredValue } from 'react'

function MyComponent() {
  //змінна стану, що поєднана з input
  const [inputValue, setInputValue] = useState('')

  // deferredInputValue буде оновлюватися із затримкою,
  const deferredInputValue = useDeferredValue(inputValue)

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {/* Інші компоненти, які використовують deferredInputValue,
          будуть рендеритися з відкладеним значенням */}
      <SomeExpensiveComponent data={deferredInputValue} />
    </div>
  )
}

export default MyComponent
