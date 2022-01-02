const compose =
  (...fns) =>
  (data) =>
    fns.reduceRight((acc, fn) => fn(acc), data);

const calls = (fn) => (typeof fn === "function" ? 1 + calls(fn()) : 0);
const sortByCalls = (arr) => arr.sort((a, b) => calls(a) - calls(b));
const getNames = (arr) => arr.map((fn) => fn.name || fn);

const f1 = () => "hello";
const f2 = () => () => "hellooooo";
const f3 = () => () => () => "helloooooooooo";

const sortFunctionsByCalls = compose(getNames, sortByCalls);
console.log(sortFunctionsByCalls([f2, f1, f3]));
