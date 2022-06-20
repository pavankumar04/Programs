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

// function sum(range) {
//   for (let i = 0; i < range; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       console.log(i);
//     }
//   }
// }
// sum(20);

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

// let size = 15;
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

//********************************************************************************* */

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

//CONSTRUCTOR FUNCTION
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw ");
//   };
// }

// const circle = new Circle(1);
// circle.draw();

// OBJECTS ARE DYNAMIC
//  WE CANNOT REASSIGN A CONST OBJECT BUT WE CAN ALWAYS ADD OR REMOVE PROPERTIES OF THE OBJECT

// const circle = {
//   radius: 1,
// };

// circle = { house: 899 }; // will give you error, can't reassign

// circle.color = "yellow";
// circle.draw = function () {};
// console.log(circle);

// delete circle.color;
// delete circle.draw;

// console.log(circle);

//***********************************************************
// 5.5  CONSTRUCTOR PROPERTY
// Every object in javascript has a property called constructor which references the function that was used to construct or create that object
//First letter of the constructor function is Uppercase then it is a built in function.
// internally javascript uses Object constructor function by default to create objects
// new String(), new Number() will use Object

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
// console.log(joker.constructor);

// CONSTRUCTOR FUNCTION
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const another = new Circle(1);

// console.log(another.constructor);

// inbuilt constructors
// new String();
// new Boolean();
// new Number();

// ***********************************************************************

//6.6 FUNCTIONS ARE OBJECTS

// there is an inbuilt constructor for functions which is 'FUNCTION'

// CONSTRUCTOR FUNCTION
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
//     console.log("executed draw action");
//   },
// };

// circle.draw();

// for (let ele in circle) {
//   console.log(ele, ": ", circle[ele]);
// }

// Object is A built in constructor function.

// SO SOME WHERE THERE IS
//// function Object(){
////   code
//// }

// when ever we create an object using object literal syntax
//// (const x={value:1};) that is translated to a call to this function
// //which looks like (  const x=new Object()  )

// //Object.keys(circle) will return keys as a string array
//Object.entries(circle) will return each key-value pair as an array

// for (let ele of Object.keys(circle)) {
//   console.log(ele, circle[ele]);
// }

// for (let entry of Object.entries(circle)) {
//   console.log(entry);
// }

// console.log(Object.keys(circle));
// console.log(Object.entries(circle));
// console.log(Object.entries(circle));

// if ("radius" in circle) console.log("yes");

///****************************************************************** */

//9.9   CLONING AN OBJECT

// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };

// let another = {};
// for (let key in circle) another[key] = circle[key];

// //shortcut for above line is
// another = { ...circle };

// //ORRRRRRRRRRRRRRRRR

// another = Object.assign({}, circle); // The target object need not be empty

// //ORRRRRRRRRRRRRRRRR

// another = Object.assign({ red: 1 }, circle);

// //ORRRRRRRRRRRRRRRRRRRRRR

// console.log(another);

//************************************************************** */

// 11.11 MATHS IN JAVSCCRIPT

// Math.round(x); //Returns x rounded to its nearest integer
// Math.ceil(x); //Returns x rounded up to its nearest integer
// Math.floor(x); //Returns x rounded down to its nearest integer
// Math.trunc(x); //Returns the integer part of x

// Math.min(0, 150, 30, 20, -8, -200);
// Math.max(0, 150, 30, 20, -8, -200);
// Math.random();
// Math.abs(-4.7);
// Math.sqrt(64);
// Math.pow(8, 2);
// console.log(Math.sign(0)); // will return -1 if negative, and 0 if zero

//********************************************************************* */

// 5.12  STRING

// //String primitive
// const x = "hello";
// console.log(typeof x);
// console.log(x.length);

// // // when we use . notation with string primitive it internally wraps this with a string Object.Thats why we are able to use length property

// // //String Object
// const another = new String("hi");
// console.log(typeof another);

// console.log("joker".charAt(2));
// console.log("joker"[1]);

// text = "   this is a sample test   ";

/* 
console.log(text.endsWith("test"));
console.log(text.replace("this", "the"));
console.log(text.includes("this"));
console.log(text.startsWith("this"));
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
Template `` */

/* const name = "kishore";
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
console.log(d1.toDateString(), " --this is date string");
console.log(d1.toTimeString(), " -- this is time string");
console.log(d1.toISOString(), " -- this is iso string");
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

//*********************************************************************** */

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 
 
 
 
 
 
 
 
 
 
 
 













 



 


 * 
 * 
 * 
 * 
 */

