import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Web3Context from "../contexts";
import { createSeller } from "../contexts/useContract/writeContract";

import Navbar from "../components/Navbar";

function CreateSeller() {
  const [sellerId, setSellerId] = useState("");
  const { connectWallet, account, Contract } = useContext(Web3Context);
  useEffect(() => {
    const rand = Math.round(Math.random()*100000);
    setSellerId(rand);
  }, []);
  const create = () => {
    //console.log(Contract)
    createSeller(sellerId, Contract, account.currentAccount);
  };

  return (
    <>
      <div className="w-screen h-screen">
        <Navbar />
        <div className="w-full h-full  bg-gradient-to-b from-secondary-1 via-secondary-1 to-secondary-2 flex justify-evenly items-center">
          <div className="w-2/4 h-1/2 bg-secondary-3 drop-shadow rounded-lg flex flex-col justify-evenly items-center">
            <div className="text-xl font-bold">Create Seller Profile</div>
            <form className="w-full h-1/2 flex flex-col justify-evenly items-center">
            <div className="w-full flex flex-col justify-evenly items-center">
              <label for="wallet" className="w-2/4 p-2 text-left">Seller Wallet Address</label>
              <input
                name="wallet"
                placeholder="Enter Seller Wallet ID"
                type="text"
                className="w-2/4 p-2 rounded-md"
                readOnly
                value={account.currentAccount}
              />
              </div>
              <div className="w-full flex flex-col justify-evenly items-center">
              <label for="seller" className="w-2/4 p-2 text-left">Seller ID</label>
              <input
                name="seller"
                placeholder="Enter Seller ID"
                type="text"
                className="w-2/4 p-2 rounded-md"
                readOnly
                value={sellerId}
              />
              </div>
            </form>
            <button
              className="w-1/3 h-12 bg-secondary-2 flex justify-center items-center rounded-md"
              onClick={create}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateSeller;
