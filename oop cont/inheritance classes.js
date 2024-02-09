class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
class Employee extends Person{
    company;
    work(){
        console.log(`${this.name} works in ${this.company}`);
    }
}
  
const tom = new Person("Tom", 34);
tom.print();    // Name: Tom  Age: 34
 
const sam = new Employee("Sam", 25);    // inherited constructor
sam.print();    // Name: Sam  Age: 25


//If a derived class defines a constructor, then the base class constructor must be called in it
//To access the functionality of the base class in a derived class, 
//including access to the constructor of the base class, use the `super` keyword
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
class Employee extends Person{
     
    constructor(name, age, company){
        super(name, age);
        this.company = company;
    }
    work(){
        console.log(`${this.name} works in ${this.company}`);
    }
}
  
const tom = new Person("Tom", 34);
tom.print();    // Name: Tom  Age: 34
 
const sam = new Employee("Sam", 25, "Google");
sam.print();    // Name: Sam  Age: 25
sam.work();     // Sam works in Google


//override methods
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
class Employee extends Person{
     
    constructor(name, age, company){
        super(name, age);
        this.company = company;
    }
    //overriding is by only using the same name 
    print(){
        super.print();
        console.log(`Company: ${this.company}`);
    }
}
const sam = new Employee("Sam", 25, "Google");
sam.print();    // Name: Sam  Age: 25
                // Company: Google


//private
//when inheriting, it is worth considering that a derived class can access any functionality 
//of the base class, except for private fields and methods. For example:
class Person{
     #name;
     constructor(name, age){
         this.#name = name;
         this.age = age;
     }
     print(){
         console.log(`Name: ${this.#name} Age: ${this.age}`);
     }
}
class Employee extends Person{
     
     constructor(name, age, company){
         super(name, age);
         this.company = company;
     }
     print(){
         super.print();
         console.log(`Company: ${this.company}`);
     }
     work(){
         console.log(`${this.#name} works in ${this.company}`); // ! Error - #name field is not accessible from Employee
                                                                // to fix this problem could be created get&set in super
     }
}

//The fact that a descendant class is inherited from some base class means that 
//an object of the descendant class is also an object of the base class
//you can check which class an object is an object using the instanceof operator
class Person{
     constructor(name, age){
         this.name = name;
         this.age = age;
     }
     print(){
         console.log(`Name: ${this.name} Age: ${this.age}`);
     }
}
class Employee extends Person{
     
     constructor(name, age, company){
         super(name, age);
         this.company = company;
     }
     print(){
         super.print();
         console.log(`Works in ${this.company}`);
     }
}
class Manager extends Person{
 
     constructor(name, age, company){
         super(name, age);
         this.company = company;
     }
     print(){
         super.print();
         console.log(`Manager in ${this.company}`);
     }
}
const sam = new Employee("Sam", 25, "Google");
console.log(sam instanceof Person); // true
console.log(sam instanceof Employee); // true
console.log(sam instanceof Manager); // false