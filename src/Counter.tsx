import { useState } from 'react'
import { Parent } from './Parent'

export const Counter = () => {

  return (
    <div>
      <h3>Update the count and edit src/App.tsx, state is preserved</h3>
      <Parent />
    </div>
  )
}
