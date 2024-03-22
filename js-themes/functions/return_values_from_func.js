function sum (a, b) {
    return a + b;
  }
let num1 = sum(2, 4);
console.log(num1);  // 6

const num2 = sum(6, 34);
console.log(num2);  // 40

//If we need to return several values, then we can return them as an array
function rectangle(width, height){
 
    const perimeter = width *2 + height * 2;
    const area = width * height;
    return [perimeter, area];
}
 
const rectangleData = rectangle(20, 30);
console.log(rectangleData[0]);  // 100 - perim 
console.log(rectangleData[1]);  // 600 - area

//or obj
function rectangle(width, height){
 
    const rectPerimeter = width *2 + height * 2;
    const rectArea = width * height;
    return {perimeter: rectPerimeter, area: rectArea};
}
 
const rectangleData1 = rectangle(20, 30);
console.log("Perimeter:", rectangleData1.perimeter);  // 100 
console.log("Area:", rectangleData1.area);  // 600 

//Returning a function from a function
function menu(n){
  
    if(n==1) return function(x, y){ return x + y;}
    else if(n==2) return function(x, y){ return x - y;}
    else if(n==3) return function(x, y){ return x * y;}
    return function(){ return 0;}
}
 
let action = menu(1);         // choose first point - addition
const result = action(2, 5);    // execute the function and get the result into the result constant
console.log(result);            // 7

action = menu(2);
console.log(action(2, 5));          // -3
 
action = menu(3);
console.log(action(2, 5));          // 10
 
action = menu(190);
console.log(action(2, 5));          // 0

//you can return functions by name
function sum(x, y){ return x + y;}
function subtract(x, y){ return x - y;}
function multiply(x, y){ return x * y;}
function zero(){ return 0;}
 
function menu(n){
   
    switch(n){
        case 1: return sum;
        case 2: return subtract;
        case 3: return multiply;
        default: return zero;
    }
     
}
  
let action1 = menu(1);
console.log(action1(5, 4));          // 9
  
action1 = menu(2);
console.log(action1(5, 4));          // 1
  
action1 = menu(3);
console.log(action1(5, 4));          // 20
  
action1 = menu(190);
console.log(action1(5, 4));          // 0