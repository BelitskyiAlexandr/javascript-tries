// user constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log(`Person ${this.name} says "Hello"`);
    };
}
// add a prototype to the function
Person.prototype.print = function(){
    console.log(`Name: ${this.name} Age: ${this.age}`);
};


// worker constructor
function Employee(name, age, comp){
    //In the Employee constructor, the Person constructor is called 
    Person.call(this, name, age); // use the Person constructor
    // Passing the first parameter allows you to call the Person constructor function on the object 
    // created by the Employee constructor. This ensures that all properties and methods 
    // defined in the Person constructor are also passed down to the Employee object.

    this.company = comp;
    this.work = function(){
        console.log(`${this.name} works in ${this.company}`);
    };

    // override the sayHello method
    this.sayHello = function(){
        console.log(`Employee ${this.name} says "Hello"`);
    };
}
// inherit the prototype from Person
// it is also necessary to inherit the Person prototype, 
// so all functions defined through the prototype
Employee.prototype = Object.create(Person.prototype);
/* 
instead of calling the Object.create() method to set the prototype, 
you can use a call to the inherited constructor:

Employee.prototype = new Person();

As a result, an object will be created whose prototype (Employee.prototype.__proto__) 
will point to the Person prototype
*/

// created prototype object will point to the Person constructor. 
// so we also install the required constructor
Employee.prototype.constructor = Employee;

// ---examples of use
// create an Employee object
const tom = new Employee("Tom", 39, "Google");
// accessing an inherited property
console.log("Age:", tom.age);
// calling an inherited method
tom.sayHello(); // Person Tom says "Hello"
// calling the inherited prototype method
tom.print(); // Name: Tom Age: 39
// call to own method
tom.work(); // Tom works in Google


//overriding
//sayHello (in the constructor) and print() (in the prototype)
//override the print method
Employee.prototype.print = function(){
    console.log(`Name: ${this.name} Age: ${this.age} Company: ${this.company}`);
};
tom.sayHello();    // Employee Tom says "Hello"         --override on line 28 
tom.print();    // Name: Tom  Age: 39  Company: Google

//Calling a parent prototype method
//In a descendant prototype, you may need to call a method from a parent prototype
//this may be necessary to shorten the code logic if the logic of the descendant method 
//repeats the logic of the parent method
// override the print method
Employee.prototype.print = function(){
    Person.prototype.print.call(this); // call the print method from Person
    console.log(`Company: ${this.company}`);
};
tom.print();    // Name: Tom  Age: 39  
                // Company: Google


//Problems with prototypic inheritance
//Employee type takes over not only all the current properties and methods from the Person prototype,
//but also those that will be subsequently added dynamically. For example:
Person.prototype.sleep = function() {console.log(`${this.name} sleeps`);}
tom.sleep();    // Tom sleeps
//Here the sleep method is added to the Person prototype. 
//Moreover, it is added after the creation of the tom object, which represents the Employee type. 
//However, even on this object we can call the sleep method.


//  !!!     through the prototype of the successor constructor, 
//  !!!     you can change the prototype of the parent constructor
// change the print method in the base Person prototype
Employee.prototype.__proto__.print = function(){ console.log("Person prototype hacked");};
// create a Person object
const bob = new Person("Bob", 43);
bob.print(); //Person prototype hacked