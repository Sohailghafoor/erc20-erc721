import {ethers} from 'ethers'
import simple_token from "../contracts/MyNFTCollection.json";


const MintNFT = () => {
    const contractAddress = '0x1254eccf7ac6e050c8e734a506d28029d5a7efe7';

    async function callmintbuttun(){
        if(window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                contractAddress,
                simple_token.abi,
                signer
            );
            console.log('contract: ', contract);
            try {
            const respon = await contract.mint();
            console.log('respon:', respon);
            
            } catch (err) {
                console.log("error: ", err)
            }
        }
    //    setHidden((current) => !hidden);
    }
    return(
        <> 
        <div>Mint Here For NFT</div>
    <button className = "border-green" onClick = {callmintbuttun}> Click For Minting NFT</button>
        </>
    )
}
export default MintNFT;