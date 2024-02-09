//  !!!Static fields and methods apply to the entire class, not to an individual object
class Person{
    static retirementAge = 65;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){ 
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`); 
    }
}
 
console.log(Person.retirementAge); // 65
Person.retirementAge = 62;
console.log(Person.retirementAge); // 62

/*
print(){ 
        console.log(`Name: ${this.name}  Age: ${this.age}`); 
        console.log(`Retirement age: ${this.retirementAge}`);   // a static field cannot be accessed via this in non-static methods
}

//  right version:
print(){ 
    console.log(`Name: ${this.name}  Age: ${this.age}`); 
    console.log(`Retirement age: ${Person.retirementAge}`);
}
*/

//static method
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
    static printClassInfo(){
        console.log("The Person class represents a person");
    }
}
Person.printClassInfo(); // The Person class represents a person

//If it is necessary to access the properties of an object in a static method, 
//then we can define a parameter in the method through which the object will be passed to the method:
class Person{
     constructor(name, age){
         this.name = name;
         this.age = age;
     }
     static print(person){
         console.log(`Name: ${person.name} Age: ${person.age}`);
     }
}
const tom = new Person("Tom", 37);
const bob = new Person("Bob", 41);
Person.print(tom); //Tom 37
Person.print(bob); // Bob 41


//we can use the this word in static methods to refer to static fields and other static methods:
class Person{
    //static fields and methods can be private
    //such fields and methods are only accessible from other static methods of the class
    static #retirementAge = 65;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
    static calculateRestAges(person){
        if(this.retirementAge > person.age){
            const restAges = this.retirementAge - person.age;
            console.log(`${restAges} years left until retirement`);
        }
        else console.log("You are already retired");
    }
}
// console.log(Person.#retirementAge); // ! Error: retirementAge field is private
const tom = new Person("Tom", 37);
Person.calculateRestAges(tom); // 28 years left until retirement
const bob = new Person("Bob", 71);
Person.calculateRestAges(bob); // You are already retired