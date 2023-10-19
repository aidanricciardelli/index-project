



//circle

const interactionContainer = document.getElementById("interactionContainer")


document.getElementById("green").addEventListener("click", function () {
    console.log("click")
    interactionContainer.style.backgroundColor = "lightgreen"
})


document.getElementById("plum").addEventListener("click", function () {
    console.log("click")
    interactionContainer.style.backgroundColor = "plum"
})

document.getElementById("blue").addEventListener("click", function () {
    console.log("click")
    interactionContainer.style.backgroundColor = "lightblue"
})





//loop
const loopContainer = document.getElementById("loopContainer");

const textToRepeat = "repeating text :D  ";

let repeatedText = "";

for (let i = 0; i < 10; i++) {
    repeatedText += textToRepeat;


}

const words = document.createElement("p");
words.textContent = repeatedText;

loopContainer.appendChild(words);



//square

const square = document.getElementById("square");

document.addEventListener("mousemove", (event) => {
    const mouseY = event.clientY;
    const viewportHeight = window.innerHeight;
    if (mouseY > viewportHeight / 2) {
        square.style.backgroundColor = "blue";
    } else {
        square.style.backgroundColor = "orange";
    }

})





//time


const increaseText = document.getElementById("increaseText");
const initialFontSize = 24;
const totalDuration = 60;
let currentFontSize = initialFontSize;
let elapsedTime = 0;

function increaseFontSize() {
    if (elapsedTime < totalDuration) {
        currentFontSize++;
        increaseText.style.fontSize = `${currentFontSize}px`;
        elapsedTime += 2;
    } else {
        clearInterval(interval);
    }
}

const interval = setInterval(increaseFontSize, 2000);



//input characters 

const inputText = document.getElementById("inputText");
const textLength = document.getElementById("text-length");
const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = inputText.value;
    const characterCount = inputValue.length;
    textLength.textContent = characterCount;
})






//console log

console.log("message of MY choice.")









