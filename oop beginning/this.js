// in a web browser, this represents the window object - the object that represents the browser window
// in Node.js, this represents the global object
// for web this represents the self object
//in web browser:
console.log(this);
//we'll get smth like:
// Window {0: Window, 1: Window, window: Window, self: Window, document: document, name: '', location: Location, …}


//!!! in func this - global vars !!!
function foo(){
    var bar = "local";
    console.log(this.bar);
}
 
var bar = "global";
 
foo();  // global

//but
function foo(){
    var bar = "local";
    console.log(bar);
}
 
var bar = "global";
 
foo();  // local

// !!! obj this - ref on itself !!!
const obj = {
    bar: "object",
    foo: function(){
        console.log(this.bar);
    }
}
var bar = "global";
obj.foo();  // object


//Dynamic context detection
//Function code always uses as this the external context in which this code is called (called, not defined).
function foo(){
    var bar = "foo_bar";
    console.log(this.bar);
}
 
const obj1 = {bar:"obj1_bar", foo: foo};
const obj2 = {bar:"obj2_bar", foo: foo};
 
var bar = "global_bar";
 
foo(); // global_bar
obj1.foo(); // obj1_bar
obj2.foo(); // obj2_bar

//but
var bar = "global_bar";
 const obj3 = {
    bar: "obj3_bar",
    foo: function(){
        console.log(this.bar);  // bar = "obj3_bar"
    }
}
const obj4 = {bar: "obj4_bar", foo: obj3.foo}; // bar = "obj4_bar"
 
const foo = obj3.foo;   // bar = "global_bar"

// This function foo will take the value for this.bar from the external context - from the object obj3
obj3.foo(); // obj3_bar

// The obj4 object uses the foo function from the obj3 object. 
// the function obj3.foo will also look for the value for this.bar, 
// again in the external context, and here it is the object obj4
obj4.foo(); // obj4_bar

// global variable foo, which references the same function as the obj1.foo method. 
// In this case, the value for this.bar will also be looked up, 
// but now in the context of the foo function. this is the global context, 
// where the variable var bar = "global_bar" 
foo();      // global_bar

//this in nested func 
var bar = "global bar";
function foo(){
    var bar = "foo bar";
    function moo(){         
        console.log(this.bar);
    }
    moo();
}
foo();  // global bar
// The moo() function also uses the value of the variable bar from the external context as this.bar, 
// that is, this.bar for the external function foo, which in turn represents the value of the global variable bar. 
// so in the console we see "global bar" rather than "foo bar"


// Explicit binding
// Using the call() and apply() methods, you can explicitly bind a function to a specific context:
function foo(){
     console.log(this.bar);
}
 
var obj5 = {bar: "obj_bar"}
var bar = "global_bar";
foo(); // global_bar
foo.apply(obj5); //obj_bar
// or
// foo.call(obj);
// in the second case, the function foo is bound to an obj object, which defines its context.

//bind
// f.bind(o) allows to create a new function with the same body and scope as f, but bound to an object o:
function foo(){
     console.log(this.bar);
}
 
const obj6 = {bar: "object"}
var bar = "global";
foo(); //global
const func = foo.bind(obj);
func(); // object

//arrow
const person = {
    name: "Tom",
    say:()=> console.log(`My name is ${this.name}`)
}
person.say(); // My name is
//Here the arrow function say() accesses something called this.name, but 
//for the external context in which the arrow function is defined(in context of person obj), 
//this represents the global object (the browser window object). 
//However, the global variable name is not defined, so the console output will be:
// My name is

const person1 = {
    name: "Tom",
    hello(){
        console.log("Привет");
        let say = ()=> console.log(`My name is ${this.name}`);
        say();
    }
}
person1.hello();


//context for arrows
const school ={
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses(){
        this.courses.forEach(function(course){
            console.log(this.title, course);
        })
    }
}
school.printCourses();
// undefined "JavaScript"
// undefined "TypeScript"
// undefined "Java"
// undefined "Go"

const school1 ={
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses(){
        this.courses.forEach((course)=>console.log(this.title, course))
    }
}
school1.printCourses();
// Oxford JavaScript
// Oxford TypeScript
// Oxford Java
// Oxford Go

/*context this
---level higher:
        func - level higher
        new var of func - level higher
        func1 in func2 - level higher of func2

---same level:
    obj - level of obj
    func in obj - level of obj
    bind, call, apply - level of binding obj

arrows:
arrow func in obj - level higher
arrow func in func in obj - level of obj
*/