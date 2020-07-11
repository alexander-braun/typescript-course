let userInput: unknown;
let userName1: string;

userInput = 4;
userInput = 'String';

//Not possible
//userName = userInput;

//userInput now definitly type string so assignable to userName (type string)
if (typeof userInput === 'string') {
  userName1 = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError('An error occured', 500);
console.log(result); //  -> Never returns anything because throws error before
