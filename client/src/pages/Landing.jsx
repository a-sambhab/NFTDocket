import React from 'react'
import { NavLink } from 'react-router-dom'

function Landing() {
  return (
    <>
    <div className='w-screen h-screen'>
        <div className='w-full h-12 bg-primary fixed'>
            <NavLink to='/' className='text-white text-2xl w-full pt-2 pl-2 h-fit flex justify-start items-center'>NFTWeb</NavLink>
        </div>
        <div className='w-full h-full  bg-gradient-to-b from-secondary-1 via-secondary-1 to-secondary-2 flex justify-evenly items-center'>
          <NavLink className='w-1/4 h-1/4 bg-secondary-3 flex justify-center items-center' to='seller'>Seller</NavLink>
          <NavLink className='w-1/4 h-1/4 bg-secondary-3 flex justify-center items-center' to='buyer'>Buyer</NavLink>
        </div>
    </div>
    </>
  )
}

export default Landing