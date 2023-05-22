import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () =>{
    const navigate = useNavigate();

    return(
        <div>
        <div>
        <button className="border-darkslategray" onClick={() => navigate("/mainpage")}>Main Page for Get Data of Account Using API</button>
        </div>
        <div>
        <button className="border-darkslategray" onClick={() => navigate("/wallet")}>Wallet is here</button>
        </div>
        <div>
        <button className="border-darkslategray" onClick={() => navigate("/interactions")}>Wallet interaction is here</button>
        </div>
        <div>
        <button className="border-darkslategray" onClick={() => navigate("/minttoken")}>Click for Minting Token Supply ERC20</button>
        </div>
        <div>
        <button className="border-darkslategray" onClick={() => navigate("/mintnft")}>Click for Minting NFT ERC721</button>
        </div>
        </div>
        );
}
export default Home;