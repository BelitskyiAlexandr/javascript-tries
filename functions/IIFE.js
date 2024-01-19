//closures and IIFE functions

// closures are a construct where a function created in one scope 
// remembers its lexical environment even when it executes outside its scope
/*
To organize a closure, three components are needed:
    - an external function that defines some scope and in which some variables are defined - the lexical environment
    - variables (lexical environment) that are defined in the outer function
    - nested function that uses these variables

function outer(){       // external func
    let n;              // variable
    return inner(){     // nested func
        // some actions
    }
}
*/
//---Example---
function outer(){
    let x = 5;
    function inner(){
        x++;
        console.log(x);
    };
    return inner;
}
const fn = outer(); // fn = inner, since the outer function returns the inner function
// call inner
fn();   // 6
fn();   // 7
fn();   // 8

//for each copy of the closure, its own copy of the lexical environment is defined
const fn1 = outer();
const fn2 = outer();
fn1();  // 6
fn1();  // 7
fn2();  // 6
fn2();  // 7

//---
function multiply(n){
    let x = n;
    return function(m){ return x * m;};
}
const fc1 = multiply(5);
const result1 = fc1(6); // 30
console.log(result1); // 30
 
const fc2= multiply(4);
const result2 = fc2(6); // 24
console.log(result2); // 24

// another way to call closure
const result = multiply(5)(6); // 30
console.log(result);

// Immediately Invoked Function Expression or IIFE
// self-calling function
(function(){
    console.log("Hello world");
}( ));
//^ These parentheses represent the same parentheses that go into a function call and 
// into which the values for the function's parameters are placed. However, our anonymous function has no parameters, 
// so the parentheses are empty. That is, here the function is actually called immediately after its definition. 
// And this whole structure is wrapped in brackets.
//---
(function (a, b){
      
    const result = a + b;
    console.log(`${a} + ${b} = ${result}`);
}(4, 5));