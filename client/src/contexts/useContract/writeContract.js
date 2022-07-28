
  const getCurrentSellerNFTs = async (contract,address) => {
    if (!contract) {
        return false;
      }
      const sellerId = await contract.methods.addressToSellerId(address).call();
    const res = await contract.methods.getSellerNFTs(sellerId).call();
    return res;
  };

  const ge