import { useMemo, useState } from 'react'
import SortedList from './SortedList'

const arr = [2, 1, 3, 5, 34, 657, 34, 2, 1, 23]
function MainSortedListEx() {
  const [val, setVal] = useState('')

  const sortedList = useMemo(() => {
    console.log('---- Sorting ---')
    return [...arr].sort((a, b) => a - b)
  }, [])

  return (
    <div>
      <SortedList items={sortedList} />
      <hr />
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <hr />
      <div>{val}</div>
    </div>
  )
}

export default MainSortedListEx
