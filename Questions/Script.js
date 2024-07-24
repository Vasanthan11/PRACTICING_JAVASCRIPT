/*
1. Write a JavaScript program to display the current day and time in the following format.
 */

// Get the current date and time
var today = new Date();

// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
var day = today.getDay();

// Array of day names
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Display the current day
console.log("Today is: " + daylist[day] + ".");

// Get the current hour, minute, and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

// Determine if it's AM or PM
var prepand = (hour >= 12) ? " PM " : " AM ";

// Convert 24-hour format to 12-hour format
hour = (hour >= 12) ? hour - 12 : hour;

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}

// Display the current time
console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second); 











/*
2. Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */
let month=today.getMonth();
let date2=today.getDay();
let year= today.getFullYear();

if (date2 < 10) {
    date2 = '0' + date2;
} 
console.log(month + "-" + date2 + "-" + year);










/*
3.Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  */
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 

// Calculate the semi-perimeter of the triangle
var s = (side1 + side2 + side3) / 2;

// Use Heron's formula to calculate the area of the triangle
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

// Log the calculated area to the console
console.log(area);












//4. Find the year is a leap year or not using function.
function findLeap(){
    let leapYear=2023;
    if((leapYear % 4 === 0 && leapYear % 100 !== 0) || (leapYear % 400 === 0)){
        alert("given year is a leap year")
    }
    else{
        alert("it is not a leap year")
    }
}

findLeap();










// 5. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  
let num01=document.querySelector(".num01");
let num02=document.querySelector(".num02");
let multi=document.querySelector(".multi");
let divide=document.querySelector(".divide");
let resultAns=document.querySelector(".resultAns");

function multiplying(){
    let inputnum01=num01.value;
    let inputnum02=num02.value;
    let multiAnswer=inputnum01*inputnum02;
    resultAns.innerHTML="Result : " + multiAnswer;
    num01.value="";
    num02.value="";
}

function dividing(){
    let inputnum01=num01.value;
    let inputnum02=num02.value;
    let multiAnswer=inputnum01/inputnum02;
    let decimalPlaces = 2;
    resultAns.innerHTML="Result : " + multiAnswer.toFixed(decimalPlaces);
    num01.value="";
    num02.value="";
}

multi.addEventListener('click', multiplying)
divide.addEventListener('click', dividing)