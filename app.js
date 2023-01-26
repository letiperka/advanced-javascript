const inputElement = document.getElementById("product-name");
const remainingChars = document.getElementById("remaining-chars");
const charCount = inputElement.maxLength;

function charCounter(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;
    const counting = charCount - enteredTextLength;

    remainingChars.textContent = counting;

    if (counting === 0) {
        remainingChars.classList.add("error");
        inputElement.classList.add("error");
    } 
    else if (counting <= 10) {
        remainingChars.classList.add("warning");
        inputElement.classList.add("warning");

        remainingChars.classList.remove("error");
        inputElement.classList.remove("error");
    } 
    else { remainingChars.classList.remove("warning");
    inputElement.classList.remove("warning");
    }
}

inputElement.addEventListener("input", charCounter);

