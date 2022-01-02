function Circle(r) {
  const pi = Math.PI;

  this.getArea = () => pi * Math.pow(r, 2);

  this.getPerimeter = () => 2 * pi * r;
}

const circle1 = new Circle(11);
console.log(circle1.getArea());

const circle2 = new Circle(4.44);
console.log(circle2.getPerimeter());
