import { Children } from 'react'

function ReverseComp({ children }) {
  return (
    <>
      {Children.map(children, (child) => (
        <>
          <div>{child}</div>
          <hr />
        </>
      ))}
    </>
  )
}

export default ReverseComp
