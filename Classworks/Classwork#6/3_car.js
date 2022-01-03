function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;

  this.fill = function (gallons) {
    this.tank += gallons;
    return this.tank;
  };

  this.drive = function (distance) {
    const maxDistance = this.tank * this.milesPerGallon;

    if (distance > maxDistance) {
      this.tank = 0;
      this.odometer += maxDistance;
      return `I ran out of fuel at ${this.odometer} miles!`;
    }

    this.tank -= distance / this.milesPerGallon;
    this.odometer += distance;
    return this.odometer;
  };
}

const car = new Car("Toyota", 5);

// console.log(car.fill(12));
// console.log(car.drive(3));
// console.log(car.drive(7));
// console.log(car.drive(100));
