import { useState } from 'react'
import { Child } from './Child'

export const Parent = () => {
  const [count, setCount] = useState(0)
  const [staticValue, setStaticValue] = useState('static');
  console.log('Parent rendered')

  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <Child value={staticValue} />
    </div>
  )
}