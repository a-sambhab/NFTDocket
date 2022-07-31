import React from 'react'
import Navbar from '../components/Navbar'

function History() {
  return (
    <>
    <Navbar/>
    <div className='w-screen h-screen bg-new-secondary flex justify-center items-center'>
        <div className="w-1/2 h-1/2 text-black flex flex-col justify-start  items-center bg-secondary-3 rounded-xl">
          <div className="text-3xl">History</div>
          <div className="text-xl flex justify-evenly items-center bg-table-header w-5/6 py-2 m-5 rounded-2xl">
            <div>Owner Wallet</div>
            <div>Expiry Date</div>
            <div>Token Id</div>
          </div>
        </div>
    </div>
    </>
  )
}

export default History