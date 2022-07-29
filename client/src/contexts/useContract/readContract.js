 const getSellerNFTs=async(contract,address)=>{
    if (!contract) {
        return false;
      }
      const sellerId = await contract.methods.addressToSellerId(address).call();
      const res = await contract.methods.getSellerNFTs(sellerId).call();
      return await Promise.all(res.map(async(_id) => {
        const {expiry,status,creation } =
          await contract.methods.getSellerWarrantyDetails(sellerId,_id).call();
  
          return {
              expiry, status,creation
          }
      }));

   
}

const warrantyDetails = async(contract,address)=>{
    if(!contract){
        return false;
    }
    const tokens = await contract.methods.buyersCollection(address).call();
    //const articles = await contract.methods.getArticles().call();
    return await Promise.all(tokens.map(async(_id) => {
        let sellerId = Math.round (_id/1000000);
      const {expiry,status,creation } =
      
        await contract.methods.sellerWarrantyDetails(sellerId).call();

        return {
            expiry, status,creation
        }
    }));

}

const getTokenDetails = async(contract,tokenId)=>{
    if (!contract) {
        return false;
      }
    const res = await contract.methods.tokenURI(tokenId).call();
    return res;
}
export{
    getSellerNFTs,
    warrantyDetails,
    getTokenDetails
}