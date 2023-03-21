const resturant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tacanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ["Foraccia", "Bruchhchetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    // we can use this function  Step 3
    order: function (starterIndex, mainIndex) {
        console.log("Inside order", [this.starterMenu[starterIndex], this.mainMenu[mainIndex]])
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
}



const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];


const [x, y, z] = arr;
console.log(x, y, z); // Output =>  2 3 4
console.log(arr); // Output  =>  [ 2, 3, 4 ]


/*

const [first, second] = resturant.categories;
console.log(first, second); // Output => Italian Pizzeria

const [first, ,second] = resturant.categories;
console.log(first, second); // Output => Italian Vegetarian

*/

let [main, , secondary] = resturant.categories;
console.log(main, secondary); // Output => Italian Vegetarian

/*
without Destructuring using Switching variables 
const temp = main;
main = secondary
secondary = temp;
console.log(main, secondary); // Output => Vegetarian Italian
*/


// with Destructuring
[main, secondary] = [secondary, main]
console.log(main, secondary); // Output => Vegetarian Italian


// Step 3 use function above Receive 2 return value from function
const [starter, mainCourse] = resturant.order(2, 0);
console.log(starter, mainCourse); // Output => Garlic Pizza

//  Nested
const nested = [2, 4, [5, 6]]

// const [i, , j] = nested;
// console.log(i, j); // Output => 2 [ 5, 6 ]

const [i, , [j, k]] = nested;
console.log(i, j, k); // output => 2 5 6


// Default
const [p, q, r] = [8, 9];
console.log(p, q, r); // output => 8 9 undefined

const [s = 1, t = 1, u = 1] = [8];
console.log(s, t, u) // output => 8 1 1