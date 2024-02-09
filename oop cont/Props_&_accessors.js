class Person{
    #ageValue = 1;
    constructor(name, age){
        this.name = name;
        this.setAge(age);
    }
    getAge(){
        return this.#ageValue;
    }
    setAge(value){ if(value>0 && value < 110) this.#ageValue = value; }
}
const tom = new Person("Tom", 37);
console.log(tom.getAge());  // 37
tom.setAge(-15);
console.log(tom.getAge());  // 37

/*
// definition of a private field
#field;
setfield(value) {
      this.#field=value;
}
getfield(){
      return this.#field;
}
*/

/// code review:
class Person{
    #ageValue = 1;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    set age(value){
        console.log(`Set new ${value}`);
        if(value>0 && value < 110) this.#ageValue = value;
    }
    get age(){
        return this.#ageValue;
    }
}
const tom1 = new Person("Tom", 37);
console.log(tom1.age);
tom1.age = -15;
console.log(tom1.age);
// Set new 37
// 37
// Set new -15
// 37

//  We can use methods get&set to fields to be read-only or write-only
class Person{
    #age = 1;
    #name;
    #id;
    constructor(name, age){
        this.#name = name;
        this.age = age;
    }
    //set name(value){ this.#name = value; }
    set id(value){ this.#id = value;}
    get name(){ return this.#name; }
    set age(value){ if(value>0 && value < 110) this.#age = value; }
    get age(){ return this.#age; }
    print(){
        console.log(`id: ${this.#id}   name: ${this.name}   age: ${this.age}`);
    }
}
const tom = new Person("Tom", 37, 1);
tom.print(); // id: 1 name: Tom age: 37
tom.id = 55; // set the value of the id property
tom.print(); // id: 55 name: Tom age: 37
console.log(tom.id); // undefined - the value of the id property cannot be obtained

console.log(tom.name); //Tom
tom.name = "Bob"; // This will do nothing
console.log(tom.name); // Tom - the value has not changed


// get&set are not only for fields
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){ return `${this.firstName} ${this.lastName}` }
    set fullName(value){ 
        [this.firstName, this.lastName] = value.split(" ");
    }
}
const tom = new Person("Tom", "Smith");
console.log(tom.fullName);  // Tom Smith
tom.fullName = "Tomas Jefferson";
console.log(tom.fullName);  // Tomas Jefferson
