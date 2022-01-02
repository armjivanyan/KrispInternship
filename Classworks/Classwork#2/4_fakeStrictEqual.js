const fakeStrictEqual = (a, b) => {
  if (typeof a != typeof b) {
    return false;
  }

  return a == b;
};
