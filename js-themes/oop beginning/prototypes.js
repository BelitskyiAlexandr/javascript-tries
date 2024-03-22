const tom = {name: "Tom", age: 39};
 
console.log(tom.__proto__);  
/*Object
    constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: f isPrototypeOf()
    propertyIsEnumerable: f propertyIsEnumerable()
    toLocaleString: f toLocaleString()
    toString: f toString()
    valueOf: f valueOf()
    __defineGetter__: f __defineGetter__()
    __defineSetter__: f __defineSetter__()
    __lookupGetter__: f __lookupGetter__()
    __lookupSetter__: f __lookupSetter__()
    __proto__: null
    get __proto__: f __proto__()
    set __proto__: f __proto__() 
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    };
}
 
const tom1 = new Person("Tom", 39);
 
// получаем прототип
console.log(Person.prototype);
console.log(tom1.__proto__);
console.log(Object.getPrototypeOf(tom1));
/*
{constructor: ƒ}
constructor : ƒ Person(name, age)
[[Prototype]] : Object

Constructor     \     prototype   
this.name        --      constructor
this.age
this.print
*/

function Person1 (name, age) {
    this.name = name;
    this.age = age;
}
//add print to proto 
Person1.prototype.print = function(){
    console.log(`Name: ${this.name}  Age: ${this.age}`);
};
 
console.log(Person1.prototype);
/*
Constructor     \     prototype   
this.name        --     constructor
this.age                this.print
*/

// can add properties in proto
const tom2 = new Person("Tom", 39);
const bob = new Person("Bob", 43);
 
// add the company property to the prototype
Person.prototype.company = "SuperCorp";
console.log(tom2.company); // SuperCorp
console.log(bob.company); // SuperCorp
//But it is important to note that the value of the company property will be the same for all objects; 
//it is a shared static property. Unlike, say, the this.name property, 
//which stores a value for a specific object.

//methods, props defined inside the constructor will hide the prototype methods of the same name.