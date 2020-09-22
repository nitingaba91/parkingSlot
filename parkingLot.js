let maxSlot = 0;
let availableCars = [];
let availableSlots = [];


let createParkingSlot =  (no) => {
  try {
    maxSize = parseInt(no);
  } catch (e) {
    console.log("Please Enter valid num");
  }

  for (let i = 1; i <= maxSize; i++) {
    availableSlots.push(i);
  }
  console.log(`Created parking lot with ${availableSlots.length} slots`);
}

let carPark = async (carNo) => {
  if (maxSize === 0) {
    console.log(`No Parking Slot`);
  } else if (maxSize === availableCars.length) {
    console.log(`Sorry, parking lot is full`);
  } else {
    let slot = availableSlots[0];
    availableCars.push({
      'slot': slot,
      'registratonNo': carNo
    });
    availableSlots.shift();
    console.log(`Allocated slot number: ${slot}`);
  }
}
let getSlotStatus = () => {
  if (maxSize === 0) {
    console.log("No parking Slot created");
  } else if (availableCars.length > 0) {
    
    sortArray(availableCars, 'slot');

    console.log("Slot No.\tRegistration No.");

    availableCars.forEach(function (car) {
      console.log(car.slot + "\t         " + car.registratonNo);
    });

  } else {
    console.log('Parking lot is empty');
  }

}

let sortArray = (array, key) => {
  array.sort((a, b) => {
    return a[key] - b[key];
  });
}

let leaveCar = (registratonNo, hour) => {
  if(!registratonNo || !hour) {
    console.log("Please enter correct input i.e registration number and hour");
    return;
  }
  if (maxSize === 0) {
    console.log("No Parking Slot");
  } else if (availableCars.length > 0) {
    let slot = {};
    availableCars.forEach(function (row, index) {
      if (row.registratonNo === registratonNo) {
        slot = row;
        slot.carIndex = index;
      }
    });
    if (!slot.registratonNo) {
      console.log(`Registration number ${registratonNo} not found`);
      return;
    }
    availableCars.splice(slot.carIndex, 1);
    availableSlots.push(slot.slot);
    availableSlots.sort();
    if(Math.ceil(hour) <= 2) {
      slot.charges = 10;
    } else {
      slot.charges = 10 + (10 * (Math.ceil(hour) - 2));
    }
    console.log(`Registration number ${slot.registratonNo} with slot number ${slot.slot} is free with charge ${slot.charges}`);
  } else {
    console.log(`Registration number ${registratonNo} not found`);
  }
}

module.exports = {
  createParkingSlot,
  carPark,
  getSlotStatus,
  leaveCar
}
