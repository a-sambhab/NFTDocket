import React, { useContext,useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import Web3Context from "../contexts";

import Navbar from "../components/Navbar";

function Landing() {
  const { account, sellerI } = useContext(Web3Context);
  console.log(sellerI)
  
  return (
    <>
      <div>
        <Navbar />
        <div className="w-full h-screen bg-new-secondary flex justify-center items-center">
          <div className="left w-1/2 ml-32">
          <div className="flex flex-col justify-start items-start">
            <div className="title text-4xl text-black ">
              On-Chain Warranties for your Products
            </div>
            <div className="info">We need to warrant everything</div>
            <div className="buttons w-full mt-8 flex justify-start items-center">
              {sellerI==0 ? (
                <NavLink
                  to="/createseller"
                  className="bg-new w-36 text-white p-2 text-center rounded-2xl"
                >
                  Register as Seller
                </NavLink>
              ) : (
                <NavLink
                  to={`seller/${account.currentAccount}`}
                  className="bg-new w-32 text-white p-2 text-center rounded-2xl"
                >
                  Seller
                </NavLink>
              )}
              <NavLink
                to={`/buyer/${account.currentAccount}`}
                className="bg-new w-32 text-white p-2 ml-2 text-center rounded-2xl"
              >
               Customer
              </NavLink>
              </div>
            </div>
          </div>
          <div className="right w-1/2 h-full flex justify-center items-center">
            <img
              className="w-2/3"
              src="https://res.cloudinary.com/sambitsankalp/image/upload/v1655060810/hackathons/image_1_bameyw.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
