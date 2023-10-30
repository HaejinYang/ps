class Combination {
  #n;
  #r;
  #input;
  #output;

  constructor(n, r, arr) {
    this.#n = n;
    this.#r = r;
    this.#input = arr;
    this.#output = [];
  }

  calculate() {
    this.#output = [];

    this.#_calculate(-1, []);

    return this.#output;
  }
  #_calculate(start, temp) {
    if (temp.length === this.#r) {
      this.#output.push([...temp]);

      return;
    }

    for (let i = start + 1; i < this.#n; i++) {
      temp.push(this.#input[i]);
      this.#_calculate(i, temp);
      temp.pop();
    }
  }
}

module.exports = Combination;
