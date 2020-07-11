function add1(n1: number, n2: number, printResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (printResult) console.log(phrase + result);
  else return result;
}

const number1 = 5;
const number2 = 2.56;
const printRes = true;
const resultPhrase = 'Result is ';

add1(number1, number2, printRes, resultPhrase);
