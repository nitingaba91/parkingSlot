let maxSlot = 0;
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

module.exports = {
  createParkingSlot
}
