// //this is a comment
// let name1 = "hello";
// let age = 30;
// let isPassed = true;
// let firstName = undefined;
// let lastNmae = null; // clear the value of variable

// let person = {
//   name1: "mosh",
//   age: 67,
// };

// console.log(person);

// // Dot notation
// person.name1 = "john";

// console.log(person.name1);

// // BRacket notation
// person["name1"] = "joker";

// console.log(person["name1"]);

// let selectedcolors = ["red", "blue"];

// selectedcolors[2] = 67;
// console.log(selectedcolors);

// function greet(name, lastname) {
//   console.log("hello " + name + " " + lastname);
// }

// greet("john", "smith");

// function square(side) {
//   console.log("the area of square is " + side * side);
// }

// square(6);

// function checkSpeed(speed) {
//   if (speed > 70)
//     return Math.floor((speed - 70) / 5) >= 12
//       ? "suspended"
//       : Math.floor((speed - 70) / 5);
// }

// x = checkSpeed(110);

// console.log(x);

// function showNumbers(limit) {
//   for (let num = 0; num <= limit; num++) {
//     result = num % 2 === 0 ? "even" : "odd";
//     console.log(num + " is " + result);
//   }
// }

// showNumbers(10);

// const array = ["12", 2, 3, "hello", 0, undefined, 32];
// count = 0;
// for (let value of array) {
//   if (value) {
//     count++;
//   }
// }

// console.log(count);

// const movie = {
//   title: "a",
//   relleaseYear: 2018,
//   rating: 4.3,
//   director: "stan",
// };

// moviestr(movie);
// function moviestr(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") {
//       console.log(key, obj[key]);
//     }
//   }
// }

// function sum(range){
//   for(let i=0;i<range;i++){
//     if(i%3===0 || i%5===0){
//       console.log(i);
//     }
//   }
// }
// sum(20)

// const marks=[80,96,76,86]

// grade(marks);

// function grade(arr){
//   let avg=0
//   arr.forEach(element => {
//     avg+=element;
//   });

//   avg=avg/arr.length

//   if(avg>= 1 && avg <= 59) console.log('F');
//   if(avg>= 60 && avg <= 69) console.log('D');
//   if(avg>= 70 && avg <= 79) console.log('C');
//   if(avg>= 80 && avg <= 89) console.log('B');
//   if(avg>= 90 && avg <= 100) console.log('A');
// }

// for (let i = 10; i>0; i--) {
//   let str=''
//   for (let j = 0; j < i; j++) {
//     str+='*'
//   }
//   console.log(str);
// }

// let size = 5;
// let str = "";
// let c = 1;
// let count = 1;
// for (let i = size; i > 0; i = i - 2) {
//   str = "";
//   count = c;

//   for (let j = 0; j < i / 2; j++) {
//     str += " ";
//   }
//   while (count > 0) {
//     str += "*";
//     count--;
//   }
//   c += 2;
//   console.log(str);
// }

// console.log("hello world");

///   FUNCTIONS 1ST VIDEO

// const circle = {
//   radius: 1,
//   loaction: {
//     x_axis: 2,
//     y_axis: 4,
//   },
//   invisible: true,
//   draw: function () {
//     console.log("helloworld");
//   },
// };

// circle.draw();

/// FUNCTIONS 2ND VIDEO   FACTORY FUNCTION

// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// const circle1 = createCircle(4);
// console.log(circle1);
// circle1.draw();

/// CONSTRUCTOR FUNCTION
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(1);
// circle.draw();

// OBJECTS ARE DYNAMIC
//  WE CANNOT REASSIGN A CONST OBJECT BUT WE CAN ALWAYS ADD OR REMOVE PROPERTIES OF THE OBJECT

// const circle = {
//   radius: 1,
// };

// circle.color = "yellow";
// circle.draw = function () {};

// delete circle.color;
// delete circle.draw;

// console.log(circle);

//***********************************************************
// 5.5  CONSTRUCTOR PROPERTY
// Every object in javascript has a property called constructor which references the function that was used to construct or create that object

// let C = { name1: "pavan" };

// // console.log(C.constructor);

// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// const joker = createCircle(4);
// // console.log(joker.constructor);

// // CONSTRUCTOR FUNCTION
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const another = new Circle(1);

// // console.log(another.constructor);

// inbuilt constructors
// new String();
// new Boolean();
// new Number();

// ***********************************************************************

//6.6 FUNCTIONS ARE OBJECTS

// there is an inbuilt constructor for functions which is 'FUNCTION'

// // CONSTRUCTOR FUNCTION
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// console.log(Circle.constructor);

// Circle.call({}, 1);

// // Above and below line are exatly same,new Circle(1) will add {}
// // new Circle(1)  ==>  Circle.call({},1)

// const trees = new Circle(1);

// // Circle.apply is same as circle.call but we can pass arguments as arrays
// ////       Circle.apply({},[1,2,3,4]);

