const user = new Object(); // or const user = {};

//properties
user.name = "Tom";
user.age = 26;
//or while initialization
// const user = {
//     name: "Tom",
//     age: 26
// };

//or

const nameOfPerson = "Tom";
const ageOfPerson = 34;
const user1 = {nameOfPerson, ageOfPerson};
console.log(user1.nameOfPerson);     // Tom
console.log(user1.ageOfPerson);      // 34
// In this case, the variable names are also the names of the object properties

const teacher = {user1, course: "JavaScript"};
console.log(teacher.user1);     // {nameOfPerson: 'Tom', ageOfPerson: 34}
console.log(teacher.course);    // JavaScript

//---!!!methods of obj!!!---
const user = {};
user.name = "Tom";
user.age = 26;
user.display = function(){
     
    console.log(user.name);
    console.log(user.age);
};
// method call
user.display();

//or
const user = {  
    name: "Tom",
    age: 26,
    display: function(){
      
        console.log(this.name);
        console.log(this.age);
    }
};
//or
let user = {
    name: "Tom",
    age: 26,
    display(){
        console.log(this.name, this.age);
    }
};
user.display(); // Tom 26


//  array syntax
const user = {};
user["name"] = "Tom";
user["age"] = 26;
user["display"] = function(){
     
    console.log(user.name);
    console.log(user.age);
};
user["display"]();

// string syntax
const user = {
    "name": "Tom",
    "age": 26,
    "display": function(){
     
        console.log(user.name);
        console.log(user.age);
    }
};
user.display();

// string syntax helps with name of two and more words
const user = {
    name: "Tom",
    age: 26,
    "full name": "Tom Johns",
    "display info": function(){
     
        console.log(user.name);
        console.log(user.age);
    }
};
console.log(user["full name"]);
user["display info"]();

// Dynamic definition of property and method names
// Array syntax opens up another possibility - defining the property name outside the object
const prop1 = "name";
const prop2 = "age";
const tom = {
     [prop1]: "Tom",
     [prop2]: 37
};
console.log(tom); // {name: "Tom", age: 37}
console.log(tom.name); //Tom
console.log(tom["age"]); // 37

// Due to this, for example, you can dynamically create objects with any property names
function createObject(propName, propValue){
     return {
             [propName]: propValue,
             print(){
                 console.log(`${propName}: ${propValue}`);
             }
     };
}
const person = createObject("name", "Tom");
person.print(); // name: Tom
 
const book = createObject("title", "JavaScript Reference");
book.print(); // title: JavaScript Reference

//---!!!deleting prop
let user = {};
user.name = "Tom";
user.age = 26;
user.display = function(){
     
     console.log(user.name);
     console.log(user.age);
};
 
console.log(user.name); //Tom
delete user.name; // remove the property
// Alternative option   -   delete user["name"];
console.log(user.name); //undefined

// Creating obj from vars and consts and func
function getSalary(status){
    if(status==="senior") return 1500;
    else return 500;
}
const name1 = "Tom";
const age = 37;
const person1 = { name: name1, age: age, salary: getSalary()};
 
console.log(person1);    // {name: "Tom", age: 37, salary: 500}

//if name is same even with func
function display(){ 
    console.log(this.name, this.age);
}
const move = function(place){ console.log(this.name, "goes to", place)};
const name2 = "Tom";
const age1 = 37;
const salary1 = 500;
const person2 = { name2, age1, salary1, display, move};
 
console.log(person2);    // {name2: 'Tom', age1: 37, salary1: 500, display: ƒ, move: ƒ}
person.move("cinema");  // Tom goes to cinema


//Object.fromEntries()
// Using the Object.fromEntries() function, you can create an object from a set of key-value pairs, 
// where the key then represents the name of the property.
// Each subarray contains two elements and actually represents a key-value pair. 
// The first element represents the key and the second element represents the value.
const personData = [ ["name", "Tom"], ["age", 37]];
const person3 = Object.fromEntries(personData);
console.log(person3);        // {name: "Tom", age: 37}
console.log(person3.name);    // Tom
