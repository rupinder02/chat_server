// const { faker } = require('@faker-js/faker');
// const { user: userData } = require('./seed.json');
// const { v4: uuid } = require('uuid');

const { resolveConfig } = require("prettier")

// let a = 10;

// const getRandomName = () => {
//     const randomNameArr = ['Abhi', 'Arjun', 'Rupinder', 'Ravi', 'John', 'Aman'];
//     let randomIndex = parseInt(Math.random()*10);
//     return randomNameArr[randomIndex > 5 ? randomIndex - 5 : randomIndex];
// }

// const getRandomOtp = () => {
//     return parseInt(Math.random()*10000);
// }

// const getUuid = () => {
//     return uuid();
// }

// const getInitCap = ({ firstName, lastName }) => {
//     return firstName.charAt(0).toUpperCase() + firstName.toLowerCase().slice(1) + ' ' + lastName.charAt(0).toUpperCase() + lastName.toLowerCase().slice(1);
// }

// const swap = (a, b) => {
//     a = a + b;
//     b = a - b;
//     a = a - b;
//     return { a, b };
// }

// const findNum = (numArr, num) => {
//     return numArr.find(elem => elem.name === num ) ? true : false;
// }

// const happiness = () => {
//     return 'happiness';
// }


// ( () => {
//     // console.log(process);
//     // console.log(getInitCap({ firstName: 'rupinder', lastName: 'singh '}));
//     // console.log(swap(30, 20));
//     // console.log(findNum([3,4,9,22,5,239], 89));
//     // console.log(findNum([{ name: 'Rupinder' }, { name: 'Abhi' }, { name: 'Rajeev'}], 'Aman'));
//     console.log(happiness('test'));
// })();

// x++;
// x = 20;
// console.log(x);
// x = 20;

// ( () => {
//     for(var i=0;i<3;i++){
//         setTimeout(() => console.log(i), 2000);
//     }
// })();

// setTimeout( () => console.log(33));
// console.log('hello there');

// const add = (num1, num2) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(num1 + num2), 1000);
//     })
// }

// ( async() => {
//     const res =  await add(3,4);
//     console.log(res);
// })();

// console.log('last line');


// ========= es11 features 2020 ===========

// 1. ----- Nullish coalescing ------

// const number =  0;
// const res = number ?? 9;  // nullish coalescing
// console.log(res);

// 2. ----- Optional chaining operator -------

// ?. chaining operator. It also resolves the problem of having to do multiple null 
// checks while accessing a long chain of object properties in JavaScript.

//
// 3. ------- bigint ---------
// to handle big integer values
let num1 = 1233434n;
console.log(typeof num1);

// ----------  es12 features 2021 -----------

// ??== nullish assignment
// &&== 
// ||==

// numberic seperators 1_000_99_23

const num = 1_99_22_900; // improves readability
console.log(num, typeof num);

// ----------- es13 features 2022 ------------

// top level await

// at() method for string and arrays
const arr = [1,2,3];
console.log(arr.at(-2));
const str = 'rupinder';
console.log(str.at(-2));

// ======= mongodb ========
// array searching $elemMatch for matching an element in an array
// upsert : creates a new document when no match is found in the collection

// ----- geospatial queries ------
// they need "2dsphere" index
// db.places.find(
//     {
//       location:
//         { $near:
//            {
//              $geometry: { type: "Point",  coordinates: [ -73.9667, 40.78 ] },
//              $minDistance: 1000,
//              $maxDistance: 5000
//            }
//         }
//     }
//  )



