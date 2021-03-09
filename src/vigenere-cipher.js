const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type === undefined ? true : type;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    this.square = [];
    for (let i = 0; i < this.alphabet.length; i++) {
      this.square[i] = [].concat(this.alphabet);
      this.alphabet.push(this.alphabet.shift());
    }
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error;
    }

    let vkey = key.toUpperCase().split("");
    let vmessage = message.toUpperCase().split("");

    for (let i = 0; i < vmessage.length; i++) {
      if (vkey.length < vmessage.length) {
        vkey = vkey.concat(vkey);
      }
    }

    for (let i = 0; i < vmessage.length; i++) {
      if (this.alphabet.indexOf(vmessage[i]) == -1) {
        vkey.splice(i, 0, vmessage[i]);
      }
    }
    vkey.length = vmessage.length;

    vmessage.forEach((element, index) => {
      if (this.square[0].indexOf(element) == -1) {
        vmessage[index] = vmessage[index];
      } else {
        let col = this.square[0].indexOf(element);
        let row = this.square[0].indexOf(vkey[index]);
        vmessage[index] = this.square[col][row];
      }
    });
    return this.type ? vmessage.join("") : vmessage.reverse().join("");
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error;
    }

    let vkey = key.toUpperCase().split("");
    let vmessage = message.toUpperCase().split("");

    if (vkey.length < vmessage.length) {
      vkey = vkey.concat(vkey);
    }
    for (let i = 0; i < vmessage.length; i++) {
      if (this.alphabet.indexOf(vmessage[i]) == -1) {
        vkey.splice(i, 0, vmessage[i]);
      }
    }

    vkey.length = vmessage.length;

    vmessage.forEach((element, index) => {
      if (this.square[0].indexOf(element) == -1) {
        vmessage[index] = vmessage[index];
      } else {
        let row = this.square[0].indexOf(vkey[index]);
        let col = this.square[row].indexOf(element);
        vmessage[index] = this.square[0][col];
      }
    });
    return this.type ? vmessage.join("") : vmessage.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
