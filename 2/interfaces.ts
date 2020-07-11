interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1, n2) => {
  return n1 + n2;
};

console.log(add(2, 2));

interface Named {
  readonly name?: string;
  outPutName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

let user1: Greetable = new Person();

user1.greet("Hey there, I'm");
