// 1. Find the given number is positive or negative.
let number=-20;
let resultNum;

function findNumber(){
if(number<0){
    return("The given number is negative number "+ number);
}
else{
    return ("The given number is a positive number " + number);}
}

resultNum=findNumber();
console.log(resultNum);

// 2. Find the given number is odd or even.

let findOne=50;
let resultOne;

function findExact(){
    if(findOne % 2 === 0){
        // the above one is a modulus operation in which the remainder must be zero
        return ("The number is even");
    }
    else{
        return("The number is odd");
    }
}

resultOne=findExact();
console.log(resultOne);

// 3. Determine the greater of two number.

let numOne=6;
let numTwo=12;
let answer;

function findGreater(){
    if(numOne>numTwo){
        return(`Number `+numOne+` is greater than `+ numTwo);
    }
    else{
        return(`Number `+numOne+` is lesser than `+ numTwo);
    }
}

answer=findGreater();
console.log(answer);