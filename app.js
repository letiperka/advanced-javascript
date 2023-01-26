const inputElement = document.getElementById("product-name");
const remainingChars = document.getElementById("remaining-chars");
const charCount = inputElement.maxLength;

function charCounter(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;
    const counting = charCount - enteredTextLength;

    remainingChars.textContent = counting;
}

inputElement.addEventListener("input", charCounter);