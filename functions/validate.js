const { builtinModules } = require("module");

const isPositiveInt = int => {
  // a highly performant integer check using bitwise operations https://stackoverflow.com/a/14794066
  if (isNaN(int)) return false;
  const x = parseFloat(int);
  if ((x | 0) !== x) {
    // With bitwise operators, "The result is a signed 32 bit integer."
    // invokes a floor - i.e., decimal is removed in bitwise OR
    // https://262.ecma-international.org/5.1/#sec-11.10
    return false;
  }
  return Math.sign(x) > 0 // positive int only
}

module.exports = {
  isPositiveInt,
};