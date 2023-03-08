import React from 'react'
import { useNavigate } from 'react-router-dom'

function AddMovie() {
  
  const navigate = useNavigate()

  return (
    <div style={{ padding:'20px' ,border: '2px solid red'}}>
    <h1>AddMovie</h1>
    <button onClick={()=>   navigate(-1)}>navigate to Categories</button>
  </div>
  )
}

export default AddMovie
