function convertToRoman(int) {
  var romanRef = {
    // https://en.wiktionary.org/wiki/Appendix:Latin_cardinal_numerals
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  return Object.keys(romanRef).reduce((acc, key) => {
    // loop through all roman numerals starting from the highest (M)
    // grab the number equivalent
    const val = romanRef[key];
    // determine the floored quotient of provided int divided by current roman-equivalent number
    // this represents how many times (if any) a particular roman numeral should be repeated
    const quantity = Math.floor(int / val);

    // reduce the provided int and concatenate roman numeral symbols
    int -= quantity * val;
    return acc + key.repeat(quantity);
  }, '');
}

module.exports = {
  convertToRoman
}