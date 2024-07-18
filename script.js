// script.js

const words = [
    "coffee",
    "car",
    "book",
    "phone",
    "shoes",
];

const hints = [
    "A popular beverage",
    "Used for transportation",
    "Contains stories and information",
    "Used for communication",
    "Worn on feet",
];

let displayWord = "";

function shuffle(str) {
    let strArray = Array.from(str);
    for (let i = strArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [strArray[i], strArray[j]] = [strArray[j], strArray[i]];
    }
    return strArray.join(" ");
}

function check() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    if (input.value.trim().toLowerCase() === displayWord.toLowerCase()) {
        output.innerHTML = "Result: Correct";
    } else {
        output.innerHTML = "Result: Incorrect";
    }
}

function refresh() {
    let index = Math.floor(Math.random() * words.length);
    displayWord = words[index];
    let displayHint = hints[index];
    let scrambleWord = document.getElementById("scrambleWord");
    scrambleWord.innerText = shuffle(displayWord).toUpperCase();
    let hint = document.getElementById("hint");
    hint.innerHTML = "<b>Hint:</b> " + displayHint;
    document.getElementById("output").innerText = "Result:";
    document.getElementById("input").value = ""; // Clear input field on refresh
}

// Initial call to refresh when the page loads
refresh();
