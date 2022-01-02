function gather(str) {
  this.text = str;
  this.orders = [];

  this.add = function (str) {
    this.text += str;
    return this.add;
  };

  this.add.order = function (n) {
    this.orders.push(n);
    return this.add.order;
  }.bind(this);

  this.add.order.get = function () {
    const result = orders.map((n) => this.text[n]);
    return result.join("");
  }.bind(this);

  return this.add;
}

console.log(gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get());
