const Gpio = require('pigpio').Gpio;
//const db = require('./store');
//const motor = new Gpio(13, { mode: Gpio.OUTPUT });


// function on() {
//     motor.servoWrite(1500);

//     motor.servoWrite(2500);

//     db.store();
// }

// function off(){
//     motor.servoWrite(1500);
// }

function feed() {
    let time = process.hrtime();

    const motor = new Gpio(13, { mode: Gpio.OUTPUT });
    // Init the motor GPIO
    // motor.servoWrite(1500); <<< === REMOVE THIS LINE === >>>

    motor.servoWrite(2500);

    time = process.hrtime(time);
    console.log("pigpio1 " + ((time[0] + time[1] / 1E9) * 1000) + " ms"); // <<<=== Should be far less that 1 ms === >>>

    time = process.hrtime();
    setTimeout(function () {
        motor.servoWrite(1500);

        time = process.hrtime(time);
        console.log("pigpio2 " + ((time[0] + time[1] / 1E9) * 1000) + " ms"); // <<<=== Should be approximately 200 ms === >>>
    }, 200);



    
    // db.store();
    // time = process.hrtime(time);
    // console.log("store " + ((time[0] + time[1] / 1E9) * 1000) + " ms"); // <<<=== Should be far less that 1 ms === >>>
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



// module.exports.on = on;
// module.exports.off = off;
module.exports = feed;
