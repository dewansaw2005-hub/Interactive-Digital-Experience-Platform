/* =====================================================
   GARDEN ANIMATIONS
===================================================== */

const butterflyContainer =
    document.getElementById("butterflies");

const petalContainer =
    document.getElementById("petals");

const fireflyContainer =
    document.getElementById("fireflies");


/* =====================================================
   BUTTERFLIES
===================================================== */

if (butterflyContainer) {

    for (let i = 0; i < 12; i++) {

        const butterfly =
            document.createElement("div");

        butterfly.className = "butterfly";

        butterfly.textContent = "🦋";

        butterfly.style.left =
            Math.random() * 100 + "%";

        butterfly.style.top =
            (25 + Math.random() * 65) + "%";

        butterfly.style.animationDelay =
            Math.random() * 10 + "s";

        butterfly.style.animationDuration =
            (10 + Math.random() * 8) + "s";

        butterflyContainer.appendChild(
            butterfly
        );
    }
}


/* =====================================================
   FALLING PETALS
===================================================== */

if (petalContainer) {

    const petalSymbols = [
        "✿",
        "❀",
        "·"
    ];

    for (let i = 0; i < 30; i++) {

        const petal =
            document.createElement("div");

        petal.className = "petal";

        petal.textContent =
            petalSymbols[
                Math.floor(
                    Math.random() *
                    petalSymbols.length
                )
            ];

        petal.style.left =
            Math.random() * 100 + "%";

        petal.style.animationDelay =
            Math.random() * 10 + "s";

        petal.style.animationDuration =
            (7 + Math.random() * 7) + "s";

        petalContainer.appendChild(
            petal
        );
    }
}


/* =====================================================
   FIREFLIES
===================================================== */

if (fireflyContainer) {

    for (let i = 0; i < 35; i++) {

        const firefly =
            document.createElement("div");

        firefly.className = "firefly";

        firefly.style.left =
            Math.random() * 100 + "%";

        firefly.style.top =
            (30 + Math.random() * 65) + "%";

        firefly.style.animationDelay =
            Math.random() * 6 + "s";

        firefly.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        fireflyContainer.appendChild(
            firefly
        );
    }
}


/* =====================================================
   WELCOME SCREEN
===================================================== */

const welcomeScreen =
    document.getElementById("welcomeScreen");

const enterButton =
    document.getElementById("enterButton");

const mainContent =
    document.getElementById("mainContent");


if (enterButton) {

    enterButton.addEventListener(
        "click",
        function () {

            welcomeScreen.classList.add("hide");

            setTimeout(
                function () {

                    mainContent.classList.add("show");

                },
                500
            );

        }
    );

}


/* =====================================================
   BIRTHDAY MESSAGES
===================================================== */

/*
   WE WILL PUT THE REAL MESSAGES HERE LATER.
   
   For now, these are placeholders.
*/

const messages = {

    library: {

        label: "A LITTLE LETTER",

        title: "From the Library 🌷",

        message:
            "Your friend's birthday message will appear here. 💗",

        signature:
            "— Your friend ♡"

    },


    cinema: {

        label: "A TINY NOTE",

        title: "From the Cinema 🌸",

        message:
            "Your friend's birthday message will appear here. 💗",

        signature:
            "— Your friend ♡"

    },


    post: {

        label: "FROM FAR AWAY",

        title: "A Message For You 🌺",

        message:
            "Your friend's birthday message will appear here. 💗",

        signature:
            "— Your friend ♡"

    },


    home: {

        label: "ONE LAST THING",

        title: "From Home 💌",

        message:
            "Your birthday message will appear here. 💗",

        signature:
            "— Your bestie ♡"

    }

};


/* =====================================================
   LETTER ELEMENTS
===================================================== */

const letters =
    document.querySelectorAll(".letter");

const letterOverlay =
    document.getElementById("letterOverlay");

const closeButton =
    document.getElementById("closeButton");

const paperLabel =
    document.getElementById("paperLabel");

const paperTitle =
    document.getElementById("paperTitle");

const paperMessage =
    document.getElementById("paperMessage");

const paperSignature =
    document.getElementById("paperSignature");


/* =====================================================
   OPEN LETTER
===================================================== */

letters.forEach(
    function (letter) {

        letter.addEventListener(
            "click",
            function () {

                const letterName =
                    letter.dataset.letter;

                const data =
                    messages[letterName];

                if (!data) {
                    return;
                }

                paperLabel.textContent =
                    data.label;

                paperTitle.textContent =
                    data.title;

                paperMessage.textContent =
                    data.message;

                paperSignature.textContent =
                    data.signature;

                letterOverlay.classList.add(
                    "show"
                );

            }
        );

    }
);


/* =====================================================
   CLOSE LETTER
===================================================== */

if (closeButton) {

    closeButton.addEventListener(
        "click",
        function () {

            letterOverlay.classList.remove(
                "show"
            );

        }
    );

}


/* =====================================================
   CLOSE WHEN CLICKING OUTSIDE LETTER
===================================================== */

if (letterOverlay) {

    letterOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                letterOverlay
            ) {

                letterOverlay.classList.remove(
                    "show"
                );

            }

        }
    );

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            if (letterOverlay) {

                letterOverlay.classList.remove(
                    "show"
                );

            }

        }

    }
);