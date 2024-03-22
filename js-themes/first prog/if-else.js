const income = 100;
if(income > 50) {
    console.log("income is more than 50");
}
if(income > 50) 
    console.log("income is more than 50");

//The if construct allows to check for the presence of a value
let myVar = 89;
if(myVar){        
    console.log(`Variable myVar is: ${myVar}`);
}

//To check the value of a variable can check for undefined and null values
if (myVar !== undefined && myVar !== null) {
    console.log(`Variable myVar is: ${myVar}`);
}

//if-else
if(income > 50){
 
    console.log("income is more than 50");
}
else{
    console.log("income is less than 50 or is 50");
}

if(income > 50) console.log("income is more than 50");
else console.log("income is less than 50 or is 50");

if(income > 50) {
    console.log("income is more than 50");
}
else if(income === 50){
    console.log("income is 50");
}
else{
    console.log("income is less than 50");
}

//switch-case
switch(income){
    case 50 : 
        console.log("income is 50");
        break;
    case 100 : 
        console.log("income is 100");
        break;
    case 200 : 
        console.log("income is 200");
        break;
    case 500 : 
        console.log("income is 500");
        break;
    default: 
        console.log("income is unrecognizable");
        break;
}