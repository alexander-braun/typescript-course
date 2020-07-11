//Intersection Types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add1(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Date: ' + emp.startDate);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Manu', startDate: new Date() });

class Car {
  drive() {
    console.log('Driving a car... ');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading Cargo...' + amount);
  }
}

//Type Guards
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //Works:
  if ('loadCargo' in vehicle) {
    vehicle.loadCargo(10);
  }
  //Better:
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

//Descriminated union
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  if (animal.type === 'bird') {
    console.log('Moving with speed: ' + animal.flyingSpeed);
  } else if (animal.type === 'horse') {
    console.log('Moving with speed: ' + animal.runningSpeed);
  }
}

moveAnimal({ type: 'bird', flyingSpeed: 1000 });
moveAnimal({ type: 'horse', runningSpeed: 10 });

//Type Casting
//V1:    const inputEl = <HTMLInputElement>document.querySelector('#user-input');
//V2:
const inputEl = document.querySelector('#user-input') as HTMLInputElement;
inputEl.value = 'Hii there';

//Index Types
interface ErrorContainer {
  [prop: string]: string; // Every prop that can be interpreted as a string (number, string) must have a value that is type string
}

const errorBag: ErrorContainer = {
  email: 'abc@def.gh',
  username: 'Ijklmn',
};

//Function Overloads
function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result2 = add2('Max', 'Schwarz');
const result3 = add2(1, 2);
console.log(result2, result3);

//Optional Chaining
const fetchUserData = {
  id: 'u1',
  name: 'max',
  job: { title: 'CEA', description: 'My own company' },
};

//If we fetch the data from an API we maybe dont know if there is this job property
console.log(fetchUserData?.job?.title); //Helps to look up if there is a property on an object

//Nullish Coalescing
// Only fur 'null' && 'undefined'
const userInput = null;
const storedData = userInput ?? 'DEFAULT VALUE';

console.log(storedData);
