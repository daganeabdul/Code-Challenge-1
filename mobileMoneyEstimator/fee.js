function estimateTransactionFee(amountToSend) {
    const feePercentage = 0.015; // 1.5%
    let fee = amountToSend * feePercentage;
  
    // Apply fee limits
    if (fee < 10) {
      fee = 10;
    } else if (fee > 70) {
      fee = 70;
    }
  
    const totalDebited = amountToSend + fee;
  
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);
    console.log("\nSend Money Securely!");
  }
  
  
  const input = prompt("Unatuma Ngapi? (KES):");
  const amount = Number(input);
  
  if (Number.isNaN(amount) || amount <= 0) {
    console.log("Tafadhali ingiza kiasi halali (positive number).");
  } else {
    estimateTransactionFee(amount);
  }
  