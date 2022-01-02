const add_suffix = (suffix) => (str) => str + suffix;

const add_ly = add_suffix("ly");
console.log(add_ly("hopeless")); // "hopelessly"
console.log(add_ly("total")); // "totally"
const add_less = add_suffix("less");
console.log(add_less("fear")); // "fearless"
console.log(add_less("ruth")); // "ruthless"
