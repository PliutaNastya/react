import { memo } from 'react'

function Generator({ onGenerate }) {
  console.log('Generator====')

  return (
    <div>
      <h1>Generator</h1>
      <button onClick={onGenerate}>Generate</button>
    </div>
  )
}

export default memo(Generator)
