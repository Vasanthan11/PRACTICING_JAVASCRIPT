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