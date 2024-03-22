// func is also obj
//All functions that are used in a program are Function objects and have all of its properties and methods.
//function using the Function constructor:

const square = new Function("n", "return n * n;");
console.log(square(5)); // 25
//The last parameter is the function body itself as a string. 
//The line actually contains javascript code. 
//The previous arguments contain the names of the parameters.

/*
Among the properties of the Function object are the following:
    arguments: array of arguments passed to the function
    length: determines the number of arguments the function expects
    caller: identifies the function that called the currently running function
    name: function name
    prototype: function prototype
*/

// call() method calls a function with the specified this value and arguments:

function sum(x, y){
     
     return x + y;
}
const result = sum.call(this, 3, 8);
 
console.log(result); // eleven

//this points to the object on which the function is called - 
//in this case the global window object. After this, the values for the parameters are passed.
//When passing an object as the first parameter, we can refer to it using the this keyword:

function User(name, age) {
     this.name = name;
     this.age = age;
}
const tom = new User("Tom", 39);
function print(){
     console.log("Name:", this.name);
}
print.call(tom); // Name: Tom

//In this case, only one value is passed because the print function takes no parameters. 
//That is, the function will be called on the tom object.
//If we don’t care about the object for which the function is called, then we can pass the null value

function sum(x, y){
     
     return x + y;
}
const result1 = sum.call(null, 3, 8);
 
console.log(result1); // 11

//The call() method is similar to the apply() method, 
//which also calls a function and also receives the object on which the function is called 
//as the first parameter. Only now an array of arguments is passed as the second parameter:

function sum(x, y){
     
     return x + y;
}
const result2 = sum.apply(null, [3, 8]);
 
console.log(result2); // 11