function calculateChaiIngredients(numberOfCups) {
    
    const water = 200 * numberOfCups;       
    const milk = 50 * numberOfCups;         
    const teaLeaves = 1 * numberOfCups;     
    const sugar = 2 * numberOfCups;          
  
    
    console.log(`To make ${numberOfCups} cup${numberOfCups > 1 ? 's' : ''} of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoon${teaLeaves > 1 ? 's' : ''}`);
    console.log(`Sugar (Sukari): ${sugar} teaspoon${sugar > 1 ? 's' : ''}`);
    console.log('\nEnjoy your Chai Bora!');
  }
  
  
  const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
  const cups = Number(input);
  
  if (Number.isNaN(cups) || cups <= 0) {
    console.log("Please enter a valid positive number of cups.");
  } else {
    calculateChaiIngredients(cups);
  }
  