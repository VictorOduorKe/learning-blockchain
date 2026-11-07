const accounts = {
    Alice:{
      balance:100,
      nonce:0
    },
    Bob:{
        balance:50,
        nonce:0
    }
};

/*function validateTransaction(transaction){
    const {from, to, amount}= transaction;

    //check if amount is positive
   if(amount<=0){
        return "Invalid Amount";
    }
 
    //check sender
     if(!(from in accounts)){
        return "Invalid Sender";
         }

    //check recipient
    if(!(to in accounts)){
        return "Invalid Recipient";
    }

    // check available amount
    if(accounts[from] < amount){
        return "Insufficient Balance";
    }

    return "Transaction Valid";
}*/

/*const transaction={
    from:"Alice",
    to: "Bob",
    amount:0
};*/



/*console.log(validateTransaction(transaction));*/

/*function processTransaction(transaction){

    const result=validateTransaction(transaction);

    if(result !=="Transaction Valid"){
        console.log(result)
        return;
    }

    accounts[transaction.from] -= transaction.amount;
    accounts[transaction.to] += transaction.amount;

    console.log("Transaction successfully proceesed");
    console.log("Updated Balances:", accounts);
}*/

/*processTransaction(transaction);*/

function processTransaction(transaction){
    const{from,to,amount,nonce}=transaction;

    //check whether sender exists
    if(!accounts[from]){
        console.log("Transaction Rejected: Sender doe not exist");
        return;
    }

    //check whether the recipient exists;
    if(!accounts[to]){
        console.log("Transaction Rejected: Recipient does not exist");
        return;
    }

    // reject zero or negative amounts
    if(amount<=0){
        console.log("Transaction Rejected: Invalid Amount");
        return;
    }

    //check transaction nonce
    if(nonce !== accounts[from].nonce){
        console.log(`Transaction Rejected: Expected nonce ${accounts[from].nonce} received ${nonce}`);
        return;
    }

    //check senders balance
    if(accounts[from].balance < amount){
        console.log("Tnasaction rejected: Insufficient balance");
        return;
        
    }

    //process transaction
    accounts[from].balance -= amount;
    accounts[to].balance +=amount;

    //increment sender's nonce after successfull transaction

    accounts[from].nonce++;
     console.log(`
        Transaction Successfull:\n ${from} sent ${amount } to ${to} and the balances are updated as follows:\n
        ${from}: ${accounts[from].balance}
        ${to}: ${accounts[to].balance}
        `);
}

//Trnasaction 1: valid transaction

processTransaction({
    from:"Alice",
    to:"Bob",
    amount:20,
    nonce:0
});

// Transaction 2 :Invalid nonce

processTransaction({
    from:"Alice",
    to:"Bob",
    amount:10,
    nonce:0
})

//Transactio 3: Zero amount trasaction
processTransaction({
    from:"Alice",
    to:"Bob",
    amount:0,
    nonce:1
})

//Transaction 4: Negative amount
processTransaction({
    from:"Alice",
    to:"Bob",
    amount:-5,
    nonce:1
})

// Transaction 5: Another valid transaction
processTransaction({
    from: "Alice",
    to: "Bob",
    amount: 10,
    nonce: 1
});

console.log("\nFinal account balances:");
console.log(accounts);