// Example 1:

function sum(name, ...args) {
  console.log(`Hello ${name}`);
  let sum = 0;
  for (const i in args) {
    sum += args[i];
  }
  console.log(sum); // 50
}

let arr = [20, 30];

sum("Ahmad Ali", ...arr); // Spread Operator on Funcation Call

// Example 2 Spread Operator

let array = [10, 20, 30, 40];

console.log(...array); // 10 20 30 40 # Spread Operater without Array

console.log([...array]); // [ 10, 20, 30, 40 ] # Spread Operater with Array cloneing 

let newArray = array;

array.push(50);

// Clone
console.log(
  array, // [ 10, 20, 30, 40, 50 ]
  newArray // [ 10, 20, 30, 40, 50 ]
);


// Example 2


let spreadArray = [20, 30, 70, 40];

let newspreadArray = [...spreadArray];

spreadArray.push(50);
// Cannot Clone
console.log(
  spreadArray, // [ 20, 30, 70, 40, 50 ]
  newspreadArray // [ 20, 30, 70, 40 ]
);

// Concat using Spread
let a = [10,20,30];
let b = [40,50];

let c = [...a, ...b]; 
console.log(c);  // [ 10, 20, 30, 40, 50 ]
// let c = [5 , ...a, ...b, 64 ]; after log  [5, 10, 20, 30, 40, 50,64 ]