// Object.assign(target, ...sources)
// The first parameter, target, represents the object to which the properties should be copied. 
// The second parameter is ...sources - a set of objects from which properties need to be copied 
// (we can copy properties from several objects at once)

// The method returns a target object into which the properties from the sources objects are copied.
const tom = { name: "Tom", age: 37};
const bob = Object.assign({}, tom);
bob.name = "Bob";
bob.age = 41;
         
console.log(`Object tom. Name: ${tom.name} Age: ${tom.age}`);
console.log(`Object bob. Name: ${bob.name} Age: ${bob.age}`);
// In this case, calling Object.assign({}, tom) means that we are copying the data 
// from the tom object to an empty {} object. The result of this copying was the bob object. 
// Moreover, this is a completely different object than tom. 
// And any changes to the bob constant here will not affect the tom constant in any way.

// Console output of the program:
// tom object. Name: Tom Age: 37
// Bob object. Name: Bob Age: 41

// can copy data from multiple objects

const tommy = { name: "Tommy"};
const sam = { age: 37};
const person = { height: 170};
Object.assign(person, tommy, sam); // copy from tom and sam to person
console.log(person); // {height: 170, name: "Tommy", age: 37}


// If the objects from which you are copying contain the same properties, 
// then the properties from the latest objects replace the properties of the previous ones
const tom1 = { name: "Tom1", age: 37};
const sam1 = { age: 45 };
const person1 = { height: 170};
Object.assign(person1, tom1, sam1);
console.log(person); // {height: 170, name: "Tom1", age: 45}

//
const tom2 = { name: "Tom", company: {title: "Microsoft"}};
const bob = Object.assign({}, tom2);
bob.name = "Bob";
bob.company.title = "Google";
console.log(tom2.name); //Tom
console.log(tom2.company.title); // Google
// Here, the company property of the tom object represents an object with one property. 
// nd when copied, the bob object will not receive a copy of the tom.company value, 
// but a reference to this object. Therefore, changes to bob.company will also affect tom.company.


//spread operator
// The spread operator ... allows you to split an object into different 
// property-value pairs that can be passed to another object.

const tom3 = { name: "Tom", age: 37, company: "Google"};
const bob1 = {...tom3}
bob1.name = "Bob";
          
console.log(tom3); // {name: "Tom", age: 37, company: "Google"}
console.log(bob1); // {name: "Bob", age: 37, company: "Google"}
// In this case, copies of the properties of the tom object are passed to the bob object.
//or
const bob2 = {...tom3, name: "Bob"};
console.log(bob2);   // {name: "Bob", age: 37, company: "Google"}

//if objects contain nested objects, then these nested objects, when copied, will 
// essentially represent references to the same object:
const tom4 = { name: "Tom", age: 37, company: {title: "Microsoft"}};
const bob3 = {...tom4}
bob3.name = "Bob";
bob3.company.title = "Google";
 
console.log(`${tom4.name} - ${tom.company.title}`); // Tom - Google
console.log(`${bob3.name} - ${bob.company.title}`); // Bob - Google

//comparing
const tom5 = { name: "Tom"};
const bob4 = tom5;
console.log(tom5 == bob4);    // true
console.log(tom5 === bob4);   // true

const tom6 = { name: "Tom"};
const bob5 = { name: "Bob"};
console.log(tom6 == bob5);    // false
console.log(tom6 === bob5);   // false