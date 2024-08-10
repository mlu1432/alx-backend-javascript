export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a String');
    }
    if (typeof code !== 'string') {
      throw new TypeError('code must be a String');
    }
    this._name = name;
    this._code = code;
  }

  // Custom toString method to return the airport code
  toString() {
    return `[object ${this._code}]`;
  }
}
