const Gpio = require('pigpio').Gpio;

function feed() {
    const motor = new Gpio(13, { mode: Gpio.OUTPUT });
    // Init the motor GPIO
    motor.servoWrite(1500);

    motor.servoWrite(2500);
    setTimeout(function () {
        motor.servoWrite(1500);
    }, 200);
}

// const button = new Gpio(14, {
//     mode: Gpio.INPUT,
//     pullUpDown: Gpio.PUD_UP,
//     alert: true
// });
//
// // Level must be stable for 10 ms before an alert event is emitted.
// button.glitchFilter(10000);
//

//
//
// console.log("motor.getServoPulseWidth() :", motor.getServoPulseWidth());
//
//
// button.on('alert', (level, tick) => {
//     if (level === 0) {
//         if (motor.getServoPulseWidth() === 1500) {
//             motor.servoWrite(2500)
//         } else {
//             motor.servoWrite(1500)
//
//         }
//     }
// });

// // setInterval(() => {
// //   console.log('2500');
// //   motor.servoWrite(2500);
// // }, 1000);

// // setInterval(() => {
// // console.log('2000');
// // motor.servoWrite(2000);
// // }, 1000);

// // setInterval(() => {
// // console.log('1500');
// // motor.servoWrite(1500);
// // }, 1000);

// // setInterval(() => {
// // console.log('1000');
// // motor.servoWrite(1000);
// // }, 1000);

// const Gpio = require('pigpio').Gpio;

// const motor = new Gpio(13, { mode: Gpio.OUTPUT });

// setTimeout(function () {
//     motor.servoWrite(1500);
//     console.log(motor.getServoPulseWidth());
// }, 5000);


// setTimeout(function () {
//     motor.servoWrite(2500);
//     console.log(motor.getServoPulseWidth());
// }, 5000);


// setTimeout(function () {
//     motor.servoWrite(1500);
//     console.log(motor.getServoPulseWidth());
// }, 5000);
// setTimeout(function () {
//     motor.servoWrite(2500);
//     console.log(motor.getServoPulseWidth());
// }, 3000);

// setTimeout(function () {
//     motor.servoWrite(1500);
//     console.log(motor.getServoPulseWidth());
// }, 3000);


// const Gpio = require('pigpio').Gpio;

// const motor = new Gpio(13, { mode: Gpio.OUTPUT });

// const button = new Gpio(14, {
//     mode: Gpio.INPUT,
//     pullUpDown: Gpio.PUD_UP,
//     alert: true
// });


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


// const Gpio = require('pigpio').Gpio;

// const button = new Gpio(14, {
//   mode: Gpio.INPUT,
//   pullUpDown: Gpio.PUD_UP,
//   alert: true
// });

// let count = 0;

// // Level must be stable for 10 ms before an alert event is emitted.
// button.glitchFilter(10000);

// button.on('alert', (level, tick) => {
//   if (level === 0) {
//     console.log(++count);
//   }
// });

module.exports = feed;
