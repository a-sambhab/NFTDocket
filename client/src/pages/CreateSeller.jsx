import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom';
import Web3Context from '../contexts'

function CreateSeller() {
    const {connectWallet,account} = useContext(Web3Context);

  return (
    <>
        <div className='w-screen h-screen'>
        <div className='w-full h-12 bg-primary fixed flex flex-row justify-end  '>
            <NavLink to='/' className='text-white text-2xl w-full pt-2 pl-2 h-fit flex justify-start items-center'>NFTWeb</NavLink>
            {   account.currentAccount==null  ?    ( <div className='cursor-pointer text-white bg-secondary-2 mr-20 w-40 h-10 text-center rounded-xl pt-2' onClick={connectWallet}>+ Connect Wallet</div>
):(<div className="mr-8 w-1/3 flex justify-center items-center">Hey,{' '}
{`${String(account.currentAccount).slice(0, 9)}...${String(
  account.currentAccount
).slice(String(account.currentAccount).length - 9)}`}</div>)}
        </div>
        <div className='w-full h-full  bg-gradient-to-b from-secondary-1 via-secondary-1 to-secondary-2 flex justify-evenly items-center'>
          <div className='w-1/2 h-1/2 bg-secondary-3 flex flex-col justify-evenly items-center'>
            <div className='text-xl'>Create Seller Profile</div>
            <form className='w-full h-1/2 flex flex-col justify-evenly items-center'>
                <label for="wallet">Seller Wallet Address</label>
                <input name='wallet' placeholder='Enter Seller Wallet ID' type="text" className='w-2/3 p-2 m-4' readOnly value={account.currentAccount}/>
                <label for="seller">Seller ID</label>
                <input name='seller' placeholder='Enter Seller ID' type="text" className='w-2/3 m-4 p-2' readOnly value="515166"/>
            </form>
            <NavLink to='/seller' className="w-1/3 h-12 bg-secondary-2 flex justify-center items-center">Register</NavLink>
          </div>
        </div>
    </div>
    </>
  )
}

export default CreateSeller