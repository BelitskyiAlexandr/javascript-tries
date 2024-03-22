function print(message){
    console.log(message);
}
 
print("Hello JavaScript");
print("Function in JavaScript");

//!!! func with param can be called without ones
//If parameter has no value, then it will have the value undefined.
print();

//some params --- params are positioned
function sum(a, b){
    const result = a + b;
    console.log(result);
}
 
sum(2, 6);          // 8

//arrays
function printPerson(person) {
    console.log("Name:", person[0]);
    console.log("Age:", person[1]);
    console.log("Email:", person[2]);
    console.log("=========================");
}
const tom = ["Tom", 39, "tom@example.com"]; 
const bob = ["Bob", 43, "bob@example.com"]; 
 
printPerson(tom);
printPerson(bob);

//spread operator
function printPersonAnother(username, age, email) {
    console.log("Name:", username);
    console.log("Age:", age);
    console.log("Email:", email);
    console.log("=========================");
}
//To sequentially pass array elements to function parameters, 
//specify a spread operator before the array name:
printPersonAnother(...tom);
printPersonAnother(...bob);

// not necessary params; undefined - default
function sum(x, y){
 
    if(y === undefined) y = 5;
    if(x === undefined) x = 8;
    const z = x + y;
    console.log(z);
}
/* or better func
function sum(x = 8, y = 5){     if param is undefined then in head of func you can define 
                                default value
    const z = x + y;
    console.log(z);
}
*/
sum();          // 13
sum(6);         // 11
sum(6, 4)       // 10

//Functions with an arbitrary set of parameters
//we can get all the passed parameters through the arguments object 
//available inside the function
function sum(){
    let result = 0;
    for(const n of arguments)
        result += n;
    console.log(result);
}
sum(6);             // 6
sum(6, 4)           // 10
sum(6, 4, 5)        // 15

//arguments with defined params
function sum(a, b, c){
    console.log("a =", a);
    console.log("b =", b);
    console.log("c =", c);
 
    let result = 0;
    for(const n of arguments)
        result += n;
    console.log("result =", result);
}
sum(6, 4, 5, 8)     // 23

//rest operator
//Using the '...' operator (rest operator) you can also pass 
//a variable number of values:
function sum(...numbers){
    let result = 0;
    for(const n of numbers)
        result += n;
    console.log(result);
}
sum(6, 4, 5)     // 15

//rest parameters can be combined with regular parameters:
function display(season, ...temps){
    console.log(season);
    for(index in temps){
        console.log(temps[index]);
    }
}
display("Spring", -2, -3, 4, 2, 5);
display("Summer", 20, 23, 31);

//Array as parameter
function sum(numbers){
    let result = 0;
    for(const n of numbers)
        result += n;
    console.log("result =", result);
}
const nums = [6, 4, 5, 8];
sum(nums)     // result = 23

//Functions as parameters
function sum(x, y){
    return x + y;
}
 
function subtract(x, y){
    return x - y;
}
 
//func - represents a function, and at the time of defining operation 
//it doesn`t matter what kind of function it will be. 
//The only thing that is known is that the func function can take two parameters 
//and return a value

function operation(x, y, func){
  
    const result = func(x, y);
    console.log(result);
}
 
console.log("Sum");
operation(10, 6, sum);  // 16
 
console.log("Subtract");
operation(10, 6, subtract); // 4