let btn01=document.querySelector('.btn01')
let btn02=document.querySelector('.btn02')
let headingTwo=document.querySelector('.headingTwo')
let paraText=document.querySelector('.paraText')

function changeHead(){
    headingTwo.innerHTML='Hello Javascript section is over. Thanks'
}

function changePara(){
    paraText.innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
}

btn01.addEventListener('click',changeHead)
btn02.addEventListener('click',changePara)











let inputField=document.querySelector('.inputField');
let btn3=document.querySelector('.btn3');

function alertingfField(){
    alert('The New User is ' + inputField.value);
    inputField.value = '';
}
btn3.addEventListener('click', alertingfField)














let headingFour=document.querySelector('.headingFour');
let headingFive=document.querySelector('.headingFive');
let fourInputVal=document.querySelector('.fourInputVal');
let fiveInputVal=document.querySelector('.fiveInputVal');
let btn04=document.querySelector('.btn04');
let btn05=document.querySelector('.btn05');

function renameHead(){
    let newHead=fourInputVal.value;
    headingFour.innerHTML=newHead;
    fourInputVal.value="";
}
function renamePara(){
    let newHead2=fiveInputVal.value;
    headingFive.innerHTML=newHead2;
    fiveInputVal.value="";
}
btn04.addEventListener('click', renameHead)
btn05.addEventListener('click', renamePara)













let computerRandomNumber = Math.floor(Math.random() * 10) + 1;
console.log(computerRandomNumber)
let manualNumber=document.querySelector('#manualNumber');
let btn06=document.querySelector('.btn06');
let fourh3=document.querySelector('.fourh3');

function checkAvailable(){
    let OutManulaNumbewr=parseInt(manualNumber.value, 10);
    if(computerRandomNumber===OutManulaNumbewr){
        fourh3.innerHTML='OUTPUT: Good Work';
        console.log(OutManulaNumbewr)
    }
    else{
        fourh3.innerHTML='OUTPUT: Not matched';
    }
}

btn06.addEventListener('click',checkAvailable);











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