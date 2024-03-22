//Overriding occurs by assigning an anonymous function to 
//a variable that has the same name as the function being overridden
function print(){
    console.log("Good morning");
    print = function(){
        console.log("Good day");
    }
}
 
print(); // Good morning
print(); // Good day

// When the function is fired for the first time, the main block of function statements is applied. 
// And the first time the print function is fired, it is also overridden. 
// Therefore, for all subsequent calls to the function, its overridden version is triggered, 
// and the message “Good day" will be displayed on the console.

// assigning a reference to a function before overriding
const printMessage = print;
print(); // Good morning
print(); // Good day
printMessage(); // Good morning
printMessage(); // Good morning
// Here the printMessage variable gets a reference to the print function before it is overridden. 
// Therefore, calling printMessage() will call an unoverridden version of the print function.

print(); // Good morning
print(); // Good day
const printMessage1 = print;
printMessage1(); // Good afternoon
printMessage1(); // Good afternoon
//In this case, the printMessage variable will point to an overridden version of the print function.