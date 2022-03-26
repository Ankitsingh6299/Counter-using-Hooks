import React from 'react'
import {useEffect,useState} from 'react'
function CounterUseEffect() {
 
    const[count,setCount] = useState(0)

useEffect(() => {
    document.title = `Clicked ${count} times`
})
    return (
    <div>
        <button onClick={() => setCount(count+1)}>Click {count}</button>
    </div>
  )
}

export default CounterUseEffect