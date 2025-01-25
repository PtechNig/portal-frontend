import React from 'react'
import {  useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className='notfound'>
      <h1>Page not found! 404</h1>
        {navigate('/home')}
    </div>
  )
}

export default NotFound
