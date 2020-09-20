'use strict'

class Car {
    static getSpecs(car) {
        console.log(car);
    }

    constructor({ maxSpeed, speed, isOn, distance, price }) {
        this.maxSpeed = maxSpeed;
        this.speed = speed;
        this.isOn = isOn;
        this.distance = distance;
        this._price = price;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }

    accelerate(value) {
        this.value = value;
        if (this.speed <= this.maxSpeed || this.isOn) {
            this.speed = this.value
        }
    }

    decelerate(value) {
        this.value = value;
        if (this.speed >= 0 || this.isOn) {
            this.speed -= this.value
        }
    }

    drive(hours) {
        this.hours = hours;
        if (this.isOn) {
            this.distance = this.hours * this.speed
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price); 
mustang.price = 4000;
console.log(mustang.price);
