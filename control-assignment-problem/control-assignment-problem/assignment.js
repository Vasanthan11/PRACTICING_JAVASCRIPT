const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

/* In the attached code assignment.js, you find a variable that holds a random number between 0 and 1. 
Write code that shows an alert (with any message) when that number is greater than 0.7. */
function alerting() {
    if (randomNumber > 0.7) {
        alert("The number exceeds the limit value 0.7");
    } else{
        alert("The number is in the limit value below 0.7");
    }
}

alerting(); 



/*Create an array of numbers (any numbers of your choice) and loop through the array in two different ways - 
outputting the numbers inside of the loop. */
let arrayData= [1,2,4,5,0,0,6,7,8,9,0,];

function arrayloop(){
    for (let i = 0; i < arrayData.length; i++) {
        console.log(arrayData[i]);}
}
arrayloop(); 

function arrayloop(){
    arrayData.forEach(function(item) {
        console.log(item);})
}
arrayloop(); 

// for-of loop
for(const num of arrayData){
    console.log(num);
}

// while loop
let count=0;
while(count <arrayData.length){
    console.log(arrayData[count])
    count++
}

function arrayloop(){
    for (let i = arrayData.length - 1; i >= 0; i--) {
        console.log(arrayData[i]);}
}

arrayloop(); 