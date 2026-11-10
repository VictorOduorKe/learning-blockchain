
// Simulated smart contract storage
const certificateContract = {
    certificates: {
        CERT001: {
            owner: "Alice",
            course: "Blockchain Development"
        }
    }
};

// Simulated execution client
function executionClient(request) {
    console.log("Execution client received:", request.method);

    if (request.method === "getCertificate") {
        return certificateContract.certificates[
            request.params.certificateId
        ] || null;
    }

    return "Unsupported method";
}

// Simulated React frontend request
function frontendRequest(certificateId) {
    const request = {
        method: "getCertificate",
        params: {
            certificateId: certificateId
        }
    };

    return executionClient(request);
}

// Test the application
const result = frontendRequest("CERT001");

console.log("\nCertificate information:");
console.log(result);
