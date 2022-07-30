import React, {useState,useContext} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import client from '../utils/ipfs'
import {createNFT} from '../contexts/useContract/writeContract'
import {sellerId} from '../contexts/useContract/readContract'
import Web3Context from '../contexts'

function CreateNFT() { 
  const {account,Contract} = useContext(Web3Context)
  const{add} = useParams();
    const [show, setshow] = useState('')
    const[productId,setProductId]=useState()
    const[customer,setCustomer]= useState()
    const[expiry,setExpiry]=useState()
    const[coverImageURI,setCoverImageURI] = useState()
    const[Coverimage,setCoverImage] = useState()
    //const [pic,setPic]=useState()
    const showPhoto = async(e) => {
       // console.log(e.target.files[0]);
        setCoverImage(e.target.files[0]);
        setshow(URL.createObjectURL(e.target.files[0]));
        await UploadImage()
    }
    const handleProductId= (event) => {
        setProductId(() => ([event.target.name] = event.target.value));
      };
      const handleExpiry= (event) => {
        setExpiry(() => ([event.target.name] = event.target.value));
      };
      const handleCustomer= (event) => {
        setCustomer(() => ([event.target.name] = event.target.value));
      };
    const UploadImage = async () => {
        const data = new FormData();
        data.append('file', Coverimage);
        data.append('upload_preset', 'mystiq');
        data.append('cloud_name', 'doybtqm8h');
        await fetch('https://api.cloudinary.com/v1_1/doybtqm8h/image/upload', {
          method: 'post',
          body: data,
        })
          .then((resp) => resp.json())
          .then((data) => {
            setCoverImageURI(data.url);
            //console.log('Image Uploaded')
            alert("Image Uploaded");
          })
          .catch((err) => console.log(err));
      };
    
      const handleData = async () => {
        const obj = {
          image: coverImageURI,
          name:"NFT Warranty",
          description:"This a NFT Warranty and Proof of Ownership of the following product",
          attributes: [
            {
                "display_type": "date", 
                "trait_type": "expiry", 
                "value":expiry 

            },
            {
                "trait_type":"productId",
                "value":productId
            }
          ],
        };
    
        const result = await client.add(JSON.stringify(obj));
        const str = 'ipfs://';
        const finalResult = str.concat(String(result.path));
        console.log(result)
       console.log(finalResult);
       createNFT(Contract,finalResult,sellerId(add),productId,customer,expiry,account.currentAccount);
        
        alert('NFT Data added');
      };
  return (
    <>
    <div className='w-screen h-screen'>
        <div className='w-full h-12 bg-primary fixed'>
            <NavLink to='/' className='text-white text-2xl w-full pt-2 pl-2 h-fit flex justify-start items-center'>NFTWeb</NavLink>
        </div>
        <div className='w-full h-full  bg-gradient-to-b from-secondary-1 via-secondary-1 to-secondary-2 flex justify-center items-center'>
            <div className='w-1/2 min-h-1/2 h-fit flex justify-start items-center flex-col bg-secondary-3 mt-8'>
                <div className='text-2xl'>Create Warranty</div>
                <form className='flex flex-col justify-evenly items-center min-h-full h-fit w-full rounded-xl'>
                    <img src={show} id="show"/>
                    <input placeholder='Upload Image' type="file" accept='image/*' className='w-2/3 m-4' onChange={showPhoto}/>
                    <input placeholder='Enter Order ID' name='productId' type="text" className='w-2/3 m-4' onChange={handleProductId}/>
                    <input placeholder='Enter Buyer Wallet ID' name='customer' type="text" className='w-2/3 m-4' onChange={handleCustomer}/>
                    <input type="number"name="expiry" className='w-2/3 m-4' onChange={handleExpiry} />
                    <button type='submit' className='bg-green-700 rounded-xl w-1/3 text-white m-2 flex justify-center items-center' onClick={handleData}>Submit</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default CreateNFT