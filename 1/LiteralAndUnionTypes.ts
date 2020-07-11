import { type } from 'os';

function combine(
  input1: number | string, //Union type
  input2: number | string, //Union type
  resultConversion: 'as-number' | 'as-text' //Literal type
) {
  let result: number | string;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  //   if (resultConversion === 'as-number') {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
  return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
