import React from 'react'

export const Child3 = ({value}) => {
  console.log('Child3 rendered')

  return (
    <div>
      <h3>Child Component3, value = {value}</h3>
    </div>
  )
}
