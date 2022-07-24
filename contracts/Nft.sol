// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTWarranty is ERC721URIStorage {
    //using Counters for Counters.Counter;
    //Counters.Counter private _tokenIds;

        constructor() ERC721("NFTWarranty", "NFTW") {}

     struct seller{
        uint256 id;
        uint256 itemCounter;
        address owner;
        uint256 [] allNFTs;
        //string tokenURI;
     
    }
     struct warrantyDetails{
        uint256 tokenId;
        bytes32 verifyHash;
        uint256 creationTime;
        uint256 expiry;
        address[]buyers;
        uint256[]buyersDate;
    }
    //verify ownership

    
     uint256 [] public totalSellers;

    mapping(uint256=>seller) public allSellers;
    mapping(uint256=>mapping(uint256=>warrantyDetails)) public sellerWarrantyDetails;

    mapping(uint256=>mapping(uint256=>string)) public tokenURIList;

    function verifyOwnership(string memory productId,uint256 sellerId,uint256 tokenId)public view returns(bool){
        //require(sellerWarrantyDetails[sellerId][tokenId].verifyHash!=bytes32(0x0),"Item doesn't Exist");

        if(sellerWarrantyDetails[sellerId][tokenId].verifyHash==keccak256(abi.encode(msg.sender,productId))){
            return true;
        }
        else return false;
    }
    function claimNMint(string memory productId,uint256 sellerId,uint256 tokenId)public {
        require(verifyOwnership(productId,sellerId,tokenId)==true,"Not verified");
        _mint(msg.sender,tokenId);
        _setTokenURI(tokenId,tokenURIList[sellerId][tokenId]);  
    }
    function createSeller(uint256 sellerId) public{
        require(allSellers[sellerId].owner==address(0x0),"Seller Already exist");
         seller memory newSeller;
         newSeller.id = sellerId;
         newSeller.owner = msg.sender;
         newSeller.itemCounter = 0;

         allSellers[sellerId] = newSeller;
         totalSellers.push(sellerId);

    }
    function createNFT(string memory tokenURI,uint256 sellerId,string memory productId,address customer,uint256 expiry)public{
      //require(tokenURIList[sellerId][allSellers[sellerId].itemCounter].length==0,"");

      require(msg.sender== allSellers[sellerId].owner,"Must be owner");
      warrantyDetails memory newNFT;

      newNFT.creationTime = block.timestamp;
      newNFT.verifyHash = keccak256(abi.encode(customer,productId));
      newNFT.expiry =  newNFT.creationTime + expiry;

      uint256 Id = allSellers[sellerId].id*1000000+allSellers[sellerId].itemCounter;

      allSellers[sellerId].allNFTs.push(Id);
      sellerWarrantyDetails[sellerId][Id].tokenId = Id;
      sellerWarrantyDetails[sellerId][Id].verifyHash = keccak256(abi.encode(customer,productId));
      sellerWarrantyDetails[sellerId][Id]=newNFT;
      sellerWarrantyDetails[sellerId][Id].buyers.push(customer);
      sellerWarrantyDetails[sellerId][Id].buyersDate.push(newNFT.creationTime);
      allSellers[sellerId].itemCounter++;

      tokenURIList[sellerId][Id]=tokenURI;
        
    }
    function resell(address to,uint256 tokenId,uint256 sellerId)public{
       require( ownerOf(tokenId)==msg.sender,"Not Owner");
      sellerWarrantyDetails[sellerId][tokenId].buyers.push(to);
      sellerWarrantyDetails[sellerId][tokenId].buyersDate.push(block.timestamp);

            _transfer(msg.sender,to,tokenId);
    }

       function burn(uint256 tokenId)public{
        //require(msg.sender)
        _burn(tokenId);
    }


    //READ Functions

 
    function getSellerNFTs(uint256 sellerId) external view returns(uint256[]memory){
        return allSellers[sellerId].allNFTs;
    }

    function getSellers() external view returns(uint256[]memory){
        return totalSellers;
    }
    function getExpiry (uint256 sellerId,uint256 tokenId)external view returns (uint256 expiry){
        return sellerWarrantyDetails[sellerId][tokenId].expiry;
    }
      function getCreation (uint256 sellerId,uint256 tokenId)external view returns (uint256 expiry){
        return sellerWarrantyDetails[sellerId][tokenId].creationTime;
    }




}