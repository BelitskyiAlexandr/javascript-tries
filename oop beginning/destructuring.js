// Destructuring allows you to extract individual values from an object into variables or constants
const user = {
    name: "Tom",
    age: 24,
    phone: "+367438787",
    email: "tom@gmail.com"
};
const {name, email} = user;
console.log(name);      // Tom
console.log(email);     // tom@gmail.com
//when destructuring an object, variables are placed in curly braces and assigned to the object
//the mapping between object properties and variables/constants is by name

//mapping with another name
const {name: userName, email: mailAddress} = user;
console.log(userName);      // Tom
console.log(mailAddress);   // tom@gmail.com

// values if cannot find properties
const user1 = {
    name: "Tom",
    age: 24,
};
const {name1  = "Sam", email: mailAddress1 = "sam@gmail.com"} = user1;
console.log(name1);              // Tom
console.log(mailAddress1);       // sam@gmail.com

//If a variable/constant, when destructured, is mapped to a property that represents a complex object, 
//then after destructuring that variable/constant will also represent the complex object
const user2 = {
    name: "Tom",
    age: 24,
    account: {
        login: "tom555",
        password: "qwerty"
    }
};
const {account} = user2;
console.log(account.login); // tom555
console.log(account.password); // qwerty

//if need special field from complex obj
const {name2, account: {login}} =  user2;
console.log(name);      // Tom
console.log(login);     // tom555

//rest
const tom = {
    name: "Tom",
    age: 24,
    phone: "+367438787",
    email: "tom@gmail.com"
};
const {name3, age, ...contacts} = tom;
console.log(name3);      // Tom
console.log(age);       // 24
console.log(contacts);  // {phone: "+367438787", email: "tom@gmail.com"}    contacts - obj

// ---Destructuring Arrays---
const users = ["Tom", "Sam", "Bob"];
const [a, b, c] = users;
console.log(a);     // Tom
console.log(b);     // Sam
console.log(c);     // Bob

//If there are fewer variables/constants, then the remaining array elements are simply omitted.
const [a1, b1] = users;
  
console.log(a1); //Tom
console.log(b1); //Sam

//If there are more variables/constants, then extra vars/consts are undefined
const [a2, b2, c2, d2] = users;
  
console.log(a2);     // Tom
console.log(b2);     // Sam
console.log(c2);     // Bob
console.log(d2);     // undefined