const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Alex',
  age: 32,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

let any: any[]; // Array with anything in it

let favoriteActivities: string[]; // Array of strings
let mixedBag: any[]; //Any value array

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.startsWith('Sp')); // Because ts knows what type hobby is (string) it gives the appropriate methods after the dot
}
