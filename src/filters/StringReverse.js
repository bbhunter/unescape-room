class StringReverse {
  process(payload) {
    return payload.split("").reverse().join("");
  }

  static generate(_filters) {
    return new this();
  }
}

export default StringReverse;
