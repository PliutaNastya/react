// Приклад. Розрбити компонент, що виводить список. При кліку виводити у консоль довжину назви.

import { useCallback, useState } from 'react'
import List from './List'

const arr = ['11', '2222', '33']
function AppList() {
  const [val, setVal] = useState('')
  const infoLog = useCallback((el) => {
    console.log(el.length)
  }, [])
  return (
    <div>
      <List items={arr} actionFn={infoLog} />
      <hr />
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <hr />
      <div>{val}</div>
    </div>
  )
}

export default AppList
