
// Adding of two numbers using function on console

// example-01
let currentResult=0;
function add(num1, num2){
const result=(num1 + num2) + 10;
return result;
}

currentResult=add(5,10);
console.log(currentResult);

// example-02
let currentResult1=50;
function addNum(num1, num2){
const result=(num1 + num2) + currentResult1;
return result;
}

currentResult1=addNum(5,10);
console.log(currentResult1);



// Trail example from udemy
function subtract(num1, num2){
    const result= num1-num2;
    return result;
}

let resultSubtract=subtract(12,10);
console.log(resultSubtract); 


function stringify(number){
    const result=`"Result: ${number}"`;
     return result;
}

let stringData=stringify(10);
console.log(stringData); 



// Shadowded Variable (existing of thwe two scope)
let userName = 'Max';
function greetUser(name) {
  let userName = name;
//   alert(userName);
}
userName = 'Manu';
greetUser('Max');
/* 
let userName = 'Max';
But then we never re-declare that on the global level (that would not be allowed).
 We only declare another variable inside of the function. But since variables in functions get their own scope, JavaScript does something which is called "shadowing".
It creates a new variable on a different scope - this variables does not overwrite or remove the global variable by the way - both co-exist.
*/



function double(value) {
    return value * 2;
};

function transform(number, func){
    return func(number)
};

let result = transform(10, double);
console.log(result);