const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 19;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE_PLAY=5;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);


function findAttack(mode){
let maxDamage;
if(mode=="ATTACK"){
    maxDamage=ATTACK_VALUE;
}
else{
    maxDamage=STRONG_ATTACK_VALUE;
}
const damage = dealMonsterDamage(maxDamage);
currentMonsterHealth -= damage;
const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
currentPlayerHealth -= playerDamage;
if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
  alert('You won!');
} else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
  alert('You lost!');
} else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
  alert('You have a draw!');
}
}
function attackHandler() {
    findAttack('ATTACK');
}

function strongAttackHandler() {
    findAttack();
  }

function healPlayer(){
const heal=increasePlayerHealth(HEAL_VALUE_PLAY);
currentPlayerHealth+=heal;
}


attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayer);
