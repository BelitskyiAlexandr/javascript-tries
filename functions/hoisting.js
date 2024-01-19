console.log(foo); //ReferenceError: foo is not defined
//-----
console.log(foo);   // undefined
var foo = "Tom";

var c = a * b;
var a = 7;
var b = 3;
console.log(c); // NaN
// The variables a and b are used until they are defined. By default they are assigned the value undefined. 
// And if we multiply undefined by undefined, we get Not a Number (NaN)

// same for func
display();
 
function display(){
    console.log("Hello Hoisting");
}
// Here the display function will work safely, despite the fact that it is defined after the call.

//But we must distinguish from this situation the case when the function is defined as a variable
display();
var display = function (){
    console.log("Hello Hoisting");
}
//TypeError: display is not a function
// On the first pass, the compiler will also receive the display variable and assign it the value undefined. 
// On the second pass, when it is necessary to call the function to which this variable will refer, 
// the compiler will see that there is nothing to call: the display variable is still undefined. 
// And an error will be thrown

// unlike var variables, constants and let variables are not assigned an initial value during hosting
console.log(foo); // Uncaught ReferenceError: Cannot access 'foo' before initialization
let foo = "Tom";
console.log(foo); // will not be executed

//but

let foo;            // by default foo = undefined
console.log(foo);   // undefined
foo = "Tom";
console.log(foo);   // Tom