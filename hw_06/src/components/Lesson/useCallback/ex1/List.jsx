import { memo } from 'react'

function List({ items, actionFn }) {
  console.log('---- List ---')

  return (
    <div>
      {items.map((el, i) => (
        <div key={i} onClick={() => actionFn(el)}>
          {el}
        </div>
      ))}
    </div>
  )
}

export default memo(List)
