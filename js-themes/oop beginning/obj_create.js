// variable = Object.create(prototype, { properties and methods });
const tom = Object.create(Object.prototype, {  
    name: {    
        value: "Tom"
    },  
    age: { 
        value: 39  
    },  
    print: {    
        value: function() { console.log(`Name: ${this.name}  Age: ${this.age}`);   
    }  
}});
 
console.log(tom.name);  // Tom
console.log(tom.age);   // 39
tom.print();            // Name: Tom  Age: 39
/*
There is not only value field:
    writeable: stores a boolean value that indicates whether this property is writable, 
               that is, whether it can be assigned a new value. By default, this attribute is false
    enumerable: stores a boolean value that indicates whether the corresponding property 
                is enumerable. The default value is false.
    configurable: stores a boolean value that indicates whether the attribute itself 
                  for the corresponding property can be changed. 
                  The default value for this attribute is also false
    set: defines which function is called when the property value changes
    get: determines which function is called when the property value is read
*/

const tom1 = Object.create(Object.prototype, {
    name: {
        value: "Tom",
        enumerable: true, // iterable
        writable: false // NOT writable
    },
    age: {
        value: 39,
        enumerable: true, // iterable
        writable: true // writable
    },
    print: {
        value: function() { console.log(`Name: ${this.name} Age: ${this.age}`);},
        enumerable: false, // not iterable
        writable: false, // NOT writable
    }
});

console.log(tom1.name); //Tom
tom1.name = "Tomas";
console.log(tom1.name); // Tom - the name property is not editable

console.log(tom1.age); // 39
tom1.age = 22;
console.log(tom1.age); // 22 - the age property can be changed

tom1.print(); // Name: Tom Age: 22

// iterate over object
for(prop in tom1){
    console.log(prop);
}
// Console output:
//name
// age

// code above has a lot of code for creating. so, if we need configuration only for one pror
// we should use Object.defineProperty:
const tom2 = {
    age:39,
    print: function() { console.log(`Name: ${this.name} Age: ${this.age}`);}
};
Object.defineProperty(tom2, "name", {
        value: "Tom",
        writable: false // NOT writable
});

console.log(tom2.name); //Tom
tom2.name = "Tomas";
console.log(tom2.name); // Tom - the name property is not editable

tom2.print(); // Name: Tom Age: 22

//for multiply props:
const tom3 = { age:39 };
//define properties for the tom object
Object.defineProperties(tom3, {
     name: { // define the name property
         value: "Tom",
         writable: false // NOT writable
     },
     print: { // define the print method
         value: function() { console.log(`Name: ${this.name} Age: ${this.age}`);},
         writable: false, // NOT writable
     }
});
 
tom3.name = "Tomas"; // the name property is not editable
tom3.print = function(){console.log("Hello Word");} // the print method is not editable
 
tom3.print(); // Name: Tom Age: 39

//way we can override the configuration of already existing properties. For example:
const tom4 = {name: "Tom"};
// for the name property we prohibit changes
Object.defineProperty(tom4, "name", { writable: false});
tom4.name = "Tomas";
console.log(tom4.name); // Tom - the property value has not changed