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
            <NavLink to='/' className='text-white text-2xl w-full pt-2 pl-2 h-fit flex justify-start items-center'>NFTWeb</NavLink>
        </div>
        <div className='w-full h-full  bg-gradient-to-b from-secondary-1 via-secondary-1 to-secondary-2 flex justify-center items-center'>
            <div className='w-1/3 h-4/6 flex justify-start items-center flex-col bg-secondary-3'>
                <div className='text-2xl'>Warranty #{warrantyID}</div>
                <div className='flex flex-col justify-evenly items-center w-2/3 h-full'>
                    <img className='w-full p-0.5 h-2/3' src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1658402368/6df919637ea1e3a6bf7f6b98022b3b62_npgxgf.jpg"/>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='w-full text-center'>Order ID: 1514444150</span>
                        <span className='w-full text-center'>Owner Address: 11645050222..666666</span>
                        <span className='w-full text-center'>Expiry Date: 29/07/2022</span>
                        <button className='bg-green-700 rounded-xl w-1/3 text-white m-2' onclick = {Verify}>Verify</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Approve