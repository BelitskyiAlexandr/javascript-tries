function factorial(n){
    if (n === 1){
        return 1;
    }
    else{      
        return n * factorial(n - 1);
    }
}
const result = factorial(4); 
console.log(result); // 24

function fibonachi(n)
{
    if (n === 0 || n === 1){
        return n;
    }
    else{
        return fibonachi(n - 1) + fibonachi(n - 2);
    }
}
const result_fib = fibonachi(8); //21 
console.log(result_fib); // 21