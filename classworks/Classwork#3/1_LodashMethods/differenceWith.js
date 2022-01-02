const isEqual = (arrVal, othVal) => {
  for (key in arrVal) {
    if (!(othVal.hasOwnProperty(key) && othVal[key] === arrVal[key])) {
      return false;
    }
  }

  return true;
};

const differenceWith = (array, values, comparator) => {
  const res = [];

  for (let element of array) {
    for (let value of values) {
      if (!comparator(element, value)) {
        res.push(element);
      }
    }
  }

  return res;
};
// let objects = [
//   { x: 1, y: 2 },
//   { x: 2, y: 1 },
// ];
// console.log(differenceWith(objects, [{ x: 1, y: 2 }], isEqual));
