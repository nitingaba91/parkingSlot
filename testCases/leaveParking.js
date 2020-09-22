
let assert = require('chai').assert;
let parkingLot = require('../parkingLot');

describe('leave parking cases', async function () {
  it('Leave car with charges', async function () {
    var preResult = 'Registration number KA-01-HH-9998 with slot number 5 is free with charge 30';
    var result = await parkingLot.leaveParking('KA-01-HH-9998','4');
    assert.equal(preResult, result);
  });
  it('Leave car without sending hour', async function () {
    var preResult = 'Please enter correct input i.e registration number and hour';
    var result = await parkingLot.leaveParking('KA-01-HH-9998');
    assert.equal(preResult, result);
  });
  it('Car not found case', async function () {
    var preResult = 'Registration number KA-01-HH-0000 not found';
    var result = await parkingLot.leaveParking('KA-01-HH-0000', '4');
    assert.equal(preResult, result);
  });
});

