require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// Go to https://infura.io/ and create a new project
// Replace this with your Infura project ID
const INFURA_PROJECT_ID = "";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const ROPSTEN_PRIVATE_KEY = "";

const ETHERSCAN_API = "";

module.exports = {
  solidity: "0.6.5",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API
  }
};

// npx hardhat compile

// npx hardhat run scripts/deploy.js --network ropsten

// npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
// npx hardhat verify --network ropsten 0x0576fe2B8feDd326484e01dD2C5dbD750ab6A3D3

// 0x0576fe2B8feDd326484e01dD2C5dbD750ab6A3D3
