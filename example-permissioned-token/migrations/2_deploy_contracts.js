const MyKYCToken = require("MyKYCToken");
const ComplianceCoordinator = require("@abacusprotocol/protocol/artifacts/json/ComplianceCoordinator.json");

const ComplianceCoordinatorAddress =
  ComplianceCoordinator.networks["4"].address;
const KYCProviderId = "7"; // https://github.com/abacusprotocol/compliance-standards/blob/master/contracts/IdentityVerified.sol

module.exports = function(deployer) {
  deployer.deploy(MyKYCToken, ComplianceCoordinatorAddress, KYCProviderId);
};
