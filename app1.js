// function minus(a = 0) {
//   return function(b = 0) {
//     return a - b;
//   };
// }
// let res1 = minus(10)(6);
// let res2 = minus(5)(6);
// let res3 = minus(10)();
// let res4 = minus()(6);
// let res5 = minus()();

// console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log(res4);
// console.log(res5);
// --------------------------------------
// function multiplyMaker(num) {
//   let res = num;
//   return function(num2) {
//     res *= num2;
//     return res;
//   };
// }

// const multiply = multiplyMaker(2);
// console.log(multiply(2));
// console.log(multiply(1));
// console.log(multiply(3));
// console.log(multiply(10));
// ----------------------------------------------
// const product = {
//   brand: "Apple",
//   model: "iPhone 7",
//   price: "$300",
//   get fullName() {
//     return product.brand + " " + product.model;
//   },

//   set fullName(value) {
//     var split = value.split(" ");
//     product.brand = split[0];
//     product.model = split[1];
//   }
// };

// product.fullName;
// console.log(product.fullName);
// console.log(product);
// product.fullName = "sumsung s8";
// console.log(product.brand);
// console.log(product.model);
// console.log(product);
//
// ---------------------------------
// const person = {
//   name: "Denis",
//   age: 30,
//   lastGet: "",
//   lastUpdate: ""
// };

// for (const key in person) {
//   if (person.hasOwnProperty("name")) {
//     person.lastGet = 2019;
//     person.lastUpdate = 2020;
//   } else console.log(person);
// }
// console.log(person);
// -----------------------------------------
// const organisation = {
//   name: "Google",
//   info: {
//     employees: ["Vlad", "Olga"],
//     partners: ["Microsoft", "Facebook", "Xing"]
//   }
// };

// function getInfo(organisation) {
//   const {
//     name,
//     info: { partners }
//   } = organisation;
//   return { name: name || `UNKNOWN`, partners: partners.slice(0, 2) };
// }
// console.log(getInfo(organisation));
