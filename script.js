/* =====================================================
   CREATE STARS
===================================================== */

const stars =
    document.getElementById("stars");


for (let i = 0; i < 150; i++) {

    const star =
        document.createElement("div");

    star.className =
        "star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 4 + "s";

    star.style.animationDuration =
        (2 + Math.random() * 4) + "s";

    stars.appendChild(star);
}



/* =====================================================
   CREATE FLOATING SPARKLES
===================================================== */

const sparkles =
    document.getElementById("sparkles");


for (let i = 0; i < 30; i++) {

    const sparkle =
        document.createElement("div");

    sparkle.className =
        "sparkle";

    if (Math.random() > 0.5) {

        sparkle.textContent =
            "✦";

    } else {

        sparkle.textContent =
            "✧";

    }

    sparkle.style.left =
        Math.random() * 100 + "%";

    sparkle.style.top =
        (35 + Math.random() * 65) + "%";

    sparkle.style.animationDelay =
        Math.random() * 8 + "s";

    sparkle.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    sparkles.appendChild(sparkle);
}



/* =====================================================
   WELCOME SCREEN
===================================================== */

const enterButton =
    document.getElementById("enterButton");

const welcomeScreen =
    document.getElementById("welcomeScreen");

const mainContent =
    document.getElementById("mainContent");


enterButton.addEventListener(
    "click",
    function () {

        welcomeScreen.classList.add("hide");

        mainContent.classList.add("show");

    }
);



/* =====================================================
   BIRTHDAY MESSAGES
===================================================== */

const messages = {

    library: {

        label:
            "A LITTLE LETTER",

        title:
            "From Friend 1 ♡",

        message:
            "[PASTE FRIEND 1'S MESSAGE HERE]\n\n" +
            "You can write your Sinhala message here.\n\n" +
            "සුභ උපන්දිනයක් වේවා! ❤️\n\n" +
            "Have the most beautiful birthday ever! ✨",

        signature:
            "With love, Friend 1 ♡"

    },


    cinema: {

        label:
            "A TINY NOTE",

        title:
            "From Friend 2 ♡",

        message:
            "[PASTE FRIEND 2'S MESSAGE HERE]\n\n" +
            "මේ message එක ඇතුළට ඔයාගේ friend ගේ Sinhala wish එක දාන්න.\n\n" +
            "May this year bring you so many beautiful memories. 🌷",

        signature:
            "With love, Friend 2 ♡"

    },


    post: {

        label:
            "FROM FAR AWAY",

        title:
            "From Friend 3 ♡",

        message:
            "[PASTE FRIEND 3'S MESSAGE HERE]\n\n" +
            "Even though we're far away,\n" +
            "I hope this little message reaches you.\n\n" +
            "ඔයාට ලස්සනම උපන්දිනයක් වේවා! ✨",

        signature:
            "From somewhere far away ♡"

    },


    home: {

        label:
            "ONE LAST THING",

        title:
            "From Me ♡",

        message:
            "[PASTE YOUR MESSAGE HERE]\n\n" +
            "This is where you can put your own personal birthday message.\n\n" +
            "Make this one as emotional, chaotic, or silly as you want. 😂❤️\n\n" +
            "සුභ උපන්දිනයක් වේවා! ✨",

        signature:
            "With lots of love, from me ♡"

    }

};



/* =====================================================
   LETTER ELEMENTS
===================================================== */

const letters =
    document.querySelectorAll(".letter");

const overlay =
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


                paperLabel.textContent =
                    data.label;

                paperTitle.textContent =
                    data.title;

                paperMessage.textContent =
                    data.message;

                paperSignature.textContent =
                    data.signature;


                overlay.classList.add("show");

                document.body.style.overflow =
                    "hidden";

            }
        );

    }
);



/* =====================================================
   CLOSE LETTER
===================================================== */

function closeLetter() {

    overlay.classList.remove("show");

    document.body.style.overflow =
        "";

}


closeButton.addEventListener(
    "click",
    closeLetter
);



/* =====================================================
   CLICK OUTSIDE LETTER
===================================================== */

overlay.addEventListener(
    "click",
    function (event) {

        if (
            event.target === overlay
        ) {

            closeLetter();

        }

    }
);



/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeLetter();

        }

    }
);