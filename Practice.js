
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



/*
Exercise: Arrays
For this exercise, your task is to push two new numbers onto the existing numbers array: 8 and 2, in that order.
Don't create a new array, don't overwrite the existing array - instead manipulate the existing array as taught earlier in the course.
 */
let numbers = [10, 3, -1];
function solve() {
    // Ensure the array length is exactly 3 before pushing new elements
    numbers.length = 3;
    numbers.push(8);
    numbers.push(2);
}
solve();
console.log(numbers); 



/*
Exercise: Objects
For this exercise, your task is to create a new JavaScript object that should be stored in the courseData variable.
The to-be-created object must have three properties:
title => a string (must be "JavaScript - The Complete Guide")
duration => a positive number of your choice (e.g., 30)
levels => an array with exactly two elements (must be "Beginner" and "Advanced")
You don't have to do anything else with the object - just create it and make sure the data mentioned above is stored correctly. */
let courseData = {
    title: "JavaScript - The Complete Guide",
    duration: 30,
    levels: ["Beginner", "Advanced"]
};
console.log(courseData);



/* For this exercise, you should create a for loop that runs 100 times. In every run, 
the pre-defined callMe() function should be executed. Therefore, by the end of the loop, 
callMe() should have been called 100 times.*/
function callMe() {
    console.log('Called!');
}

function solve() {
for(let i=0; i<100; i++){
    callMe();
}
}





/*For this exercise, you should add some elements to the DOM via JavaScript.
To be precise, you must add two "course goal" items => two <li> items to the <ul> that already exists on the page:
The first course goal <li> that's added via JavaScript should contain the text "Learn JavaScript" (without quotes)
The second goal <li> item should contain the text "Master JavaScript" (also without quotes)
Again: You must do this via JavaScript, NOT by editing the HTML code!
Important: Put all your DOM editing code into the pre-defined solve() function. */

             const ul = document.querySelector("ul");
            function solve() {
                const firstLi = document.createElement("li");
                firstLi.innerText = "Learn JavaScript";
                ul.appendChild(firstLi);

                const secondLi = document.createElement("li");
                secondLi.innerText = "Master JavaScript";
                ul.appendChild(secondLi);
            }
            
            solve();

