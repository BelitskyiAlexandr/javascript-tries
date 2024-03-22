function hello(){
 
    console.log("Hello");
}

//anon func
const message = function(){
 
    console.log("Hello JavaScript");
}
message();

//localfunc
//JavaScript allows you to define local functions - functions inside other 
//functions. Local functions are visible only within the outer function 
//in which they are defined.

function print(){
     
    printHello();
    printHello();
    printHello();
 
    function printHello(){
        console.log("Hello");
    }
}
print();
printHello();   // Uncaught ReferenceError: printHello is not defined