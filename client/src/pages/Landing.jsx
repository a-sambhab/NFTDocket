import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import Web3Context from '../contexts'


function Landing() {
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
          <NavLink className='w-1/4 h-1/4 bg-secondary-3 flex justify-center items-center' to='createseller'>Seller</NavLink>
          <NavLink className='w-1/4 h-1/4 bg-secondary-3 flex justify-center items-center' to='buyer'>Buyer</NavLink>
        </div>
    </div>
    </>
  )
}

export default Landing