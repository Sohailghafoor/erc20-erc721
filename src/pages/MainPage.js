import React from "react";
import axios from 'axios';


const MainPage = ({ accounts, setAccounts }) =>{
    
const collectionAccountData = async()=>{
  
    let { data: nfts } = await axios(
      "https://api.niftyapi.xyz/collection/nfts/0xc3f733ca98e0dad0386979eb96fb1722a1a05e69"
    );
    console.log(nfts);
    }
    
    async function metaDataCollection(){
      let { data: nfts } = await axios(
        "https://api.niftyapi.xyz/collection/attributes/0xc3f733ca98e0dad0386979eb96fb1722a1a05e69"
      );
      console.log(nfts);
    }
    async function nftOwnedData(){
      let { data: nfts } = await axios(
        "https://api.niftyapi.xyz/address/0xc3f733ca98e0dad0386979eb96fb1722a1a05e69"
      );
      console.log(nfts);
    }
    async function nftTradingAccountData(){
    
    let { data: nfts } = await axios(
      "https://api.niftyapi.xyz/address/0xc3f733ca98e0dad0386979eb96fb1722a1a05e69/trading"
    )
    
    console.log(nfts);
      
    }
    return(
    <div className = "Home-Size">
        <div>
   <button className="border-blue" onClick={collectionAccountData}> Get All NFTs associated in a collection</button>
   </div>
   <div>
    <button className = "border-yellow" onClick = {metaDataCollection}> Get All NFTs associated in a collection metaData(attributes) </button>
   </div>
   <div>
    <button className = "border-green" onClick = {nftOwnedData}> Get All NFT owned by an account </button>
   </div>
   <div>
    <button className = "border-darkslategray" onClick = {nftTradingAccountData}> Get All NFT Ranking </button>
   </div>
    </div>
    )

}
export default MainPage;