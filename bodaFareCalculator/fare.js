function calculateBodaFare(distanceInKm) {
    const baseFare = 50;         
    const chargePerKm = 15;      
    const distanceFare = distanceInKm * chargePerKm;
    const totalFare = baseFare + distanceFare;
  
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceFare}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Panda Pikipiki!");
  }
  
  // Prompt the user
  const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
  const km = Number(input);
  
  if (Number.isNaN(km) || km <= 0) {
    console.log("Tafadhali ingiza kilomita halali (positive number).");
  } else {
    calculateBodaFare(km);
  }
  