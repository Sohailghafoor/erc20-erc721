import {ethers} from 'ethers'
import simple_token from "../contracts/MyToken.json";


const MintToken = () => {

    const contractAddress = '0xBE7a937ADdafa3D818C4101890f50ef6db4C7D30';

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
      //  setHidden((current) => !hidden);
        }
    return(
        <> 
    <div>Mint Token Here</div>        
    <button className = "border-green" onClick = {callmintbuttun}> Click For Minting Token Supply </button>
        </>
    )
}
export default MintToken;