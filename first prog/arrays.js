// array
const myArray = [];

const people = ["Tom", "Alice", "Sam"];
console.log(people);    // ["Tom", "Alice", "Sam"]

console.log(people[0]); // Tom
const person3 = people[2]; // Sam
console.log(person3); // Sam

console.log(people[0]); // Tom
people[0] = "Bob";
console.log(people[0]); // Bob

// ----important!----
const people = ["Tom", "Alice", "Sam"];
console.log(people[7]); // undefined - only 3 elements in array
people[7] = "Bob";
console.log(people[7]); // Bob

const objects = ["Tom", 12, true, 3.14, false];
console.log(objects);

// multidimensional arrays like in python
const numbers1 = [0, 1, 2, 3, 4, 5 ]; // one dimensional
const numbers2 = [[0, 1, 2], [3, 4, 5] ]; // two dimensional

const people = [
    ["Tom", 25, false],
    ["Bill", 38, true],
    ["Alice", 21, false]
];

console.log(people[0]); // ["Tom", 25, false]
console.log(people[1]); // ["Bill", 38, true]

console.log("Name: ", people[0][0]); // Tom
console.log("Age: ", people[0][1]); // 25

