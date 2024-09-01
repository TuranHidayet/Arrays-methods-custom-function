// find method
let nums = [5, 6, 8, 12, 18];
let testnums = nums.find ( (item) => {
    return item > 8;
} )

console.log(testnums);


// filter method
let num = [5, 6, 8, 12, 18];
let test = num.filter ( (item) => {
    return item > 6;
} )

console.log(test);


// includes method 
let phones = ["iphone", "smsung", "xiaomi", "nokia", "lg"];
let testPhones = phones.includes ("oppo")

console.log(testPhones);

// reduce method
let orders = [5, 6, 8, 12, 18];
let testorders = orders.reduce ( (acc, item) => {
    return acc += item;
}, 0 )

console.log(testorders);


// sort method 
const arr = [10, 5, 40, 25];
arr.sort((a, b) => {
    return  a - b
} );


console.log(arr);


// every method
const arry = [10, 5, 40, "25"];
const testArry = arry.every (arr => Array.isArray (arr));


console.log(testArry);


// some method
const people=[
    {
        'name': "Terlan",
        'age': 24,
    },
    {
        'name': "Orxan",
        'age': 25,
    },
    {
        'name': "Akif",
        'age': 22,
    },
    {
        'name': "Tural",
        'age': 23,
    },
]

const adult=people.some( person => personAge > 23);
console.log(adult);
