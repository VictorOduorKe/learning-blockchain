const crypto=require("crypto");

function generateHash(data){
    return crypto
             .createHash("sha256")
             .update(data)
             .digest("hex")
}

const message="this is blockchain data";

const hash= generateHash(message);

console.log("Original Message: ",message);
console.log("SHA-256 hash: ", hash);
console.log("Hash length: ", hash.length);


// function that accepts any transaction string and returns its SHA-256 hash.

function generateTransactionHash(transaction){
    return crypto
    .createHash("sha256")
    .update(transaction)
    .digest("hex")
}

const transaction="This is the initial transaction";
 const hash1=generateTransactionHash(transaction);
console.log("Original Transaction: ",transaction);
console.log("SHA-256 hash: ",hash1);
console.log("SHA-256 length: ", hash1.length);