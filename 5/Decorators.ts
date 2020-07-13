//Normal way
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}
//Assigning a decorator
@Logger
class PersonClass {
  name = 'Max';
  constructor() {
    console.log('Create person object...');
  }
}
const pers = new PersonClass();
console.log(pers);

//Decorator Factory
function Logger2(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}
@Logger2('LOGGING - PERSON')
class PersonClass2 {
  name = 'Max';
  constructor() {
    console.log('Create person object...');
  }
}
const pers2 = new PersonClass();
console.log(pers);

//More advanced
function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    //Replace old constructor
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const element = document.getElementById(hookId);
        if (element) {
          element.innerHTML = template;
          element.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

//Multiple decorators execute bottom up!!
@Logger2('Bonjour')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class PersonClass3 {
  name = 'Max';
  constructor() {
    console.log('Create person object...');
  }
}
const pers3 = new PersonClass3();
console.log(pers3);

//-------------Other places to add decorators to---------------
//Property decorator
function LogDecorator(target: any, propertyName: string | Symbol) {
  console.log('Property decorator');
  console.log(target, propertyName);
}

//Accessor decorator
function LogDecorator2(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

//Method decorator
function LogDecorator3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

//Parametor Decorator
function LogDecorator4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @LogDecorator
  title: string;
  private _price: number;

  @LogDecorator2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @LogDecorator3
  getPriceWithTax(@LogDecorator4 tax: number) {
    return this._price * (1 + tax);
  }
}

//Autobind
function Autobind(_1: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };
  return adjustedDescriptor;
}
class Printer {
  message = 'This works!';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}
const p = new Printer();
const button = document.querySelector('button');
button?.addEventListener('click', p.showMessage);

//Validation
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // [required, positive...]
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required'],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive'],
  };
}

function Validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    console.log(prop);
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
        case 'positive':
          isValid = isValid && obj[prop] > 0;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;
  const title = titleEl.value;
  const price = +priceEl.value;
  const createdCourse = new Course(title, price);
  if (!Validate(createdCourse)) {
    alert('invalid input, please try again!');
  }

  console.log(createdCourse);
});
