import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import Web3Context from '../contexts'

function Navbar() {
  const {connectWallet,account} = useContext(Web3Context);

  return (
    <>
        <div className='w-full h-16 bg-new fixed flex flex-row justify-end items-center' style={{backgroundColor: '#232946'}}>
            <NavLink to='/' className='text-white text-2xl w-full pt-2 h-fit flex justify-start items-center py-2 ml-24 font-bold'>NFTDocket</NavLink>
            {   account.currentAccount==null  ?    ( <div className='mr-24 cursor-pointer text-white bg-secondary-2 w-52 h-10 text-center rounded-xl pt-2 px-4' onClick={connectWallet}>+ Connect Wallet</div>
):(<div className="w-1/3 flex justify-center items-center mr-24 text-white">Hey,{' '}
{`${String(account.currentAccount).slice(0, 9)}...${String(
  account.currentAccount
).slice(String(account.currentAccount).length - 9)}`}</div>)}
        </div>
    </>
  )
}

export default Navbar