const airplane = {
  isFlying: false,

  init: function (name) {
    this.name = name;
  },

  takeOff: function () {
    this.isFlying = true;
  },

  land: function () {
    this.isFlying = false;
  },

  getName: function () {
    return this.name;
  },
};

// airplane.init("magic");
// console.log(airplane.isFlying);
// airplane.takeOff();
// console.log(airplane.isFlying);
// airplane.land();
// console.log(airplane.isFlying);
