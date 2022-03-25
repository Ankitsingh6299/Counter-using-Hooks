import React from 'react'
import { useState } from 'react'
function HooksForm() {
    const[name,setName] = useState({firstname:'',lastName:''})
  return (
    <form>
        <input type='text' value={name.firstname} onChange={e=>setName({...name,firstname:e.target.value})}></input>
        <input type='text' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}></input>
        <h2>Your firstname is : {name.firstname}</h2>
        <h2>Your lastname is : {name.lastName}</h2>
    </form>
  )
}

export default HooksForm