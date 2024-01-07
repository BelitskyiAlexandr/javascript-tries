let username = "Tom";
console.log('username: ', username);
username = "Bob";
console.log("username: ", username);

const variable = "smth";
console.log("variable: ", variable);
variable = "smthTwo"


//number & bigint
let x = 3_232;
let y = 3232n;

let binary_num =  0b01111;
let octal_num = 0o02334;
let hex_num = 0x3234f;

//boolean
let bool_var = true; //or fasle

//string
let user = 'tom';
let user_surname = "Tom \"The Cock\""
        //also uses spec symbols like \n \t etc

var interpolate_user = "User ${user}"
var multistring_text = 
`hey
it's me
multistring 
text`;

let undefined_var; // undefined
let null_var = null; // null

//obj
var obj_var = {};
obj_var = {some:"smth", any:'any'};
console.log(obj_var.any); // obj_var.some
console.log(typeof obj_var); //return object for null value