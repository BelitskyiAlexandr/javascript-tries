//operators of comparison
// ==, !=, >, <, >=, <=
// new:     === - compare types and values
//          !== - inverted compare types and values

//logical operators
// &&, || 

//data types transformation into boolean
// null         -       false
// indefined    -       false
// 0 or NaN     -       false
// 1 of num     -       true
// ""           -       false
// "not empty"  -       true
// {any obj}    -       true

//examles
let name_of = "tom";

console.log(false && name_of);  //false
console.log(name_of && null);   //null
console.log(true && name_of);   //tom

console.log(false || name_of);  //tom
console.log(name_of || null);   //tom
console.log(true || name_of);   //true

let isAlive;            //indefined
console.log(!isAlive);  //true
console.log(!null);     //true
console.log(!0);        //true
console.log(!10);       //false
console.log(!"");       //true
console.log(!"tom");    //false

//conditionals
const age = 22;
age <= 17 && console.log("You can't come");
age >= 17 && console.log("You're welcome");
// if use ||: false || execute second statement 
//          : true || don`t execute

// special assignment
// &&=  -   a = a && b
let x1 = true; 
let y1 = false; 
y1 &&= x1; 
console.log(y1); // false 
  
let c1 = false; 
let d1 = true; 
c1 &&= d1; 
console.log(c1); // false 
  
let a1 = true; 
let b1 = true; 
a1 &&= b1; 
console.log(a1); // true 
  
let e1 = false; 
let f1 = false; 
e1 &&= f1; 
console.log(e1); // false 


// ||=  -   a = a || b   
let x2 = true; 
let y2 = false; 
y2 ||= x2; 
console.log(y2); // true 
  
let a2 = true; 
let b2 = true; 
a2 ||= b2; 
console.log(a2); // true 
  
let c2 = false; 
let d2 = true; 
c2 ||= d2; 
console.log(c2); // true 
  
let e2 = false; 
let f2 = false; 
e2 ||= f2; 
console.log(e2); // false


// ? and ??
const a3 = 1;
const b3 = 2;
const res = a < b ? a: b; // also can be res = a < b ? a + b: b - a;
console.log(res) // 1 

// ?? - check if null or undefined
// The operator returns the value of the left operand if it is NOT null or undefined. 
// Otherwise, the value of the right operand is returned.
const result = "hello" ?? "world"; 
console.log(result);    // hello 
  
console.log(0 ?? 5);    // 0 
  
console.log("" ?? "javascript");    // "" - empty string 
  
console.log(false ?? true); // false 
  
console.log(null ?? "not null");    // not null 
  
console.log(undefined ?? "defined");    // defined 
  
console.log(null ?? null);  // null 
console.log(undefined ?? undefined);    // undefined

// ??=
// If the left operand is null and undefined, then it is assigned the value of the right operand. 
// Otherwise, the left operand retains its value.
const message1 = "Hello JavaScript"; 
let text1 = "Hello work!" 
text1 ??= message1; 
console.log(text1);  // Hello work! 

const message2 = "Hello JavaScript"; 
let text2 = null; 
text2 ??= message2; 
console.log(text2);  // Hello JavaScript 