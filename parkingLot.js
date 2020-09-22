let availableCars = [];
let availableSlots = [];


let createParkingSlot =  (no) => {
  maxSize = parseInt(no);
  if(no) {
    for (let i = 1; i <= maxSize; i++) {
      availableSlots.push(i);
    }
    console.log(`Created parking lot with ${availableSlots.length} slots`);
    return `Created parking lot with ${availableSlots.length} slots`;
  } else {
    console.log(`Created parking lot with ${availableSlots.length} slots`);
    return `Please pass slot num`;
  }
}

let carPark = async (carNo) => {
  if (maxSize === 0) {
    console.log(`No Parking Slot`);
  } else if (maxSize === availableCars.length) {
    console.log(`Sorry, parking lot is full`);
    return `Sorry, parking lot is full`;
  } else {
    let slot = availableSlots[0];
    availableCars.push({
      'slot': slot,
      'registratonNo': carNo
    });
    availableSlots.shift();
    console.log(`Allocated slot number: ${slot}`);
    return `Allocated slot number: ${slot}`;
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

let leaveParking = (registratonNo, hour) => {
  if (maxSize === 0) {
    console.log("No Parking Slot");
  } else if(!registratonNo || !hour) {
    console.log("Please enter correct input i.e registration number and hour");
    return 'Please enter correct input i.e registration number and hour';
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
      return `Registration number ${registratonNo} not found`;
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
    return `Registration number ${slot.registratonNo} with slot number ${slot.slot} is free with charge ${slot.charges}`;
  } else {
    console.log(`Registration number ${registratonNo} not found`);
    return `Registration number ${registratonNo} not found`;
  }
}

module.exports = {
  createParkingSlot,
  carPark,
  getSlotStatus,
  leaveParking
}