// 6TH SECTION

/* const numbers = [3, 4];

//numbers = []; //will give error we can not reassign to a const but can modify their content

//END

numbers.push(5, 6);
console.log("push at end  " + numbers);

console.log("pop at end " + numbers.pop());

//Begining
numbers.unshift(1, 2);
console.log("push at start  " + numbers);

console.log("pop at start " + numbers.shift());

//MIDDLE

numbers.splice(2, 0, "a", "b", 8, 9, 10);
console.log("Add in the middle " + numbers);
numbers.splice(4, 1, "c", "d");
console.log("Add in the middle and delete 1 ele  " + numbers);
*/

//************************************************************************* */

/* 
//Finding primitives

let numbers = [1, 2, 3, 4];

console.log(numbers.indexOf("1"));
console.log(numbers.indexOf(2));

// to find if element is present
console.log(numbers.indexOf(2) !== -1);
console.log(numbers.includes(3));

//find element after certain index
 */

//*********************************************************************** */

//Finding refernces

// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];

// //console.log(courses.includes({ id: 1, name: "a" }));
// //Will not work as the object we are passing to includes method and the object in the courses array are not same.
// // They have two different references
// // two different memory locations

// // return the object if found
// const course = courses.find(function (ele_course) {
//   return ele_course.name === "a";
// });
// console.log(course);

// //find method takes function as attribute
// //and it runs untill condition in return is true. When it finds what we want it stops

// //   above can be rewtitten using arrow function
// const course = courses.find((course) => course.name === "a");
// console.log(course);
// const courseindex = courses.findIndex(function (course) {
//   return course.name === "b";
// });

// console.log(courseindex);

///************************************************************* */
/* 
//Arrow functions
// 1 -can remove function keyword by placing => before curly braces
const course = courses.find(function (course) {
    return course.name === "a";
  });

//2- for single attrib can remove small brackets and 
//for a single return statement can remove return keyword and curly braces
const course = courses.find((course) =>{
    return course.name === "a";
  });

// 3- If we have no attrib should have empty small brackets
const course = courses.find(course=> course.name === "a");

// completed
const course = courses.find(()=> course.name === "a");
 */

///********************************************************************** */

// Emptying array

// let numbers = [1, 2, 3, 4];
// let another = numbers;

// //Soultion 1
// numbers = [];
//numbers is jsut pointing to new empty object
// another is still pointing to old object so it will not be deleted by garbage collector

//Solution 2
// numbers.length=0

//Solution 3
// numbers.splice(0, numbers.length);

///********************************************************************************* */

/* const first = [1, 2];
const second = [7, 8, 9];

// const combined = first.concat(second);

//concat using spread operator

// const combined = [...first, ...second];
const combined = [...first, "a", "b", ...second, "c", "d"];
// console.log(combined);

// const sliced = combined.slice(2, 4);
// const sliced = combined.slice(2);
// const sliced = combined.slice(); //copy of original array

//copy using spread operator
const copy = [...combined];
// console.log(sliced);
console.log(copy);
 */
//*************************************************************************** */

//ITERATING ARRAY NEW METHOD

/* const numbers = [1, 2, 3];

for (const num of numbers) {
  console.log(num);
}

numbers.forEach((element) => {
  console.log(element);
});

//Short cut
numbers.forEach((element) => console.log(element));
// INcluding index
numbers.forEach((element, index) => console.log(element, "index is " + index)); */

//**************************************************************************************** */

//joining arrays

/* const numbers = [1, 2, 3];
const joined = numbers.join(" ");
console.log(joined);

//Strings
const mess = "pluto is a planet";
console.log(mess.split(" ").join("_"));
 */
//***************************************************************************** */

//sorting arrays

// // for primitive arrays
// const numbers = [4, 8, 2, 1];

// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// const cards = [3, 2, 9, 1, 6];
// cards.sort(function (a, b) {
//   console.log("a is " + a + " b is " + b);
//   return a - b;
// });
// console.log(cards);

//shortcut is
// cards.sort((a, b) => a - b);

//for objects

// const courses = [
//   { id: 1, name: "Nodejs" },
//   { id: 2, name: "Javascript" },
//   { id: 3, name: "Ali" },
//   { id: 4, name: "Blood" },
// ];

