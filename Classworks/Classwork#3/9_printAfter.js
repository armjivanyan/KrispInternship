const printAfter = (func) => {
  console.log("hello world");
  func();
};

const print = () => console.log("Elon Musk");
printAfter(print);
