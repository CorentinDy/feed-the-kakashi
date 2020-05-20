const Gpio = require('pigpio').Gpio;
const db = require('./store');


function feed() {
    const motor = new Gpio(13, { mode: Gpio.OUTPUT });
    // Init the motor GPIO
    motor.servoWrite(1500);

    motor.servoWrite(2500);
    setTimeout(function () {
        motor.servoWrite(1500);
    }, 200);
    db.store();
}


// // Level must be stable for 10 ms before an alert event is emitted.
// button.glitchFilter(10000);


// button.on('alert', (level, tick) => {
//       if (motor.getServoPulseWidth === 2500) {
//         motor.servoWrite(1500);
//         console.log(1500);
//         console.log(motor.getServoPulseWidth());

//       }else{
//         motor.servoWrite(2500);
//         console.log(2500);
//         console.log(motor.getServoPulseWidth());


//       }


// });



module.exports = feed;
