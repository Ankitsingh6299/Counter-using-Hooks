import { useState } from "react"
import React from 'react'


function Hooks() {
    const[count, setCount] = useState(0)
  return (
    <div>
        <button onClick={() => setCount(count+1)}>Count {count}</button>
    </div>
  )
}

export default Hooks