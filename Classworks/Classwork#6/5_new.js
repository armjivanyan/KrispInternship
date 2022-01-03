function myNew(fn, ...args) {
  let obj = Object.create(fn.prototype);
  const result = fn.call(obj, [...args]);
  if (
    (typeof result !== "object" && typeof result !== "function") ||
    result === null
  ) {
    return result;
  }
  return obj;
}

// let obj = myNew(Number, 20);
// console.log(obj);
// console.log(obj.__proto__ === Number.prototype);

// const obj1 = new Number(20);
// console.log(obj1);
// console.log(obj1.__proto__ === Number.prototype);

// 1. create new obj;
// 2. obj.__proto__ = fn.prototype;
// 3. fn this -> obj;
// 4. return obj unless fn doesn't return ref type;
