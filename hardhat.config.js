require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');

require('dotenv').config();

const { ALCHEMY_API_KEY, KOVAN_PRIVATE_KEY } = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

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



