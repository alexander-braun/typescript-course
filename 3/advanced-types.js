"use strict";
var _a;
var e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
};
function add1(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving a car... ');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading Cargo...' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
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
function moveAnimal(animal) {
    if (animal.type === 'bird') {
        console.log('Moving with speed: ' + animal.flyingSpeed);
    }
    else if (animal.type === 'horse') {
        console.log('Moving with speed: ' + animal.runningSpeed);
    }
}
moveAnimal({ type: 'bird', flyingSpeed: 1000 });
moveAnimal({ type: 'horse', runningSpeed: 10 });
//Type Casting
//V1:    const inputEl = <HTMLInputElement>document.querySelector('#user-input');
//V2:
var inputEl = document.querySelector('#user-input');
inputEl.value = 'Hii there';
var errorBag = {
    email: 'abc@def.gh',
    username: 'Ijklmn',
};
function add2(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result2 = add2('Max', 'Schwarz');
var result3 = add2(1, 2);
console.log(result2, result3);
//Optional Chaining
var fetchUserData = {
    id: 'u1',
    name: 'max',
    job: { title: 'CEA', description: 'My own company' },
};
//If we fetch the data from an API we maybe dont know if there is this job property
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title); //Helps to look up if there is a property on an object
//Nullish Coalescing
// Only fur 'null' && 'undefined'
var userInput = null;
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT VALUE';
console.log(storedData);
