'use strict'

class StringBuilder {
    constructor(value) {
        this._value = value
    } 

    get value() {
        return this._value
    }


    append(str) {
        this.str = str;
        this._value += this.str;
    } 

    prepend(str) {
        this._value = this.str + this.value;
    } 


    pad(str) {
        this.str = str;
        this._value = this.str + this.value + this.str;
    } 

};

const builder = new StringBuilder('.');
console.log(builder.value);

builder.append('^');
console.log(builder.value);

builder.prepend('^');
console.log(builder.value);

builder.pad('=');
console.log(builder.value);