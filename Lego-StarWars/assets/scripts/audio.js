// === IMAGES ===
const btnObiwan = document.querySelector(".obiwan");
const btnChewy = document.querySelector(".chewy");
const btnHan = document.querySelector(".han");
const btnLeia = document.querySelector(".leia");
const btnC3PO = document.querySelector(".c3po");
const btnR2D2 = document.querySelector(".r2d2");
const btnLuke = document.querySelector(".luke");
const btnYoda = document.querySelector(".yoda");
const btnRadio = document.querySelector(".radio");

// === AUDIO ===
const loadObiwan = ("../audio/obiwan.mp3");
const loadChewy = ("../audio/chewy.mp3");
const loadHan = ("../audio/han-alt.mp3");
const loadLeia = ("../audio/leia.mp3");
const loadC3PO = ("../audio/c3po-alt.mp3");
const loadR2D2 = ("../audio/r2d2.mp3");
const loadLuke = ("../audio/luke.mp3");
const loadYoda = ("../audio/yoda.mp3");
const loadRadio = ("./audio/radio.mp3");

const sfxObiwan = new Audio(loadObiwan);
const sfxChewy = new Audio(loadChewy);
const sfxHan = new Audio(loadHan);
const sfxLeia = new Audio(loadLeia);
const sfxC3PO = new Audio(loadC3PO);
const sfxR2D2 = new Audio(loadR2D2);
const sfxLuke = new Audio(loadLuke);
const sfxYoda = new Audio(loadYoda);
const sfxRadio = new Audio(loadRadio);

// === PLAY FUNCTIONS ===
btnObiwan.addEventListener("click", function() {
    sfxObiwan.currentTime = 0;
    sfxObiwan.play();
});
btnChewy.addEventListener("click", function() {
    sfxChewy.currentTime = 0;
    sfxChewy.play();
});
btnHan.addEventListener("click", function() {
    sfxHan.currentTime = 0;
    sfxHan.play();
});
btnLeia.addEventListener("click", function() {
    sfxLeia.currentTime = 0;
    sfxLeia.play();
});
btnC3PO.addEventListener("click", function() {
    sfxC3PO.currentTime = 0;
    sfxC3PO.play();
});
btnR2D2.addEventListener("click", function() {
    sfxR2D2.currentTime = 0;
    sfxR2D2.play();
});
btnLuke.addEventListener("click", function() {
    sfxLuke.currentTime = 0;
    sfxLuke.play();
});
btnYoda.addEventListener("click", function() {
    sfxYoda.currentTime = 0;
    sfxYoda.play();
});

// === RADIO ===
sfxRadio.loop = true;
btnRadio.addEventListener("click", () => {
    playMusic();
    playAnimation();
})
function playMusic() {
    if (sfxRadio.paused) {
        sfxRadio.play();
    } else {
        sfxRadio.pause();
    }
}
function playAnimation() {
    if (btnRadio.style.animationPlayState === "paused" || btnRadio.style.animationPlayState === "") {
        btnRadio.style.animationPlayState = "running";
    } else {
        btnRadio.style.animationPlayState = "paused";
    }
}