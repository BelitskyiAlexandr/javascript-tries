//(parameters) => function_actions

//regular func              // arrow func
function hello(){           // const hello = ()=> console.log("Hello");
    console.log("Hello");   // hello();
}                           //
hello();    // call         //


//with param
const print = (mes)=> console.log(mes);
print("Hello");
print("Welcome to JavaScript");

//return value
const hello = name => `Hello, ${name}`;
 
console.log(hello("Tom"));              // Hello, Tom
console.log(hello("Bob"));              // Hello, Bob
console.log(hello("Frodo Baggins"));    // Hello, Frodo Baggins

//return obj
//An object is defined using curly braces, but it is enclosed in parentheses
const user = (userName, userAge) => ({name: userName, age: userAge});
 
let tom = user("Tom", 34);
let bob = user("Bob", 25);
 
console.log(tom.name, tom.age);     // "Tom", 34
console.log(bob.name, bob.age);     // "Bob", 25

//Multi-instruction arrow function
const square = n => {
    const result = n * n;
    return result;
}
  
console.log(square(5));     // 25