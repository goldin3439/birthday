
const letterButton = document.getElementById("letterButton");
const letter = document.getElementById("letter");

// Secret love letter
letterButton.addEventListener("click", () => {
    letter.classList.toggle("hidden");

    letterButton.textContent = letter.classList.contains("hidden")
        ? "Open Your Secret Letter 💌"
        : "Close Your Secret Letter ❤️";
});

// Falling rose petals
const petalsContainer = document.getElementById("petals");

const petals = ["🌹", "🌸", "💗", "🌷"];

function createPetal() {
    const petal = document.createElement("span");

    petal.className = "petal";
    petal.textContent = petals[Math.floor(Math.random() * petals.length)];

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (14 + Math.random() * 18) + "px";
    petal.style.animationDuration = (5 + Math.random() * 6) + "s";

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 11000);
}

setInterval(createPetal, 450);
