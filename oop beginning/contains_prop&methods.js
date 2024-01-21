const user = {};
user.name = "Tom";
user.age = 26;
user.print = function(){
     
    console.log(this.name);
    console.log(this.age);
};
const hasNameProp = "name" in user;
console.log(hasNameProp); // true - prop name is in user
 
const hasWeightProp = "weight" in user;
console.log(hasWeightProp); // false - user doesn`t contains weight prop or method
//alternative
const hasNameProp1 = user.name!==undefined;
console.log(hasNameProp1); // true
const hasWeightProp1 = user.weight!==undefined;
console.log(hasWeightProp1); // false

//alternative
const hasNameProp2 = user.hasOwnProperty("name");
console.log(hasNameProp2); // true
const hasPrintMethod = user.hasOwnProperty("print");
console.log(hasPrintMethod); // true
const hasWeightProp2 = user.hasOwnProperty("weight");
console.log(hasWeightProp2); // false


//Using a for loop, we can iterate over an object like a regular array 
//and get all its properties and methods and their values:
const tom = {
     name: "Tom",
     age: 26,
     print(){
         console.log(`Name: ${this.name} Age: ${this.age}`);
     }
};
 
for(const prop in tom) {
     console.log(prop, " : ", tom[prop]);
}
// And when launched, the browser console will display the following output:
// name : Tom
// age: 26
// print : print(){
// console.log(`Name: ${this.name} Age: ${this.age}`);
// }


//Object.entries() takes an object as a parameter and returns an array of property_name-value pairs
for(const prop of Object.entries(tom)) {
     console.log(prop);
}
// Console output:
// ["name", "Tom"]
// ["age", 26]
// ["print", ƒ]

//Object.keys() allows you to get an array of names of all properties of an object.
console.log(Object.keys(tom)); // ["name", "age", "print"]

for(const prop of Object.keys(tom)) {
    const value = tom[prop];    // get value by key
    console.log(prop,value);
}

//Object.values() returns an array that contains all of the object's property values:
console.log(Object.values(tom)); // ["Tom", 26, print()]