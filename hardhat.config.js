require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "<ALCHEMY_API_KEY>";

// Replace this private key with your Kovan account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const KOVAN_PRIVATE_KEY = "<KOVAN_PRIVATE_KEY>";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      gas: 12e6,
      blockGasLimit: 12e6,
      allowUnlimitedContractSize: false,
      loggingEnabled: true,
      forking: {
        url: `https://eth-kovan.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
        accounts: [`0x${KOVAN_PRIVATE_KEY}`],
        blockNumber: 10617743,
      }
    }
  },
};


