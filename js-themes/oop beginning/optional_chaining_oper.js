// ?. or optional chaining operator allows you to check an object 
// and its properties and methods for null and undefined

const tom = null;
const bob = {name: "Bob"};
 
function printName(person){
    console.log(person.name);
}
printName(tom); // Uncaught TypeError: Cannot read properties of null (reading "name")
printName(bob);

//modify func
function printName(person){
    if(person) console.log(person.name);
}
// If person is null or undefined, then if(person) will return false

//modification with ?.
function printName(person){
    console.log(person?.name);
}
printName(tom); // undefined
printName(bob); // Bob

//This operator can be used before accessing both properties and methods of an object

const tom1 = undefined;
const bob1 = {
     name: "Bob",
     sayHi(){
         console.log(`Hi! I am ${this.name}`);
     }
};
 
console.log(tom1?.name); // undefined
console.log(bob1?.name); //Bob
tom1?.sayHi(); // not executed
bob1?.sayHi(); // Hi! I am Bob
//the name property and the sayHi() method are accessed only 
//if the tom and bob objects are not null/undefined

//check for the presence of a property or method in an object or in array.
// obj.val?.prop        -   checking the property
// obj.arr?.[index]     -   check the array
// obj.func?.(args)     -   function check


//checking an array property
const tom2 = { name: "Tom"};
const bob2 = {
     name: "Bob",
     languages: ["javascript", "typescript"]
};
 
console.log(tom2.languages?.[0]); //undefined
console.log(bob2.languages?.[0]); // javascript

//chain of checks
const sam = {name: "Sam"};
const tom3 = {
     name: "Tom",
     company: {title: "Google"}
};
const bob3 = {
     name: "Bob",
     company: {
         title: "Microsoft",
         print(){
             console.log(`Company ${this.title}`)
         }
     }
};
sam?.company?.print?.(); // not called - no company property
tom3?.company?.print?.(); // not called - no print method
bob3?.company?.print?.(); // Microsoft Company