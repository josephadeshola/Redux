import React from 'react'
import { useSelector } from 'react-redux'

const Signin = () => {
    const getDetails =useSelector((state)=>state.Counter)
    console.log(getDetails);
  return (
    <div>
<h2>Sign</h2>    </div>
  )
}

export default Signin