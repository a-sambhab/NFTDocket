import React from 'react'
import { NavLink, useParams } from 'react-router-dom'


function Approve() {
    const {warrantyID} = useParams();
    const MintNft = (e) => {
        e.preventDefault();
        window.location = 'http://localhost:3000';
    }
  return (
    <>
    <div className='w-screen h-screen'>
        <div className='w-full h-12 bg-primary fixed'>
            <NavLink to='/' className='text-white text-2xl w-full pt-2 pl-2 h-fit flex justify-start items-center'>NFTWeb</NavLink>
        </div>
        <div className='w-full h-full  bg-gradient-to-b from-secondary-1 via-secondary-1 to-secondary-2 flex justify-center items-center'>
            <div className='w-1/4 h-1/3 flex justify-start items-center flex-col bg-secondary-3'>
                <div className='text-2xl'>Issue Warranty #{warrantyID}</div>
                <form className='flex flex-col justify-evenly items-center h-full w-full rounded-xl'>
                    <input placeholder='Enter Order ID' type="text" className='w-2/3'/>
                    <input placeholder='Enter Buyer Wallet ID' type="text" className='w-2/3'/>
                    <button type='submit' className='bg-green-700 rounded-xl w-1/3 text-white' onClick={MintNft}>Submit</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Approve