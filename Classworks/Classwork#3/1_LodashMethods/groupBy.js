const groupBy = (collection, iteratee) => {
  let res = {};
  let key;

  for (let element of collection) {
    key = typeof iteratee === "string" ? element[iteratee] : iteratee(element);

    if (!res.hasOwnProperty(key) && res[key] === undefined) {
      res[key] = [];
    }
    res[key].push(element);
  }

  return res;
};
// console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
// console.log(groupBy(["one", "two", "three"], "length"));
