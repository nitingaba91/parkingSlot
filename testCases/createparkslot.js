let assert = require('chai').assert;
let parkingLot = require('../parkingLot');

describe('create_parking_lot 6', async function () {
  it('should create 6 parking slots', async function () {
    var preResult = 'Created parking lot with 6 slots';
    var result = await parkingLot.createParkingSlot(6);
    assert.equal(preResult, result);
  });

  it('Should give error', async function () {
    var preResult = 'Please pass slot num';
    var result = await parkingLot.createParkingSlot();
    assert.equal(preResult, result);
  });
});
  

  
