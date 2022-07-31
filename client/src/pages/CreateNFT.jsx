import React, {useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'


function CreateNFT() {
    const [show, setshow] = useState('')
    const showPhoto = (e) => {
        console.log(e.target.files[0]);
        setshow(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <>
    <div className='w-screen h-screen'>
        <div className='w-full h-12 bg-new fixed'>
            <NavLink to='/' className='text-white font-bold text-2xl w-full pt-2 pl-2 h-fit flex justify-center items-center'>NFTWeb</NavLink>
        </div>
        <div className='w-full h-full bg-new-secondary flex justify-center items-center overflow-auto'>
            <div className='w-1/2 min-h-1/2 h-fit flex justify-start items-center flex-col bg-new py-8 mt-8 rounded-xl'>
                <div className='text-2xl font-bold text-white mb-5'>Create Warranty</div>
                <form className='flex flex-col justify-evenly items-center min-h-full h-fit w-full rounded-xl'>
                    <img src={show} className="w-60 h-auto" id="show"/>
                    <input placeholder='Upload Image' type="file" accept='image/*' className='w-2/3 p-2 m-4 block text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400' onChange={showPhoto}/>
                    <input placeholder='Enter Order ID' type="text" className='w-2/3 m-4 p-2 rounded-lg'/>
                    <input placeholder='Enter Buyer Wallet ID' type="text" className='w-2/3 m-4 p-2 rounded-lg'/>
                    <input type="date" className='w-2/3 m-4 p-2 rounded-lg' />
                    <NavLink type='submit' className='bg-button-col hover:bg-button-col hover:text-black bottom-2 border-black rounded-xl text-black w-2/3 h-10  m-2 flex justify-center items-center' to='/seller'>Submit</NavLink>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default CreateNFT