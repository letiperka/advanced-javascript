let inputElement = document.getElementById("product-name");
let remainingChars = document.getElementById("remaining-chars");
let charCount = inputElement.maxLength;

function charCounter(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;
    let counting = charCount - enteredTextLength;

    remainingChars.textContent = counting;
}

inputElement.addEventListener("input", charCounter);