import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Web3Context from "../contexts";
import {getSellerNFTs} from "../contexts/useContract/readContract"


function Navbutton(props) {
  return (
    <a
      href={props.link}
      className="text-white text-xl w-5/6 h-fit py-4 mt-4 ml-11 hover:bg-secondary-1 active:bg-secondary-1 text-center rounded-l-xl"
    >
      {props.content}
    </a>
  );
}

function WarrantyCount(props) {
  return (
    <>
      <div className="w-1/4 h-10  bg-secondary-3 flex justify-center items-center rounded-3xl">
        {props.head}: {props.count}
      </div>
    </>
  );
}

function PendingWarranty(props) {
  return (
    <>
      <NavLink
        to={`/approve/${props.id}`}
        className="bg-secondary-3 mx-16 h-14 flex justify-between items-center rounded-2xl text-xl my-2"
      >
        <div className="flex justify-center items-center pl-5">
          <img className="w-10 h-10 rounded-full" src={props.img} />
          <span className="px-3">{props.name}</span>
        </div>
        <span className="pr-12">{props.status}</span>
        <span className="pr-5">#{props.id}</span>
      </NavLink>
    </>
  );
}
function ActiveWarranty(props) {
  return (
    <>
      <NavLink
        to={`/warranty/${props.id}`}
        className="bg-secondary-3 mx-16 h-14 flex justify-between items-center rounded-2xl text-xl my-2"
      >
        <div className="flex justify-center items-center pl-5">
          <img className="w-10 h-10 rounded-full" src={props.img} />
          <span className="px-3">{props.name}</span>
        </div>
        <span className="pr-12">{props.status}</span>
        <span className="pr-12">{props.expiry}</span>
        <span className="pr-5">#{props.id}</span>
      </NavLink>
    </>
  );
}
function ExpiredWarranty(props) {
  return (
    <>
      <NavLink
        to={`/warranty/${props.id}`}
        className="bg-secondary-3 mx-16 h-14 flex justify-between items-center rounded-2xl text-xl my-2"
      >
        <div className="flex justify-center items-center pl-5">
          <img className="w-10 h-10 rounded-full" src={props.img} />
          <span className="px-3">{props.name}</span>
        </div>
        <span className="pr-12">{props.status}</span>
        <span className="pr-5">#{props.id}</span>
      </NavLink>
    </>
  );
}

function Seller() {
  const { connectWallet, account,Contract } = useContext(Web3Context);
  const { add } = useParams();
  useEffect(()=>{
    console.log(getSellerNFTs(Contract,add));
  },[])

  return (
    <>
      <div className="flex w-screen h-fit min-h-screen bg-primary overflow-x-hidden">
        <div className="sidebar w-1/6 h-full flex flex-col items-center">
          <NavLink
            to="/"
            className="text-white text-2xl border-b-2 p-4 w-full h-fit flex justify-center items-center"
          >
            NFTWeb
          </NavLink>
          <NavLink
            to={`/createnft/${add}`}
            className="text-white text-xl w-5/6 h-fit py-4 mt-4 ml-11 hover:bg-secondary-1 active:bg-secondary-1 text-center rounded-l-xl"
          >
            Create NFT
          </NavLink>
          <Navbutton link="#active" content="Active Warranties" />
          <Navbutton link="#pending" content="Pending Warranties" />
          <Navbutton link="#expired" content="Expired Warranties" />
          <div className="w-5/6 h-2/6 bg-secondary-3 my-20 flex flex-col justify-center items-center rounded-2xl">
            <img
              className="w-1/2 rounded-xl"
              src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1658402368/6df919637ea1e3a6bf7f6b98022b3b62_npgxgf.jpg"
            />
            <div className="text-2xl text-center">David's Warranty Log</div>
          </div>
        </div>
        <div className="main w-5/6 h-fit min-h-screen bg-gradient-to-b from-secondary-1 via-secondary-1 to-secondary-2">
          <div className="flex justify-between items-center h-fit py-4">
            <span className="text-2xl ml-12">Dashboard</span>
            {account.currentAccount == null ? (
              <div
                className="cursor-pointer text-white bg-secondary-2 mr-20 w-40 h-10 text-center rounded-xl pt-2"
                onClick={connectWallet}
              >
                + Connect Wallet
              </div>
            ) : (
              <div className="mr-8">
                Hey,{" "}
                {`${String(account.currentAccount).slice(0, 9)}...${String(
                  account.currentAccount
                ).slice(String(account.currentAccount).length - 9)}`}
              </div>
            )}{" "}
          </div>
          <div className="w-full h-1/6 flex items-center justify-evenly my-4">
            {/* <button className='w-1/4 bg-secondary-3'>Active Warranties: 23</button> */}
            <WarrantyCount head="Active Warranties" count="23" />
            <WarrantyCount head="Pending Warranties" count="23" />
            <WarrantyCount head="Expired Warranties" count="23" />
          </div>
          <div id="pending">
            <div className="text-2xl pl-12">Pending Warranty</div>
            <div className="text-xl flex justify-between mx-24 items-center h-20">
              <span>Customer</span>
              <span>Status</span>
              <span>Order ID</span>
            </div>
            <div className="flex flex-col justify-evenly">
              <PendingWarranty
                img="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1658402368/6df919637ea1e3a6bf7f6b98022b3b62_npgxgf.jpg"
                name="Albert Chaini"
                status="Pending"
                id="1547854335"
              />
              <PendingWarranty
                img="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1658402368/6df919637ea1e3a6bf7f6b98022b3b62_npgxgf.jpg"
                name="Albert Chaini"
                status="Pending"
                id="1547854335"
              />
            </div>
          </div>
          <div id="active">
            <div className="text-2xl pl-12">Active Warranty</div>
            <div className="text-xl flex justify-between mx-24 items-center h-20">
              <span>Customer</span>
              <span>Status</span>
              <span>Expiry Date</span>
              <span>Order ID</span>
            </div>
            <div className="flex flex-col justify-evenly">
              <ActiveWarranty
                img="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1658402368/6df919637ea1e3a6bf7f6b98022b3b62_npgxgf.jpg"
                name="Albert Chaini"
                status="Active"
                id="1547854335"
                expiry="23-02-2023"
              />
              <ActiveWarranty
                img="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1658402368/6df919637ea1e3a6bf7f6b98022b3b62_npgxgf.jpg"
                name="Albert Chaini"
                status="Active"
                id="1547854335"
                expiry="23-02-2023"
              />
            </div>
          </div>
          <div id="expired">
            <div className="text-2xl pl-12">Expired Warranty</div>
            <div className="text-xl flex justify-between mx-24 items-center h-20">
              <span>Customer</span>
              <span>Status</span>
              <span>Order ID</span>
            </div>
            <div className="flex flex-col justify-evenly">
              <ExpiredWarranty
                img="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1658402368/6df919637ea1e3a6bf7f6b98022b3b62_npgxgf.jpg"
                name="Albert Chaini"
                status="Expired"
                id="1547854335"
              />
              <ExpiredWarranty
                img="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1658402368/6df919637ea1e3a6bf7f6b98022b3b62_npgxgf.jpg"
                name="Albert Chaini"
                status="Expired"
                id="1547854335"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seller;
