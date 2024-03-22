// local variable makes by let/const
function User(uName, uAge) {
    this.name = uName;
    let _age = uAge;
    this.print = function(){
        console.log(`Name: ${this.name}  Age: ${_age}`);
    };
}
 
const tom = new User("Tom", 39);
tom._age = 11500;
tom.print();    // Name: Tom  Age: 39

// ---get-set---
function User(uName, uAge) {
    this.name = uName;
    let _age = uAge;
    // getter - return the value of the variable
    this.getAge = function() { return _age; }
    // set the value of the variable
    this.setAge = function(age) {
        if(age >0 && age<110){ // if age is greater than 0 and less than 110
            _age = age;
        } else {
            console.log("Invalid value");
        }
    }

    this.print = function(){
        console.log(`Name: ${this.name} Age: ${_age}`);
    };
}

const tom = new User("Tom", 39);
// get the value
console.log(tom.getAge()) // 39
// set a new value
tom.setAge(22);
console.log(tom.getAge()) // 22
tom.setAge(11500); // Invalid value
console.log(tom.getAge()) // 22