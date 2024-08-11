const CarSymbol = Symbol('Car');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car object
  cloneCar() {
    const ClonedClass = this.constructor[CarSymbol] || this.constructor;
    return new ClonedClass();
  }

  // Static method to set the constructor reference in the symbol
  static get [CarSymbol]() {
    return this;
  }
}
