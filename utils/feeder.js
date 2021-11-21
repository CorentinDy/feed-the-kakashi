const Gpio = require('pigpio').Gpio;

function feed() {
    const motor = new Gpio(13, { mode: Gpio.OUTPUT });
    motor.servoWrite(2500);
    setTimeout(function () {
        motor.servoWrite(1500);
    }, 200);
}

function purge() {
    const motor = new Gpio(13, { mode: Gpio.OUTPUT });
    motor.servoWrite(2500);
    setTimeout(function () {
        motor.servoWrite(1500);
    }, 10000);
}

module.exports = {
    feed,
    purge
};