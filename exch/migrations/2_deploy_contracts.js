var SuyashToken = artifacts.require("./SuyashToken.sol");
var Exchange = artifacts.require("./Exchange.sol");

module.exports = function(deployer) {
  deployer.deploy(SuyashToken);
  deployer.deploy(Exchange);
  
  
};
