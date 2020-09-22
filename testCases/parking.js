
let assert = require('chai').assert;
let parkingLot = require('../parkingLot');

describe('Car park cases', async function () {
  it('park car and alot slot no 1', async function () {
    var preResult = 'Allocated slot number: 1';
    var result = await parkingLot.carPark('KA-01-HH-1234');
    assert.equal(preResult, result);
  });
  it('Park car and alot slot no 2', async function () {
    var preResult = 'Allocated slot number: 2';
    var result = await parkingLot.carPark('KA-01-HH-9995');
    assert.equal(preResult, result);

  });
  it('Park car and alot slot no 3', async function () {
    var preResult = 'Allocated slot number: 3';
    var result = await parkingLot.carPark('KA-01-HH-9996');
    assert.equal(preResult, result);

  });
  it('Park car and alot slot no 4', async function () {
    var preResult = 'Allocated slot number: 4';
    var result = await parkingLot.carPark('KA-01-HH-9997');
    assert.equal(preResult, result);

  });
  it('Park car and alot slot no 5', async function () {
    var preResult = 'Allocated slot number: 5';
    var result = await parkingLot.carPark('KA-01-HH-9998');
    assert.equal(preResult, result);

  });
  it('Park car and alot slot no 6', async function () {
    var preResult = 'Allocated slot number: 6';
    var result = await parkingLot.carPark('KA-01-HH-9999');
    assert.equal(preResult, result);
  });
});

