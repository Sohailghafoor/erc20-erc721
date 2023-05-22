require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const GOERLi_PRIVATE_KEY =
  "e806f6866b3b7f7fb45dc7f2c13bdbf552fcafb9811ac6fc186874dd05835595";

module.exports = {
    solidity: {
      compilers: [
        {
          version: "0.5.7"
        },
        {
          version: "0.8.1"
        },
        {
          version: "0.6.12"
        }
      ]
      },
    networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/78080d597bf34f37ab20f88b1a307c5f`,
      accounts: [`0x${GOERLi_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: "8Y4WQPEVGC8PJDWN7SNDGBS9S3TZ3UCXIG",
  },
};