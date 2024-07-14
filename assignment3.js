// Create two new functions: One that takes no parameters and simply shows an alert() with some text of your choice and one that receives a name as a parameter and then uses alert() to output that name.

function firstOne(){
    alert("Hello Welcome to new code journey");
};

function firstTwo(myName){
    alert("Hello!, myself is " + myName);
};

let myName="Vasanthan";

firstOne();     
firstTwo(myName);


// Add a brand-new function that takes three parameters (three strings, give them any names you want) that returns one combined string (where the three strings are concatenated).
function combineStrings(str1, str2, str3) {
    return str1 + ' ' + str2 + ' ' + str3;
}

let outPut = combineStrings("Hello", "this is", "Vasanthan.");
console.log(outPut); 

// Call that new function directly from your code and alert() the result of that function.
alert(outPut); 