// Destructuring allows you to extract individual values from an object into variables or constants
const user = {
    name: "Tom",
    age: 24,
    phone: "+367438787",
    email: "tom@gmail.com"
};
const {name, email} = user;
console.log(name);      // Tom
console.log(email);     // tom@gmail.com
//when destructuring an object, variables are placed in curly braces and assigned to the object
//the mapping between object properties and variables/constants is by name

//mapping with another name
const {name: userName, email: mailAddress} = user;
console.log(userName);      // Tom
console.log(mailAddress);   // tom@gmail.com

// values if cannot find properties
const user1 = {
    name: "Tom",
    age: 24,
};
const {name1  = "Sam", email: mailAddress1 = "sam@gmail.com"} = user1;
console.log(name1);              // Tom
console.log(mailAddress1);       // sam@gmail.com

//If a variable/constant, when destructured, is mapped to a property that represents a complex object, 
//then after destructuring that variable/constant will also represent the complex object
const user2 = {
    name: "Tom",
    age: 24,
    account: {
        login: "tom555",
        password: "qwerty"
    }
};
const {account} = user2;
console.log(account.login); // tom555
console.log(account.password); // qwerty

//if need special field from complex obj
const {name2, account: {login}} =  user2;
console.log(name);      // Tom
console.log(login);     // tom555

//rest
const tom = {
    name: "Tom",
    age: 24,
    phone: "+367438787",
    email: "tom@gmail.com"
};
const {name3, age, ...contacts} = tom;
console.log(name3);      // Tom
console.log(age);       // 24
console.log(contacts);  // {phone: "+367438787", email: "tom@gmail.com"}    contacts - obj

// ---Destructuring Arrays---
const users = ["Tom", "Sam", "Bob"];
const [a, b, c] = users;
console.log(a);     // Tom
console.log(b);     // Sam
console.log(c);     // Bob

//If there are fewer variables/constants, then the remaining array elements are simply omitted.
const [a1, b1] = users;
  
console.log(a1); //Tom
console.log(b1); //Sam

//If there are more variables/constants, then extra vars/consts are undefined
const [a2, b2, c2, d2] = users;
  
console.log(a2);     // Tom
console.log(b2);     // Sam
console.log(c2);     // Bob
console.log(d2);     // undefined

//rest operator
const users1 = ["Tom", "Sam", "Bob", "Mike"];
const [tom1, ...others] = users1;
console.log(tom1);       // Tom
console.log(others);    // ["Sam", "Bob", "Mike"]

//we can skip a number of array elements, leaving blanks instead of variable names:
const users2 = ["Tom", "Sam", "Bob", "Ann", "Alice", "Kate"];
const [first,,,,fifth] = users2;
console.log(first);         //Tom
console.log(fifth);         //Alice

const [,second,,forth] = users2;
console.log(second);        //Sam
console.log(forth);         //Ann


//getting data from array and object
const people = [
     {name: "Tom", age: 34},
     {name: "Bob", age: 23},
     {name: "Sam", age: 32}
];
const [,{name5}] = people;
//we get the value of the name property of the second object in the array
console.log(name5); //Bob

//destructuring of objects when iterating over an array of objects
for(let {name: username, age: userage} of people){
    console.log(`Name: ${username} Age: ${userage}`);
}
// console output
// Name: Tom Age: 34
// Name: Bob Age: 23
// Name: Sam Age: 32

// ---Destructuring parameters---
//If an array or object is passed to a function as a parameter, 
//then it can also be decomposed into individual values
function display({name:userName, age:userAge}){
    console.log(userName, userAge);
}
function sum([a, b, c]){
    const result = a + b + c;
    console.log(result);
}
const user5 = {name:"Alice", age:33, email: "alice@gmail.com"};

const numbers = [3, 5, 7, 8];

display(user5); // Alice 33
sum(numbers); // 15


// ---Exchange of values

let firstt = "Tom";
let secondd = "Bob";
[firstt, secondd] = [secondd, firstt];
  
console.log(firstt); //Bob
console.log(secondd); //Tom

//This simplifies solving a number of problems. 
//For example, we use destructuring for the simplest sorting of an array:
let nums = [9, 3, 5, 2, 1, 4, 8, 6];
for(let i = 0; i < nums.length; i++)
     for(let j = 0; j < nums.length; j++)
         if (nums[i] < nums[j]) [nums[j], nums[i]] = [nums[i], nums[j]];
         
console.log(nums); // [1, 2, 3, 4, 5, 6, 8, 9]