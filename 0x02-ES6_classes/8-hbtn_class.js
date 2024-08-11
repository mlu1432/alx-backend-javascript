export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a Number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('location must be a String');
    }
    this._size = size;
    this._location = location;
  }

  // Method to cast the class to a number
  valueOf() {
    return this._size;
  }

  // Method to cast the class to a string
  toString() {
    return this._location;
  }
}
