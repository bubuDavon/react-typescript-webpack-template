import { useState } from 'react'
import { Child2 } from './Child2'
import { Child3 } from './Child3'
export const Parent = () => {
  const [count, setCount] = useState(0)
  console.log('Parent rendered')

  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <Child2 />
      <Child3 value={count}/>
    </div>
  )
}