// courses.sort(function (a, b) {
//   const nameA = a.name.toLowerCase();
//   const nameB = b.name.toLowerCase();

//   if (nameA < nameB) return -1;
//   if (nameA > nameB) return 1;
//   return 0;
// });
// console.log(courses);

// // Sort cut for sorting by word length
// courses.sort((a, b) => a.name.length - b.name.length);
// console.log(courses);

///*************************************************************************** */

// every and some methods for array

// every returns on first false.
// some returns on first true.

/* const numbers = [1, 2, -3, 4, 5];

const allpositive = numbers.every(function (value) {
  return value >= 0;
});
console.log(allpositive);

const atleastOneNegative = numbers.some(function (value) {
  return value < 0;
});
console.log(atleastOneNegative); */

///************************************************************ */

//Filtering array

/* const numbers = [1, -1, 2, 3];
// const filtered = numbers.filter(function (value) {
//   return value >= 0;
// });

const filtered = numbers.filter(n => n >= 0);

console.log(filtered);
 */
//********************************************************************** */

//Mapping an array

/* const numbers = [1, -1, 2, 3];
const filtered = numbers.filter((n) => n >= 0);

//Mapping to string
const items = filtered.map((n) => "<li>" + n + "</li>");
const html = "<ul>" + items.join(" ") + "</ul>";
console.log(html);

//Mapping to object
const ranks = filtered.map((n) => ({ value: n })); // after arrow function if we use curly braces it would be a code block to make it an object wrap it with small brackets.

console.log(ranks);

// Chaining filter and map
const chain = numbers.filter((n) => n >= 0).map((n) => ({ value: n }));
console.log(chain);

const chain2 = numbers
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1);
console.log(chain2);
 */

///************************************************************************************* */

//REduce function is used to reduce an array to single entity it can be array, string, object.

const numbers = [1, -1, 2, 3];

//a=0,c=1
//if a==0 is not set then
//a=0,c=-1
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

//shortcut
// const sum = numbers.reduce((a, c) => a + c);
// console.log(sum);

///************************************************************************** */

/* 
Array Functions

Map()    -- will return array
Filter() -- will return array
sort()   -- will not return array
fill()   -- will not return array
reduce() -- return array in special cases
*/

/* arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.fill(89);
console.log(arr);

// Creating a new array with 10 random numbers
arr2 = new Array(10);
arr2 = arr2.fill(0).map((x) => Math.random(0, 20));
console.log(arr2);
//shortcut
arr3 = new Array(10)
  .fill()
  .map(() => Math.floor(Math.random() * (80 - 30) + 30));
console.log(arr3);
 */

//EXercise-1

/* const numbers = arrayFromRange(1, 4);
console.log(numbers);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
}
 */

///************************************************************************* */

//Exercise-2

/* const numbers = [1, 2, 3, 4];

console.log(numbers.includes(1));

function includes(array, searchElement) {
  const value = numbers.some((n) => n === 1);
}
 */

///*************************************************************************** */

//Exercise -3  Except
/* 
const numbers = [1, 2, 3, 4];
const result = except(numbers, [1, 2]);

function except(array, excepted) {
  output = [];

  for (let ele of array) {
    if (!excepted.includes(ele)) output.push(ele);
  }
  return output;
}

console.log(result);
 */

///*********************************************************************** */
// Exercise-4 Moving an element

// const numbers = [1, 2, 3, 4, 5];

// const output = move(numbers, 4, -2);
// console.log(output);

//Function 1
/* function move(array, index, offset) {
  let copy = [...array];
  let temp = 0;
  const noOfLoops = index + offset;
  const change = offset < 0 ? -1 : 1;

  if (noOfLoops < 0 || noOfLoops >= array.length) return "error";

  for (let i = index; i !== noOfLoops; i += change) {
    temp = copy[i];
    copy[i] = copy[i + change];
    copy[i + change] = temp;
  }
  return copy;
} */

//*************************************************** */

///5.Count Occurances

/*****************
 * 
 * 
 * 
 * 





































































































































 */

//REACT BASICS

// var  --Function
// let  -- block
// const -- block

// // 1.ler vs char vs const

// function sayhello() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// sayhello();

/*************************************************************
 *
 */

//OBJECTS

// const person = {
//   name: "joker",
//   walk() {},
//   talk() {},
// };

// person.talk();
// person.name = "";

