function calculateTransactionFees(gasUsed,gasPriceGwei){

    //validate input
    if(
        !Number.isSafeInteger(gasUsed)||
        !Number.isFinite(gasPriceGwei) ||
        gasUsed <= 0 ||
        gasPriceGwei <=0
){
    throw new Error("Gas values must be positive and valid")
}

//calculate fee in gwei
const feeInGwei = gasUsed * gasPriceGwei;

//convert Gwei into ETH
const feeInEth =feeInGwei/1e9;

return {
    gasUsed,
    gasPriceGwei,
    feeInGwei,
    feeInEth
}
}

// Example transaction
const transaction = calculateTransactionFees(
    51000,30
);

console.log("Transation Fee Details: ");
console.log(transaction)