// definition of a constructor for objects of type Person
function Person(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.print = function(){
        console.log(`Name: ${this.name} Age: ${this.age}`);
    };
}
// definition of an object of type Person                       !!!word `new` is a must!!!
//                                                        because of new scope of this is internal!!
const tom = new Person("Tom", 39);
// accessing an object property
console.log(tom.name); // Volume
// calling an object method
tom.print(); // Name: Tom Age: 39

//using constructors in collections
function printPersonName(person){
    console.log(person.name);
}
// array of three Person objects
const people = [new Person("Tom", 39), new Person("Bob", 43), new Person("Sam", 28)];

for(let person of people){
    printPersonName(person);
}


// instanceof
// definition of a constructor for objects of type Employee
function Employee(eName, eCompany) {
    this.name = eName;
    this.company = eCompany;
    this.print = function(){
        console.log(`Name: ${this.name} Company: ${this.company}`);
    };
}
//const tom = new Person("Tom", 39);        initialized above 
const bob = new Employee("Bob", "Google");

console.log(tom instanceof Person); // true - tom is an object of type Person
console.log(bob instanceof Employee); // true - bob is an object of type Employee
console.log(tom instanceof Employee); // false - tom is NOT an object of type Employee