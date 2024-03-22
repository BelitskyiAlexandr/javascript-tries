//for is like in c#
for(let i = 0; i<5; i++){ 
    console.log(i);
}
console.log("End of work");

//without counter in head of for
let i = 0;
for(; i < 60;){
      
    console.log(i);
    i = i + 10;
}

//several counters
for(let i = 1, j=1; i < 5, j < 4; i++, j++){
      
    console.log(i + j);
}
// 1 iteration: i=1, j=1; i + j = 2
// 2 iteration: i=2, j=2; i + j = 4
// 3 iteration: i=3, j=3; i + j = 6

//for with actions in head
for(let i = 0; i < 5; console.log(i++));
console.log("End of work");

let i1=0;
for(console.log("Init"); i1 < 5; i1++){
     console.log(i1);
}


//while like in c#
let i2 = 1;
while(i2 <=5){
     
    console.log(i2);
    i2++;
}

//do-while like in c#
let i3 = 1;
do{
    console.log(i3);
    i3++;
}while(i3 <= 5)


//break and continue are same
for(let i=1; i <= 6; i++){     
    if(i===4) break;
    console.log(i);
}
console.log("End of work");
// 1
// 2
// 3
// End of work

for(let i=1; i <= 6; i++){   
    if(i===4) continue;
    console.log(i);
}
console.log("End of work");
// 1
// 2
// 3
// 5
// 6
// End of work

// for-in for obj iter
const person = {name: "Tom", age: 37};
for(prop in person){ 
    console.log(prop);
}
//name
//age

for(prop in person){
    console.log(prop, person[prop]);
}
//name Tom
//age 37

//for-of for strings, arrays
const text = "Hello";
for(char of text){
    console.log(char);
}
// H
// e
// l
// l
// o

const people = ["Tom", "Sam", "Bob"];
for(const person of people) {
    console.log(person);
}
// Tom
// Sam
// Bob