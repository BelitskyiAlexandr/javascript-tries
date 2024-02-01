// changes to the object may be undesirable. three mechanisms for this:
// prohibition of object expansion
// closing (sealing) objects
// freezing objects

//Object.preventExtensions() method allows you to prevent the extension of an object:
//new properties and methods cannot be added to this object
const tom = {name: "Tom"};
Object.preventExtensions(tom); // disable extension of tom object
tom.company = "Localhost"; // trying to add a new property to the tom object
console.log(`Name: ${tom.name} Company: ${tom.company}`); // Name: Tom Company: undefined

//check if can be extended
const tom1 = {name: "Tom"};
console.log(Object.isExtensible(tom1));  // true
Object.preventExtensions(tom1);  // disable extension of tom object
console.log(Object.isExtensible(tom1));  // false

//Closing or "sealing" objects also allows you to prevent objects from expanding. 
//But in addition, it also prohibits customization of already existing properties 
//Object.seal()
const tom = {name: "Tom"};
Object.seal(tom); // close the tom object from expansion and configuration changes
// for the name property we prohibit changes
Object.defineProperty(tom, "name", { writable: false});
tom.name = "Tomas";
 
// add a new property - age
tom.age = 39;
console.log(`Name: ${tom.name} Age: ${tom.age}`); // Name: Tom Age: undefined
 
// allow change for the name property
Object.defineProperty(tom, "name", { writable: true}); // Uncaught TypeError: Cannot redefine property: name

//freezing allows you to prohibit changing property values, it allows you to make an object completely constant
//Thus, simply defining an object as a regular constant using the const operator is not enough:
const tom = {name: "Tom"};
tom.name= "Tomas";
console.log(tom.name); //Tomas

//Object.freeze();
const tom = {name: "Tom"};
Object.freeze(tom);
tom.name= "Tomas"; // property value cannot be changed
console.log(tom.name); //Tom

//frozen object is an extreme degree of prohibition of changes to an object. 
//Accordingly, such an object is not extensible, and the configuration of its properties also cannot be changed
const tom = {name: "Tom"};
console.log(Object.isExtensible(tom));  // true
console.log(Object.isSealed(tom));      // false
console.log(Object.isFrozen(tom));      // false
Object.freeze(tom);
console.log(Object.isExtensible(tom));  // false
console.log(Object.isSealed(tom));      // true
console.log(Object.isFrozen(tom));      // true