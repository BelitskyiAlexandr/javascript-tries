//To create an object based on some prototype, use the Object.create() function, 
//to which the inherited prototype is passed:

const person = {
     name: "",
     age: 0,
     print: function(){
         console.log(`Name: ${this.name} Age: ${this.age}`);
     }
};
 
const employee = Object.create(person); // employee uses the prototype of the person object
 
// get a prototype
console.log(employee.__proto__); // {name: "", age: 0, print: ƒ}
 
employee.name = "Tom";
employee.age = 39;
employee.print(); // Name: Tom Age: 39

//also we can add new props and methods:
employee.company = "Google";  // new property
// new method
employee.work = function(){ 
    console.log(`${this.name} works in ${this.company}`);
}
employee.print();    // Name: Tom  Age: 39
employee.work();    // Tom works in Google

//we can override methods:
// override print
employee.print = function(){ 
    console.log(`Name: ${this.name}  Age: ${this.age} Company: ${this.company}`);
}
employee.print();    // Name: Tom  Age: 39  Company: Google

//use of proto props, methods
employee.print = function(){
    this.__proto__.print.call(this); // call the version of the method from person
    // Object.getPrototypeOf(this).print.call(this); // Alternative option
    console.log(`Company: ${this.company}`);
}
employee.print(); // Name: Tom Age: 39
                    // Company: Google

//we can use the Object.isPrototypeOf() method to check whether an object is a prototype of another object:
const person1 = {
     name: "",
     print: ()=>console.log("Name:", this.name)
};
const user1 = {
     name: "",
     print: ()=>console.log("Name:", this.name)
};
 
// the employee object inherits the prototype of the person object
const employee1 = Object.create(person1);
 
console.log(person1.isPrototypeOf(employee1)); // true
console.log(user1.isPrototypeOf(employee1)); // false