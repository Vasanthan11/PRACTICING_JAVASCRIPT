const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
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

attackBtn.addEventListener('click', attackHandler);



/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GAME USING SCRIPT</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <!-- <section id="health-levels">
        <h2>MONSTER HEALTH</h2>
        <progress id="monster-health" max="100" value="100">100%</progress>
        <h2>PLAYER HEALTH<span id="bonus-life">1</span></h2>
        <progress id="player-health" max="100" value="10">100%</progress>
      </section> -->
    <script src="./getDocs.js"></script>
    <script src="./scripting.js"></script>
    <script>let sum = 0;
        for (let i = 2; i <= 6; i++) {
            sum = sum + i;
        }
        console.log(sum); </script>
</body>
</html>
 */