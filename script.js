/* =====================================================
   GARDEN ANIMATIONS
===================================================== */

const butterflyContainer = document.getElementById("butterflies");
const petalContainer = document.getElementById("petals");
const fireflyContainer = document.getElementById("fireflies");

// Helper function to reduce repeated code when spawning ambient items
function createParticle(container, count, className, configureFn) {
    if (!container) return;
    
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
        const item = document.createElement("div");
        item.className = className;
        configureFn(item);
        fragment.appendChild(item);
    }
    container.appendChild(fragment); // Batch DOM insertion for better performance
}

/* =====================================================
   BUTTERFLIES
===================================================== */
createParticle(butterflyContainer, 12, "butterfly", (butterfly) => {
    butterfly.textContent = "🦋";
    butterfly.style.left = `${Math.random() * 100}%`;
    butterfly.style.top = `${25 + Math.random() * 65}%`;
    butterfly.style.animationDelay = `${Math.random() * 10}s`;
    butterfly.style.animationDuration = `${10 + Math.random() * 8}s`;
});

/* =====================================================
   FALLING PETALS
===================================================== */
const petalSymbols = ["✿", "❀", "·"];

createParticle(petalContainer, 30, "petal", (petal) => {
    petal.textContent = petalSymbols[Math.floor(Math.random() * petalSymbols.length)];
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDelay = `${Math.random() * 10}s`;
    petal.style.animationDuration = `${7 + Math.random() * 7}s`;
});

/* =====================================================
   FIREFLIES
===================================================== */
createParticle(fireflyContainer, 35, "firefly", (firefly) => {
    firefly.style.left = `${Math.random() * 100}%`;
    firefly.style.top = `${30 + Math.random() * 65}%`;
    firefly.style.animationDelay = `${Math.random() * 6}s`;
    firefly.style.animationDuration = `${4 + Math.random() * 5}s`;
});

/* =====================================================
   WELCOME SCREEN
===================================================== */
const welcomeScreen = document.getElementById("welcomeScreen");
const enterButton = document.getElementById("enterButton");
const mainContent = document.getElementById("mainContent");

if (enterButton) {
    enterButton.addEventListener("click", () => {
        welcomeScreen?.classList.add("hide");
        setTimeout(() => {
            mainContent?.classList.add("show");
        }, 500);
    });
}

/* =====================================================
   BIRTHDAY MESSAGES
===================================================== */
const messages = {
    library: {
        label: "A LITTLE LETTER",
        title: "From the Library 🌷",
        message: "Your friend's birthday message will appear here. 💗",
        signature: "— Your friend ♡"
    },
    cinema: {
        label: "A TINY NOTE",
        title: "From the Cinema 🌸",
        message: "Your friend's birthday message will appear here. 💗",
        signature: "— Your friend ♡"
    },
    post: {
        label: "FROM FAR AWAY",
        title: "A Message For You 🌺",
        message: "Your friend's birthday message will appear here. 💗",
        signature: "— Your friend ♡"
    },
    home: {
        label: "ONE LAST THING",
        title: "From Home 💌",
        message: "Your birthday message will appear here. 💗",
        signature: "— Your bestie ♡"
    }
};

/* =====================================================
   LETTER MODAL LOGIC
===================================================== */
const letters = document.querySelectorAll(".letter");
const letterOverlay = document.getElementById("letterOverlay");
const closeButton = document.getElementById("closeButton");

const paperLabel = document.getElementById("paperLabel");
const paperTitle = document.getElementById("paperTitle");
const paperMessage = document.getElementById("paperMessage");
const paperSignature = document.getElementById("paperSignature");

function closeLetter() {
    if (letterOverlay) {
        letterOverlay.classList.remove("show");
    }
}

letters.forEach((letter) => {
    letter.addEventListener("click", () => {
        const letterName = letter.dataset.letter;
        const data = messages[letterName];

        if (!data) return;

        if (paperLabel) paperLabel.textContent = data.label;
        if (paperTitle) paperTitle.textContent = data.title;
        if (paperMessage) paperMessage.textContent = data.message;
        if (paperSignature) paperSignature.textContent = data.signature;

        letterOverlay?.classList.add("show");
    });
});

if (closeButton) {
    closeButton.addEventListener("click", closeLetter);
}

if (letterOverlay) {
    letterOverlay.addEventListener("click", (event) => {
        if (event.target === letterOverlay) {
            closeLetter();
        }
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeLetter();
    }
});