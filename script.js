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

            if (welcomeScreen) {
                welcomeScreen.classList.add("hide");
            }

            setTimeout(
                function () {

                    if (mainContent) {
                        mainContent.classList.add("show");
                    }

                },
                500
            );

        }
    );

}


/* =====================================================
   BIRTHDAY MESSAGES
===================================================== */

const messages = {

    maddu: {

        label: "A LITTLE LETTER",

        title: "Maddu 🌷",

        message:
            "Happy birthday to one of the sweetest people I'm so grateful to have met!🥹💗\nI just want you to know that you truly matter, more than you probably realize. You're such a pretty, intelligent & incredibly strong person, and I genuinely appreciate having you in my life. I hope everything you're going through gets better and that life becomes kinder to you. No matter what happens, please remember that you're never alone. We're all here for you, for anything and everything. You've made it through so much already and I'm so proud of how strong you are. I hope you achieve everything you dream of and become successful in everything you choose to do. You deserve so many beautiful things in life. And until the day we finally get to meet in person, hang on, okay? One day we'll look back at all these online conversations and laugh about how long it took us to finally meet. I'm genuinely so grateful for you. Please keep going, keep smiling, and never forget how loved and appreciated you are. Again, Happy birthday Cacuu!!! Laviyooo mmmmmmmmwahhhh😚",

        signature:
            "~🎂💗✨🥂"

    },


    lithu: {

        label: "A TINY NOTE",

        title: "Lithu 🌸",

        message:
            "Happy Birthday, My Best Friend! 🎂🤍✨\nඅපි කවදාවත් ඇස් දෙකට දැකලා නැති වුණත්, මගේ ජීවිතේ මට හම්බවුණු හොඳම මිනිස්සු අතරින් ඔයාට තියෙන්නේ හරිම විශේෂ තැනක්. 🥹❤️ දුර කියන්නේ කිලෝමීටර් ගාණක් විතරයි කියලා මට හිතෙන්නේ ඔයා නිසා.\nමගේ සතුටේදී වගේම මගේ අමාරුම දවස්වලත් මාව අහගෙන, මට හිනා වෙන්න හේතුවක් වෙලා, මගේ හොඳම යාළුවා වෙලා හිටියට ගොඩක් ස්තූතියි. 🫂💗\nකවදාහරි දවසක අපි ඇත්තටම හම්බවෙලා, \"අපි මෙච්චර කාලයක් මෙහෙම යාළුවෙලා හිටියද?\" කියලා හිනා වෙන්න පුළුවන් වෙයි කියලා මම හිතනවා. 🥺🤍\nඔයාගේ ජීවිතේ හැම හීනයක්ම හැබෑ වෙන්න, හැමදාම සතුටින් ඉන්න, හිතට නිදහසක් තියෙන ලස්සන ජීවිතයක් ලැබෙන්න මම හදවතින්ම ප්‍රාර්ථනා කරනවා. 🎂✨\nHappy Birthday to the person I've never met, but somehow became one of the closest people to my heart. ❤️‍🩹🫶🏻\nදුර කොච්චර තිබුණත්… ඔයා මගේ හොඳම යාළුවා. 🤍♾️",

        signature:
            ""

    },


    dewaakki: {

        label: "FROM FAR AWAY",

        title: "Dewa Akki 🌺",

        message:
            "සුබ හෙලුකුට්ටන් දිනයක් වේවා ලොකූ 🥳🥳🎊🎊🎉💕💕❤️✨\nපුංචි පෞලෙ වයසින් පොඩි, හැබැයි අනිත් ඒවගෙන් ලොකු එකීට දැන් 18 කුත් වෙලා 🥹🥹\nමගේ ජීවිතේ හම්බුනු වටිනම කෙනෙක් තමා ඔයා ලොකූ....ඔයා නිසා මන් ජීවිතේ මොන තරම් දේවල් වෙන්න පුලුවන්ද කියලා ඉගෙන ගත්තා, කෙනෙක් ව අහන් ඉන්න එක ඇත්තටම නරකම නෑ කියලා ඉගෙන ගත්තා, ඒ වගේම මට මගෙම නන්ගියෙක් හම්බුනා කියලා දැණුනා 🫂❤️‍🩹\nඔයාගෙ මේ ලස්සන දවසෙන් පස්සෙ ඔයා තියන හැම පියවරක්ම, ගන්න හැම තීරණයක්ම වගේම හම්බෙන හැම කෙනෙක්ම හොද වෙන්න කියලා මන් මගෙ මුලු හදවතින්ම ප්‍රාර්ථනා කරනවා ❤️✨️\nඔයා ඒ ගන්න හැම පියවරකදිම ඒකෙ හොද නරක තේරුම් කරලා දෙන්න, එකකුස නූපන් අක්කා කෙනෙක් ඉන්න වග අමතක කරන්නෙපා 🤗🫂❤️✨️\nආයෙමත්, ඔයාට සුබම සුබ උපන්දිනයක් වේවා මගෙ නන්ගි! මන්, අපේ පුංචි පවුල, ඔයාට ආදරෙයි ❤️❤️❤️❤️",

        signature:
            ""

    },


    punchipawula: {

        label: "ONE LAST THING",

        title: "පුංචි පවුල 💌",

        message:
            "We might just be a bunch of texts, calls, and late-night voice notes… but we're still your family. 🫂💗\nලෝකේ කොහේ හිටියත්, ඔයාට අමාරුවක් ආවොත් හෝ සතුටක් ආවොත්, අපි ඔයා එක්ක ඉන්නවා — always. No matter the distance, no matter the time zones.\nYou're not just someone we talk to online. You're ours. පුංචි පවුලේ කෙනෙක්. ❤️\nSo today, and every day after — happy birthday, and welcome home. 🏡✨",

        signature:
            "~ your පුංචි පවුල, always here for you ♡"

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

                if (paperLabel) {
                    paperLabel.textContent = data.label;
                }

                if (paperTitle) {
                    paperTitle.textContent = data.title;
                }

                if (paperMessage) {
                    paperMessage.textContent = data.message;
                }

                if (paperSignature) {
                    paperSignature.textContent = data.signature;
                }

                if (letterOverlay) {
                    letterOverlay.classList.add("show");
                }

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

            if (letterOverlay) {
                letterOverlay.classList.remove("show");
            }

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
