var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyHealth, enemyAttack);

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");

    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable

    // Log a resulting message to the console so we know that it worked.

    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable

    // Log a resulting message to the console so we know that it worked.
};

fight();

enemyHealth = enemyHealth - playerAttack;

console.log(
    playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health " + " health remaining "
);

if (enemyHealth <= 0) {
    window.alert(enemyName + " has died! ");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left. ");
}

playerHealth = playerHealth - enemyAttack;

console.log(
    enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health " + " health remaining "
);

if (playerHealth <= 0) {
    window.alert(playerName + " has died! ")
}
else { 
    window.alert(playerName + " still has " + playerHealth + " health left. ");
}