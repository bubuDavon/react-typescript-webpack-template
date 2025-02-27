import React from 'react'

export const Child = ({ value }: { value: number | string }) => {
  console.log('Child rendered')

  return (
    <div>
      <h3>Child Component</h3>
      <div>parentValue: {value}</div>
    </div>
  )
}
