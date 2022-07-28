import React, {useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'


function Approve() {
    const {warrantyID} = useParams();
    const [show, setshow] = useState('')
    console.log(warrantyID);
    const MintNft = (e) => {
        e.preventDefault();
        window.location = 'http://localhost:3000';
    }
    const showPhoto = (e) => {
        // let file = this.files[0];
        console.log(e.target.files[0]);
        setshow(URL.createObjectURL(e.target.files[0]));
        // setshow('https://res.cloudinary.com/dgy8ybeoy/image/upload/v1658402368/6df919637ea1e3a6bf7f6b98022b3b62_npgxgf.jpg');
    }
  return (
    <>
    <div className='w-screen h-screen'>
        <div className='w-full h-12 bg-primary fixed'>
            <NavLink to='/' className='text-white text-2xl w-full pt-2 pl-2 h-fit flex justify-start items-center'>NFTWeb</NavLink>
        </div>
        <div className='w-full h-full  bg-gradient-to-b from-secondary-1 via-secondary-1 to-secondary-2 flex justify-center items-center'>
            <div className='w-1/2 min-h-1/2 h-fit flex justify-start items-center flex-col bg-secondary-3 mt-8'>
                <div className='text-2xl'>Issue Warranty #{warrantyID}</div>
                <form className='flex flex-col justify-evenly items-center min-h-full h-fit w-full rounded-xl'>
                    <img src={show} id="show"/>
                    <input placeholder='Upload Image' type="file" accept='image/*' className='w-2/3 m-4' onChange={showPhoto}/>
                    <input placeholder='Enter Order ID' type="text" className='w-2/3 m-4'/>
                    <input placeholder='Enter Buyer Wallet ID' type="text" className='w-2/3 m-4'/>
                    <input type="date" className='w-2/3 m-4' />
                    <button type='submit' className='bg-green-700 rounded-xl w-1/3 text-white m-2' onClick={MintNft}>Submit</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Approve