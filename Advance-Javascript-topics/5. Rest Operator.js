// Example 1:

function sum(name, ...args) {
    console.log(`Hello ${name}`);
  let sum = 0;
  for (const i in args) {
    sum += args[i];
  }
  console.log(sum);
}

sum("Ahmad Ali", 20, 30);

// Using rest parameters in combination with ordinary parameters

function multiply(multiplier, ...theArgs) {
    return theArgs.map((element) => multiplier * element);
  }
  
  const arr = multiply(2, 15, 25, 42);
  console.log(arr); // [30, 50, 84]
  
