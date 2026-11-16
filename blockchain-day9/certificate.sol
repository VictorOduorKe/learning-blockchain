
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Certificate {

    // State variables
    string public ownerName;
    uint256 public certificateId;
    bool public isValid;

    // Constructor runs when the contract is deployed
    constructor(
        string memory _ownerName,
        uint256 _certificateId
    ) {
        ownerName = _ownerName;
        certificateId = _certificateId;
        isValid = true;
    }

    // Update certificate validity
    function revokeCertificate() public {
        isValid = false;
    }
}
