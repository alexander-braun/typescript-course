//Array type
const names: Array<string> = ['Max', 'Manuel']; // Same as string[]

//Promise Type
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

//Own generic type
//<T, U> tells typescript that parameters are of different types.
//Therefore we are getting different typed data
//MergedOBJ is the intersecting data
//Research further, explanation bad
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedOBJ = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedOBJ.name);

// Method to test if the provided element in fact has a length value
interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('hi there'));
console.log(countAndDescribe(['hi there', 'element2']));
//console.log(countAndDescribe(4));     -> has no length property so is not possible

//Method to test if U is a key of object T
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}
console.log(extractAndConvert({ name: 'Heinrich' }, 'name'));

//Generic Classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Dietrich');
textStorage.removeItem('Dietrich');
textStorage.getItems();
console.log(textStorage);

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
numberStorage.getItems();
console.log(numberStorage);

//Generic utility types
//Partial

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; //Initially will not be of the right type but in the end has the right structure
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal; //courseGoal still type Partial and has to be converted to CourseGoal interface with typecasting
}

//Readonly

const names1: Readonly<string[]> = ['Max', 'Sports'];
//Not possible:
//names1.push('Manu');
//names1.pop();
