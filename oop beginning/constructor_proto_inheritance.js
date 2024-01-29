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