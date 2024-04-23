var roundnum = prompt("Enter the number of rounds you want to play");
var humanscore = 0;
var computerscore = 0;

function gethchoice() {
    var humanchoice = prompt("Enter a number between 1-3 (1: Rock, 2: Paper, 3: Scissors)");
    if (humanchoice == 1) {
        return "Rock";
    } else if (humanchoice == 2) {
        return "Paper";
    } else if (humanchoice == 3) {
        return "Scissors";
    } else {
        alert("Please enter a number between 1-3");
        return gethchoice();
    }
}

function getcompchoice() {
    var computerchoice = Math.floor(Math.random() * 3);
    if (computerchoice == 0) {
        return "Rock";
    } else if (computerchoice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playround(humanvariable, compvariable) {
    if (humanvariable == compvariable) {
        console.log("It's a Tie 😒");
    } else if (
        (humanvariable == "Rock" && compvariable == "Scissors") ||
        (humanvariable == "Paper" && compvariable == "Rock") ||
        (humanvariable == "Scissors" && compvariable == "Paper")
    ) {
        console.log("You Win! 😁");
        humanscore++;
    } else {
        console.log("You lose! 👎🏻");
        computerscore++;
    }
}

for (var i = 1; i <= roundnum; i++) {
    var humanvariable = gethchoice();
    var compvariable = getcompchoice();
    playround(humanvariable, compvariable);
}

if (humanscore > computerscore) {
    console.log("You Won the Match");
} else if (humanscore < computerscore) {
    console.log("You Lost the Match");
} else {
    console.log("It's a Tie!");
}
