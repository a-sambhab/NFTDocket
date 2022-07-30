import React, {useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'


function Approve() {
    const {warrantyID} = useParams();
    console.log(warrantyID);
    const Verify = () => {
        console.log("verifying");
    }
  return (
    <>
        <div className='w-screen h-screen'>
        <div className='w-full h-12 bg-primary fixed'>
            <NavLink to='/' className='text-white text-2xl w-full pt-2 pl-2 h-fit flex justify-center items-center font-bold'>NFTWeb</NavLink>
        </div>
        <div className='w-full h-full  bg-gradient-to-b from-secondary-1 via-secondary-1 to-secondary-2 flex flex-col justify-center items-center'>
            <div className='w-1/3 h-4/6 flex justify-start items-center flex-col bg-secondary-3 rounded-lg'>
                <div className='text-2xl mt-4 font-bold'>Warranty #{warrantyID}</div>
                <div className='flex flex-col justify-evenly items-center w-full h-3/4'>
                    <img className='w-auto rounded-lg p-0.5 h-2/3 mt-5 mb-5' src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1658402368/6df919637ea1e3a6bf7f6b98022b3b62_npgxgf.jpg"/>
                    <div className='flex flex-col justify-center items-center mt-4'>
                        <span className='w-full text-xl text-left'><span className='font-semibold'>Order ID:</span> 1514444150</span>
                        <span className='w-full text-xl text-left'><span className='font-semibold'>Owner Address:</span> 11645050222..666666</span>
                        <span className='w-full text-xl text-left'><span className='font-semibold'>Expiry Date:</span> 29/07/2022</span>
                    </div>
                </div>
            </div>
            <button className='w-1/3 h-10 bg-green-700 rounded-xl text-white m-2' onclick = {Verify}>Verify</button>
        </div>
    </div>
    </>
  )
}

export default Approve