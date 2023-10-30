class Permutation {
  #n;
  #r;
  #input;
  #output;
  #count;

  constructor(n, r, arr) {
    this.#n = n;
    this.#r = r;
    this.#input = [...arr];
    this.#output = [];
    this.#count = 0;
  }

  calculate() {
    this.#count = 0;
    this.#output = [];

    this.#_calculate(0);

    return this.#output;
  }

  count() {
    return this.#count;
  }

  #_calculate(depth) {
    if (depth === this.#r) {
      ++this.#count;
      this.#output.push([...this.#input]);

      return;
    }

    for (let i = depth; i < this.#n; i++) {
      [this.#input[i], this.#input[depth]] = [
        this.#input[depth],
        this.#input[i],
      ];

      this.#_calculate(depth + 1);

      [this.#input[i], this.#input[depth]] = [
        this.#input[depth],
        this.#input[i],
      ];
    }
  }
}

module.exports = Permutation;
