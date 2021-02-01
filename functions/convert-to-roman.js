const convertToRoman = int => {
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

// initial approach included for interview discussion
// recursion on substring

// const romanRef = {
//   1: 'I',
//   5: 'V',
//   10: 'X',
//   50: 'L',
//   100: 'C',
//   500: 'D',
//   1000: 'M'
// };

// const convertToRoman = int => {
//   const parsed = parseInt(int) // parseInt here takes '03' (from say 103) to 3
//   const numbers = Object.keys(romanRef);
//   let nextHighest, nextLowest
//   numbers.some((num, index) => {
//     if (num >= parsed) {
//       nextHighest = num;
//       nextLowest = numbers[index - 1];
//       return true;
//     }
//   })
//   if (!nextHighest) { // over 1000
//     nextLowest = '1000'
//   }
//   // the equality operator is used here (rather than identity) because the nextHighest/nextLowest are strings from object.keys()
//   if (nextHighest == parsed) return romanRef[nextHighest]; // 1 is 1
//   const sub = `${parsed}`.substring('1');
//   return `${repeatQuantity(parsed, nextLowest, nextHighest)}${parseInt(sub) ? convertToRoman(sub) : ''}`; // sub might be 0 (e.g., 40)
// };

// const repeatQuantity = (int, low, high) => {
//   const one = low.includes('1')
//   const quantity = one
//     ? Math.floor(int / low) // 42/10 -> 4
//     : `${int}`[0] - low[0]; // 6-5
//   if (quantity < 4) { // 3
//     return one
//       ? romanRef[low].repeat(quantity) // III
//       : `${romanRef[low]}${romanRef[low.replace('5', '1')].repeat(quantity)}` // VII
//   } else { // 40 is a good example or 90
//     const countFromHigher = one
//       ? high[0] - `${int}`[0] // 50 - 40 gives us 1
//       : 10 - `${int}`[0] // 10 - 9 gives us 1
//     return one
//       ? `${romanRef[low].repeat(countFromHigher)}${romanRef[high]}` // IV
//       : `${romanRef[low.replace('5', '1')].repeat(countFromHigher)}${romanRef[high]}` // IX
//   }
// }