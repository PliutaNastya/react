import { useCallback, useState } from 'react'
import Generator from './Generator'

function MainGenerate() {
  const [val, setVal] = useState('')

  const generateNumber = useCallback(() => {
    const num = Math.random()
    console.log(num)
  }, [])

  return (
    <div>
      <Generator onGenerate={generateNumber} />
      <hr />
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <hr />
      <div>{val}</div>
    </div>
  )
}

export default MainGenerate
