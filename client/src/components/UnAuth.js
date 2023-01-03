import React from 'react'
import { Link } from 'react-router-dom'

const UnAuth = () => {
  return (
    <div>
        <h1>Please Login First</h1>
        <Link to = {"/login"}>Login</Link>
        <Link to ={"/"}>Home Page</Link>
    </div>
  )
}

export default UnAuth