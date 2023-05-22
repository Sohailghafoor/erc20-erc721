/* eslint-disable no-undef */

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const Token = await ethers.getContractFactory("MyNFTCollection"); 
  const token = await Token.deploy();
  console.log("NFT Token address:", token.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });