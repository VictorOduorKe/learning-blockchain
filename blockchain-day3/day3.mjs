import {Wallet, verifyMessage} from "ethers"

async function main(){
    // createing a temporary wallet
    const wallet=Wallet.createRandom();

    //message to authorize
    const message="I approve certificate #CERT-001";

    //signing message using private key
    const signature= await wallet.signMessage(message);

    // recover the signed ethereum address
    const recoverAddress=await verifyMessage(message,signature);

console.log("Wallet Address: ", wallet.address);
console.log("Original Message: ", message)
console.log("signature: ",signature);
console.log("Recovered Addres: ",recoverAddress);
console.log("Signature Valid: ",
    recoverAddress.toLowerCase()===wallet.address.toLowerCase()
);
}
main();