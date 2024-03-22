//autoconversion
const num1 = 5;
const num2 = "22";
const result1 = num1 + num2;
console.log(result1); //522

//parseInt
const result2 = num1 + parseInt(num2);
console.log(result2); //27
const some_string = "12dds";
const parse_string = parseInt(some_string);
console.log(parse_string); //12

//
const number1 = parseInt(0.000005);   // 0; 
console.log(number1); 
  
const number2 = parseInt(0.0000005);  // 5 
console.log(number2);
//for parse all became string first. For fractional numbers less than 10^-6, exponential notation is used, 
//the number 0.0000005 is represented as 5e-7. Next, the number 5e-7 is converted to the string "5e-7", 
//and parseInt tries to convert this string to a number. Accordingly, the output is the number 5.
//Same for large numbers like 999999999999999999999

//NaN 
//If parseInt() fails to convert, it returns NaN, 
//which indicates that the string does not represent a number and cannot be converted.
console.log(parseInt("abc")); // NaN
const type = typeof NaN;
console.log(type); // number

// isNaN
const num3 = "javascript";
const num4 = "22";
let result = isNaN(num3);
console.log(result); // true - num3 is NaN
     
result = isNaN(num4);
console.log(result); //  false - num4 is number

//parseFloat()
const number3 = "46.07";
const number4 = "4.98";
let result3 = parseFloat(number3) + parseFloat(number4);
console.log(result3); //51.05

//string -> number with '+' and '-'
const number5 = "56";
const number6 = 4;
const result4 = +number5 - number6;
console.log(result4); // 52

const number7 = "56";
const number8 = 4;
const result7 = -number7 - number8;  // -56 - 4 = -60
console.log(result7); // -60

// NaN with '+' and '-'
const number10 = "56hek";
console.log(+number10); // NaN