function add(n1: number, n2: number) {
  return n1 + n2;
}

//Returns nothing = void
function printResult(num: number): void {
  console.log('Result: ' + num);
}

//With callback function
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number; // Accepts any function that takes to parameters both of wich are numbers and returns a number

combineValues = add;
//combineValues = printResult   -> not working

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
