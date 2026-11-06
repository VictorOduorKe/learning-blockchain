// Simplified Proof of Stake simulation

const validators = [
    { name: "Validator A", stake: 32, agrees: true },
    { name: "Validator B", stake: 32, agrees: true },
    { name: "Validator C", stake: 16, agrees: true },
    { name: "Validator D", stake: 16, agrees: false },
    { name: "Validator E", stake: 4, agrees: false }
];

// Calculate total participating stake
const totalStake = validators.reduce(
    (total, validator) => total + validator.stake,
    0
);

// Calculate stake supporting the checkpoint
const supportingStake = validators
    .filter(validator => validator.agrees)
    .reduce(
        (total, validator) => total + validator.stake,
        0
    );

// Calculate support percentage
const percentage = (supportingStake / totalStake) * 100;

// Check the two-thirds threshold
const consensusReached = supportingStake * 3 >= totalStake * 2;
 
//validators supporting the checkpoint
const supportingValidators=validators
  .filter(validator=>validator.agrees);

  const validatorsSupportingNames=supportingValidators.map(
    validator=> validator.name
  );


  // checking what happens if 66.7% of the stake is supporting the checkpoint
const thresholdStake = (totalStake * 2) / 3;
const thresholdReached = supportingStake >= thresholdStake;
 


console.log("Total stake:", totalStake);
console.log("Supporting stake:", supportingStake);
console.log("Support percentage:", percentage.toFixed(2) + "%");
console.log("Supporting validators:", validatorsSupportingNames.join(", "));

console.log("Threshold stake for consensus:", thresholdStake);
console.log("Threshold reached:", thresholdReached);

if (consensusReached) {
    console.log("Consensus threshold reached!");
    console.log("Checkpoint can be finalized in this simplified model.");
} else {
    console.log("Consensus threshold not reached.");
}