// classes are just sugar - js is based on obj and protos 
class Person{}
 
const tom = new Person();

// if class is assign to variable
const User = class Person{}
const bob = new User();
console.log(bob);


//classes with props
class Person{
    name;           //name = "Unknown";     -   can be value by default
    age;            //age= 18;
}
const tom1 = new Person();
tom1.name = "Tom";
tom1.age = 37;
console.log(tom1.name);  // Tom
console.log(tom1.age);   // 37


//with methods
class Person{
    name;
    age;
    move(place){
        console.log(`Go to ${place}`);
    }
    eat(){
        console.log("Eat apples");
    }
    //  ---this---
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
const tom2 = new Person();
tom2.move("Hospital");   // Go to Hospital
tom2.move("Cinema");     // Go to Cinema
tom2.eat();              // Eat apples


//  ---constructor---
class Person{           
    name;           //we can not to create props there, because when we use this, they are creating
    age;
    constructor(pName, pAge){
        this.name = pName;
        this.age = pAge;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
const tom3 = new Person("Tom", 37);
tom3.print();    // Name: Tom  Age: 37
const bob1 = new Person("Bob", 41); 
bob1.print()     // Name: Bob  Age: 41


//Like a constructor function, a class has a prototype that can be obtained using standard methods
class Person{
    constructor(pName, pAge){
        this.name = pName;
        this.age = pAge;
    }
    print(){
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
}
const tom4 = new Person("Tom", 37);
// get a prototype
console.log(Person.prototype); // via the prototype property of the class
console.log(tom4.__proto__); // via the __proto__ property of the object
console.log(Object.getPrototypeOf(tom4)); // via the Object.getPrototypeOf function and the object
console.log(tom4.constructor); // getting the constructor function (type definition) of the object
