/* =====================================================
   BUTTERFLIES
===================================================== */

const butterflyContainer =
    document.getElementById("butterflies");


const butterflySymbols = [
    "🦋",
    "🦋",
    "🦋"
];


for (let i = 0; i < 12; i++) {

    const butterfly =
        document.createElement("div");

    butterfly.className =
        "butterfly";

    butterfly.textContent =
        butterflySymbols[
            Math.floor(
                Math.random() *
                butterflySymbols.length
            )
        ];

    butterfly.style.left =
        Math.random() * 100 + "%";

    butterfly.style.top =
        (25 + Math.random() * 70) + "%";

    butterfly.style.animationDelay =
        Math.random() * 12 + "s";

    butterfly.style.animationDuration =
        (10 + Math.random() * 8) + "s";

    butterflyContainer.appendChild(
        butterfly
    );

}



/* =====================================================
   FALLING FLOWER PETALS
===================================================== */

const petalContainer =
    document.getElementById("petals");


const petalSymbols = [
    "✿",
    "❀",
    "·"
];


for (let i = 0; i < 30; i++) {

    const petal =
        document.createElement("div");

    petal.className =
        "petal";

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



/* =====================================================
   FIREFLIES
===================================================== */

const fireflyContainer =
    document.getElementById("fireflies");


for (let i = 0; i < 35; i++) {

    const firefly =
        document.createElement("div");

    firefly.className =
        "firefly";

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