// ************************************************************************

//  7.7  Primitives are copied by their value and Objects are  copied by their reference.

// let num = 10;
// function increment(number) {
//   number++;
// }
// increment(num);
// console.log(num);

//*********************************************************************

// 8.8  Object is not a iterable type like array.
//    For-of loop can only be used with ierables like array
//    For-in loop in JavaScript is used to iterate over properties of an object which have their enumerable property set to “true”.

// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };

// // circle.draw();

// // for (let ele in circle) {
// //   console.log(ele, circle[ele]);
// // }

// Object is A built in constructor function.

// SO SOME WHERE THERE IS
//// function Object(){
////   code
//// }

// when ever we create an object using object literal syntax
//// (const x={value:1};) that is translated to a call to this function
// //which looks like (  const x=new Object()  )

// //Object.keys(circle) will return a string array
//Object.entries(circle) will return each key-value pair as an array

// for (let ele of Object.keys(circle)) {
//   console.log(ele, circle[ele]);
// }

// for (let entry of Object.entries(circle)) {
//   console.log(entry);
// }

// if ("radius" in circle) console.log("yes");

///****************************************************************** */

//9.9   CLONING AN OBJECT

// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };

// const another = {};
// for (let key in circle) another[key] = circle[key];

//ORRRRRRRRRRRRRRRRR

// const another = Object.assign({}, circle);

//ORRRRRRRRRRRRRRRRR

// const another = Object.assign({ red: 1 }, circle);

//ORRRRRRRRRRRRRRRRRRRRRR

// const another = { ...circle };

// console.log(another);

//************************************************************** */

// 11.11 MATHS IN JAVSCCRIPT

/*
Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x 

Math.min(0, 150, 30, 20, -8, -200);
Math.max(0, 150, 30, 20, -8, -200);
Math.random();
Math.abs(-4.7);
Math.sqrt(64);
Math.pow(8, 2);
Math.sign(-4);

*/

//********************************************************************* */

// 5.12  STRING

//String primitive
// const x = "hello";
// console.log(typeof x);
// console.log(x.length);

// // when we use . notation with string primitive it internally wraps this with a string Object.
// //String Object
// const another = new String("hi");
// console.log(typeof another);

// console.log("joker".charAt(2));
// console.log("joker"[1]);

// text = "   this is a sample test   ";
/* 
console.log(text.replace("this", "the"));
console.log(text.includes("this"));
console.log(text.startsWith("this"));
console.log(text.endsWith("test"));
console.log(text.indexOf("sample"));
console.log(text.toUpperCase());
console.log(text.trim());
console.log(text);
console.log(text.trimLeft());
console.log(text.trim().split(" "));
 */

//******************************************************************** */

// 5.13 TEMPLATE LILTERALS

/* 
object  {}
Boolean  true,false
String '',""
Template ` */

/* 
const name = "kishore";
const message = "netflix is\n" + " the 'first' ott platform";
const another = `
Hi ${name} ${2 + 3}

You are selected for the interview

thank you,
Regards.
`;
console.log(message);
console.log(another);
 */

//********************************************************************* */

// 5.14 DATE OBJECT

/* const d1 = new Date();
console.log(d1);

const date1 = new Date("May 11 2018 09:00");

d1.setFullYear(2017);
d1.setDate(23);
console.log(d1);
console.log(d1.toDateString());
console.log(d1.toTimeString());
console.log(d1.toISOString());
 */

//********************************************************************* */

//5.15  Exercise -1
/* 
let address = { street: "a", city: "b", zipcode: "123" };

function showAddress(address) {
  for (const ele in address) {
    console.log(ele, address[ele]);
  }
}

showAddress(address);
 */

//********************************************************************* */

//5.16  factory and construtor function

//Fcatory Function

/* function createAddress(street, city, zipcode) {
  return {
    street,
    city,
    zipcode,
  };
}

let address1 = createAddress("a", "b", "c");

console.log(address1);

 */
// Constructor Function

/* function Address(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}
let address = new Address("a", "b", "c");

console.log(address);
 */

//***************************************************************** */

//5.17  SAME and EQUAL
/* 
let address1 = new Address("a", "b", "c");
let address2 = new Address("a", "b", "c");

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

function Address(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}

// if values of objects are equal
function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipcode === address2.zipcode
  );
}

// IF objects refer to same memory space
function areSame(address1, address2) {
  return address1 === address2;
} */

///*********************************************************** */

///  5.18
/* 
let post = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [
    { author: "a", body: "b" },
    { author: "c", body: "d" },
  ],
  isLive: true,
};

console.log(post);
 */

//******************************************** */

/// 5.19

/* let post1 = new Post("a", "b", "c");
console.log(post1);
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comment = [];
  this.isLive = false;
}
 */

/*************************
 * 
 * 
 * 
































































































































 */
