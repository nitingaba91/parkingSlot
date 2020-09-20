const fs = require('fs');
const parkingLot = require('./parkingLot')

fs.readFile('./carDetail.txt',function (err,input) {
    if(err || !input) {
        console.log('Please check input');
        process.exit();
    }
    let data = input.toString().split('\n');
    data.forEach(element => {
        let txt = element.split(' ');
        switch (txt[0]) {
            case ('create_parking_lot'):

                try {
                    const result = parkingLot.createParkingSlot(txt[1]);
                    console.log(result);
                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;
            case ('park'):
                try {
                    const result = parkingLot.carPark(txt[1].trim());
                    console.log(result);
                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;
            case ('status'):
                try {
                    const result = parkingLot.getSlotStatus();
                    console.log(result);
                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;
            
            default:
                console.log('Some Issue in Typing command. Please check the input');
        }
    });
    process.exit();
})