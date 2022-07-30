import React from 'react'
import { NavLink } from 'react-router-dom'


import Navbar from "../components/Navbar";

function Landing() {
  return (
    <>
    <div>
        <Navbar />
        <div className='w-full h-screen bg-new-secondary flex justify-center items-center'>
          <div className='left w-1/2 flex flex-col justify-center items-center'>
            <div className='title text-4xl text-black '>
              Warrant in your own style
            </div>
            <div className='info'>
              We need to warrant everything
            </div>
            <div className='buttons w-full flex justify-evenly items-center'>
              <NavLink to='/createseller' className='bg-new w-32 text-white p-2 text-center'>Seller</NavLink>
              <NavLink to='/buyer' className='bg-new w-32 text-white p-2 text-center'>Buyer</NavLink>
            </div>
          </div>
          <div className='right w-1/2 h-full flex justify-center items-center'>
            <img className='w-2/3' src='https://res.cloudinary.com/sambitsankalp/image/upload/v1655060810/hackathons/image_1_bameyw.png'/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Landing
