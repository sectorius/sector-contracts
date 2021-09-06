const SECICO = artifacts.require("SECICO");
const Sector = artifacts.require("Sector");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(Sector,accounts[1])
  .then(() => deployer.deploy(SECICO,Sector.address,accounts[1],accounts[2]));
};
