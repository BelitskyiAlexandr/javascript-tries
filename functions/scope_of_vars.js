//JavaScript uses curly braces {} to define local scope to create a block of code.
{
    var a = 5;
    let b = 8;
    const c = 9;
}
// However, in this case, the behavior of the variable depends on the way 
// it is defined (via var or via let) and on the type of the block. 
// var defines function-level local variables, and let/const defines code block-level local variables

//---var---
// unnamed block
{
    var a = 5;
}
console.log("a =", a); // a = 5

// conditional construct
if(true){
    var b = 6;
}
console.log("b =", b); // b = 6

// loop
for(let i = 0; i < 5; i++){
    var c = 7;
}
console.log("c =", c); // c = 7

//The only condition is that the code block must fire to initialize the variable. 
//So, in the example above, the condition in the if construct and in the for loop is set 
//so that a block of these constructs will be executed

if(false){
    var b = 6;
}
console.log("b =", b);  // b = undefined
 
// цикл
for(let i = 1; i < 0; i++){
    var c = 7;
}
console.log("c =", c);  // c = undefined

//---let/const---
{
    let a = 5;
}
console.log("a =", a); // Uncaught ReferenceError: a is not defined
//We can only use let variables defined within a code block within that code block.
//same applies to constants
{
    const b = 5;
}
console.log("b =", b); // Uncaught ReferenceError: b is not defined

//
var z = 89;
function print(){
 
    var z = 10;
    console.log(z); // 10 
                    // the variable z that is defined directly in the function will be used
}
print(); // 10

//the specific behavior when hiding a variable depends on how the variable is defined
//---var---
// With the var operator, we cannot define two variables with the same name at the same time 
// in both a function and a block of code within that function. If we do this, 
// then when we declare a variable at the block level, we change the value of the function level variable

function displayZ(){
  
    var z = 20;
     
    {
        var z = 30; // Не определяет новую переменную, а изменяет значение переменной z уровня функции
        console.log("Block:", z); //Block: 30
    }
    console.log("Function:", z); //Function: 30
}
displayZ();

//---let/const---
let z = 10;
function displayZ(){
    let z = 20;  
    {
        let z = 30;
        console.log("Block:", z);   //Block: 30
    }    
    console.log("Function:", z);    //Function: 20
}
displayZ();
console.log("Global:", z);          //Global: 10

//variable without let or var
{
    username = "Tom"; // is global
}
console.log(username); // no error
{
    console.log(username); // no error, available inside other code blocks
}

//---
function setAge(){
    userage = 39;
}
setAge();
console.log(userage);   // 39
//Even though the userage variable is not defined anywhere outside the setAge,
//it is available outside the function in the external context. 
//The only condition is that we call the function where such a variable is defined.

function setAge(){
    userage = 39;
}

// setAge(); The function is NOT called
console.log(userage); // error - Uncaught ReferenceError: userage is not defined

//strict mode for not create global func
"use strict"; // use strict mode
 
username = "Tom"; // Uncaught ReferenceError: username is not defined
console.log(username);

//func
function setAge(){
    userage = 39; // Uncaught ReferenceError: userage is not defined
}
setAge();
console.log(userage);

//strict mode in func
username = "Tom"; // ok
console.log(username); //Tom

function setAge(){
    "use strict"; // use strict mode at the function level
    userage = 39; // Uncaught ReferenceError: userage is not defined
}
setAge();
console.log(userage);