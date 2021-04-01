var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack, playerMoney);

var enemyNames = ["Roborto'" , "Amy Android" , "Robo Trumbled"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
};

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' OR 'SKIP' to choose. ");

    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyNames + " . " + enemyNames + " now has " + enemyHealth + " health " + " health remaining "
            );
            
            if (enemyHealth <= 0) {
                window.alert(enemyNames + " has died! ");
            } else {
                window.alert(enemyNames + " still has " + enemyHealth + " health left. ");
            }
            
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyNames + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health " + " health remaining "
            );
                
                if (playerHealth <= 0) {
                    window.alert(playerName + " has died! ")
                } else { 
                    window.alert(playerName + " still has " + playerHealth + " health left. ");
                }
                
    }   else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
        } else {
            fight();
        }

    } else {
        window.alert("You need to pick a valid option. Try again!");
};

//fight ();