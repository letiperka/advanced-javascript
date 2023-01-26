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


const highlightLinksButton = document.querySelector("#highlight-links button");

function highlightLinks() {
    const links = document.querySelectorAll("#highlight-links a");

    for (const link of links) {
        link.classList.add("highlight");
    }
}

highlightLinksButton.addEventListener("click", highlightLinks);