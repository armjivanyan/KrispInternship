const inclusiveArray = (start, end) => {
  if (start >= end) {
    return [start];
  }
  return [start, ...inclusiveArray(start + 1, end)];
};

console.log(inclusiveArray(10, 20));
