const magic = () => {
  magic.replace = (str, from, to) => {
    return str.replace(from, to);
  };

  magic.slice = (arr, start, end) => {
    return arr.slice(start, end);
  };

  magic.trim = (str) => {
    return str.trim();
  };

  magic.getLength = (str) => {
    return str.length;
  };
};

magic();
console.log(magic.replace("azerty", "a", "A"));
console.log(magic.slice([1, 2, 3, 4, 5], 2, 4));
console.log(magic.trim("    javascript is     awesome "));
console.log(magic.getLength("hello word"));
