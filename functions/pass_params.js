//by value
//Strings, numbers, boolean values are passed to the function by value
function change(x){
    x = 2 * x;
    console.log("x in change:", x);
}
 
let n = 10;
console.log("n before change:", n); // n before change: 10
change(n);                          // x in change: 20
console.log("n after change:", n);  // n after change: 10

//by ref
//Objects and arrays represent reference types.
function change(user){
    user.name = "Tom";
}
 
let bob ={ 
    name: "Bob"
};
console.log("before change:", bob.name);    // Bob
change(bob);
console.log("after change:", bob.name);     // Tom

//but if change obj in func completely
function change(user){
    // complete new object
    user= { name:"Tom" };
}
 
let bob1 ={ 
    name: "Bob"
};
console.log("before change:", bob1.name);    // Bob
change(bob1);
console.log("after change:", bob1.name);     // Bob

//same with arrays
function change(array){
    array[0] = 8;
}
function changeFull(array){
    array = [9, 8, 7];
}
 
let numbers = [1, 2, 3];
 
console.log("before change:", numbers);     // [1, 2, 3]
change(numbers);
console.log("after change:", numbers);      // [8, 2, 3]
changeFull(numbers);
console.log("after changeFull:", numbers);  // [8, 2, 3]