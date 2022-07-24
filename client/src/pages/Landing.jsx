import React from 'react'
import { NavLink } from 'react-router-dom'

function Landing() {
  return (
    <>
        <NavLink to='/seller'>seller</NavLink>
        <NavLink to='/buyer'>buyer</NavLink>
    </>
  )
}

export default Landing