// Calculate sum of a number

const calculateSumButton = document.querySelector("#calculator button");

function calculateSum() {
    const userNumber = document.getElementById("user-number");
    const enteredNumber = userNumber.value;

    let sumUpToNumber = 0;


    for (i = 0; i <= enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    }

    const outputResult = document.getElementById("calculated-sum");

    outputResult.textContent = sumUpToNumber;
    outputResult.style.display = "block";
}

calculateSumButton.addEventListener("click", calculateSum);

// Highlight all links

const highlightLinksButton = document.querySelector("#highlight-links button");

function highlightLinks() {
    const links = document.querySelectorAll("#highlight-links a");

    for (const link of links) {
        link.classList.add("highlight");
    }
}

highlightLinksButton.addEventListener("click", highlightLinks);

// Display user data

const userData = {
    name: "Max",
    lastname: "Schwarzmüller",
    age: 32
};

const displayUserDataButton = document.querySelector("#user-data button");

function displayUserData() {
    const outputData = document.getElementById("output-user-data");

    outputData.innerHTML = "";

    for (const key in userData) {
        const newUserDataList = document.createElement("li");
        const outputText = key.toUpperCase() + ":" + userData[key];
        newUserDataList.textContent = outputText;
        outputData.append(newUserDataList);
    }
}

displayUserDataButton.addEventListener("click", displayUserData);

// Roll the dice

const rollDiceButton = document.querySelector("#statistics button");

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
    const targetNumber = document.getElementById("user-target-number");
    const enteredNumber = targetNumber.value;
    const diceRollsList = document.getElementById("dice-rolls");
    diceRollsList.innerHTML = "";

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice();
        // if (rolledNumber == enteredNumber) {
        //     hasRolledTargetNumber = true;
        // }
        numberOfRolls++;
        const newRollList = document.createElement("li");
        const outputText = "Roll " + numberOfRolls + ": " + rolledNumber;
        newRollList.textContent = outputText;
        diceRollsList.append(newRollList);
        hasRolledTargetNumber = rolledNumber == enteredNumber;
    }

    const outputTotalRolls = document.getElementById("output-total-rolls");
    const outputTargetNumber = document.getElementById("output-target-number");

    outputTargetNumber.textContent = enteredNumber;
    outputTotalRolls.textContent = numberOfRolls;
}

rollDiceButton.addEventListener("click", deriveNumberOfDiceRolls);