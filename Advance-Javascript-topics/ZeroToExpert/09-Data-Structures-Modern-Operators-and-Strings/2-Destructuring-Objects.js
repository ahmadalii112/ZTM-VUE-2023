const resturant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tacanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ["Foraccia", "Bruchhchetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        console.log("Inside order", [this.starterMenu[starterIndex], this.mainMenu[mainIndex]])
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
}
// order of elements in objects destructuring doesn't matter
const {
    name,
    openingHours,
    categories
} = resturant;
console.log(name, openingHours, categories);


const {
    name: resturantName,
    openingHours: hours,
    categories: tags
} = resturant;
console.log(resturantName, hours, tags)


// default value otherwise it show undefined

const {
    menu = [], starterMenu: starters = []
} = resturant;

console.log(menu, starters);

// mutating variables



let a = 111;
let b = 999;
const obj = {
    a: 23,
    b: 7,
    c: 14
}
// console.log(obj) //  { a: 23, b: 7, c: 14 }
// ({a,b} = obj)

// console.log(a,b) // 23 7


// Nested Objects

const { 
    fri: {open: o, close: c},
} = openingHours;
console.log(o,c);  // 11 23