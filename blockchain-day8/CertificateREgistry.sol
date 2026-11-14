
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract CertificateRegistry {

    // Stores registered certificate hashes
    mapping(bytes32 => bool) public certificates;

    // Register a certificate
    function issueCertificate(bytes32 certificateHash) external {

        require(
            !certificates[certificateHash],
            "Certificate already exists"
        );

        certificates[certificateHash] = true;
    }

    // Verify a certificate
    function verifyCertificate(
        bytes32 certificateHash
    ) external view returns (bool) {

        return certificates[certificateHash];
    }
}
