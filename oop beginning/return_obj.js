function createUser(pName, pAge) {      //there u can add come actions before creation obj
    return {
        name: pName,
        age: pAge,
        print: function() {
            console.log(`Name: ${this.name}  Age: ${this.age}`);
        }
    };
};
const tom = createUser("Tom", 26);
tom.print();
const alice = createUser("Alice", 24);
alice.print();

// return more than 1 param
function getMinMax(numbers){
 
    // if arr is empty
    if(numbers.length === 0) return {min: undefined, max: undefined};
   
    let minNumber = numbers[0];
    let maxNumber = numbers[0];
    for(let i=1; i< numbers.length; i++){
       
      if(minNumber > numbers[i]) minNumber = numbers[i];
      if(maxNumber < numbers[i]) maxNumber = numbers[i];
    }
    return {min: minNumber, max: maxNumber};
}

const nums = [1, 2, 3, 4, 5];
const result = getMinMax(nums);
console.log("Min:", result.min);    // Min: 1
console.log("Max:", result.max);    // Max: 5

//obj as param
function setAge(person, pAge){
   person.age = pAge;
}
 
const sam = {name: "Sam", age: 29};
console.log("Before setAge:", sam.age);
setAge(sam, 30);
console.log("After setAge:", sam.age);

// changing obj
function setDefault(person){
 
  person = {name: "Undefined", age: 0};
}
 
let sam1 = {name: "Sam", age: 29};
console.log("Before setDefault:", sam1.name);
setDefault(sam1);
console.log("After setDefault:", sam1.name);

// Before setDefault: Sam
// After setDefault: Sam
/*
When passing the variable sam to the setDefault function, 
the parameter of this function and the variable sam will represent two different references, 
but point to the same object in memory.

the reference stored in the person parameter is assigned a new object. 
But since the variable sam and the parameter person represent two different references, 
this assignment will not affect the sam object in any way.
*/