enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person1 = {
  name: 'Alex',
  age: 32,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

if (person1.role === Role.ADMIN) {
  console.log('is admin');
}