// const targetperson = "name";
// person[targetperson] = "john";
// console.log(person);

/*************************************************************
 *
 */

// THIS

// two ways
// 1.as a method of an object
//  (this refers to object)

// const person = {
//   name: "king",
//   walk() {
//     console.log(this);
//   },
// };

// person.walk();

// 2.as a standlone method with out referenig to object
// (2.1->THIS refers to global window object by default)
//(2.2->When we got reference to a method in an object STRICT mode kicks in and this refers to UNDEFINED)

// const walk = person.walk;
// console.log(walk);

// walk(); //undefined

/*************************************************************
 *
 */

//HOW TO  SOLVE PROBLME WITH THIS
//bind to the object (set the value for this)
//BIND method can set the value of this permanently
//So, When we call bind on walk function, we get a new walk function where the value of "THIS" is based on the parameter we've given

// const person = {
//   name: "king",
//   walk() {
//     console.log(this);
//   },
// };

// person.walk();
// const walk = person.walk.bind(person);
// console.log(walk);

// walk();

/*************************************************************
 *
 */

// Arrow functions

// const compute = (num) => num * num;
// console.log(compute(40));

//Application

// const jobs = [
//   { i: 1, isActive: true },
//   { i: 2, isActive: true },
//   { i: 3, isActive: false },
// ];

// const activeJobs = jobs.filter((job) => job.isActive);
// console.log(activeJobs);

/*************************************************************
 *
 */

//7.Arrow functions with this

// Arrow function don't rebind "THIS" keyword

/* const person = {
  talk() {
    setTimeout(function () {
      console.log("this", this); // It returns window object
      // We get window object instead of person object as the setTimeout is not part of any object (it is a Standalone function)
    }, 1000);
  },
};
person.talk(); */

//How can we solve this problem? How can we make this refer to person object inside callback function?

//1 --> before callback function assign this to randon variable and use that variable inside callback function

/* const person2 = {
  talk() {
    var self = this;
    setTimeout(function () {
      console.log("self", self); // It returns person object
    }, 1000);
  },
};
person2.talk();
 */

//2 --> Since we used arrow function syntax for callback function "THIS" wont get changed from refering to person object
/* const person3 = {
  talk() {
    setTimeout(() => {
      console.log("this", this); // It returns person object
    }, 1000);
  },
};
person3.talk();
 */

/*************************************************************
 * 

 */

// 8.Array map method (in react we used to render list of items)

const colors = ["red", "green", "blue"];
const items = colors.map((color) => "<li>" + color + "</li>");
// const items = colors.map(color => `<li>${color}</li>`)

// 9.Objet deconstructing
// Extracting the value of the properties of object to separate variables.

const address = {
  street: "london",
  city: "newyork",
  country: "europe",
};

//1.
// const street=address.street
// const city=address.city
// const country=address.country

/// OR
//2.
// {name of target properties} --> it is  a deconstructing syntax
// const {street,city,country}=address

// -->dont have to list all properties in object
// const {street}=address

//can have aliases
// const { street: st } = address;
// console.log(st);

/*************************************************************
 * 

 */

// 10.Spread operation

// combining arrays
//--> spread operator

/* const first = [1, 2, 3];
const second = [3, 8, 9];

const combined1 = first.concat(second);
// advanced way
const combined2 = [...first, "a", ...second];
console.log(combined2);
 */

//-->SPREAD ON OBJECTS
/* const first = { name: "pavan" };
const second = { middle: "kumar" };
const combined = { ...first, ...second, location: "australia" };
console.log(combined);
 */

/*************************************************************
 * 

 */
//11.Classes

/* class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}

const person = new Person("kishore");
person.walk();
 */

/*************************************************************
 * 

 */

// 12.Inheritance

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   walk() {
//     console.log("walk");
//   }
// }

// class Teacher extends Person {
//   constructor(/* name, */ degree) {
//     // super(name);
//     super();
//     this.degree = degree;
//   }
//   teach() {
//     console.log("teach");
//   }
// }

// const teacher = new Teacher("M");

/*************************************************************
 * 

 */

// 13.Modules
//Objects that we define in a module ae private by default,So they are not accessible from outside unless we export them.

/* import { Teacher } from "./teacher.js";

const teacher = new Teacher("4th");
teacher.walk(); */

//14.Named and the default export

// Default ->import ...  from ''
/// Named->import  {...} from ''

// import Teacher, { promote } from "./teacher.js";
