import _ from 'underscore';

class LengthFilter {
  process(payload) {
    if(this.length === null) {
      return payload;
    }

    return payload.substring(0, this.length - 1);
  }

  constructor(length) {
    this.length = length;
  }

  static generate(_filters) {
    return new this(_.random(100, 250));
  }
}

export default LengthFilter;