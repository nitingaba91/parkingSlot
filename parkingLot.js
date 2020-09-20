let maxSlot = 0;
let availableCars = [];
let availableSlots = [];


let createParkingSlot =  (no) => {
  try {
    maxSize = parseInt(no);
  } catch (e) {
    return "Please Enter valid num";
  }

  for (let i = 1; i <= maxSize; i++) {
    availableSlots.push(i);
  }
  return `Created parking lot with ${availableSlots.length} slots`;
}

let carPark = async (carNo) => {
  if (maxSize === 0) {
    return `No Parking Slot`;
  } else if (maxSize === availableCars.length) {
    return `Sorry, parking lot is full`;
  } else {
    let slot = availableSlots[0];
    availableCars.push({
      'slot': slot,
      'registratonNo': carNo
    });
    availableSlots.shift();
    return `Allocated slot number: ${slot}`
  }
}
let getSlotStatus = () => {
  if (maxSize === 0) {
    return "No parking Slot created";
  } else if (availableCars.length > 0) {
    console.log("Slot No.\tRegistration No.");
    availableCars.forEach(function (car) {
      console.log(car.slot + "\t         " + car.registratonNo);
    });

  } else {
    return `Parking lot is empty`
  }

}

module.exports = {
  createParkingSlot,
  carPark,
  getSlotStatus
}
