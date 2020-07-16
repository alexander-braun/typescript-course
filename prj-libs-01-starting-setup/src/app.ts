import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Product } from './product.model';
import { validate } from 'class-validator';

const products = [
  { title: 'A carpet', price: 29.99 },
  { title: 'A Book', price: 10.99 },
];

const newProduct = new Product('', -5.99);
validate(newProduct).then((errors) => {
  console.log(errors);
});
console.log(newProduct.getInformation());

const loadedProducts = plainToClass(Product, products);
console.log(loadedProducts);
for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
