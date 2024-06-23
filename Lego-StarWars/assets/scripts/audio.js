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

const onCantina = document.getElementById("onCantina");
const onWaves = document.getElementById("onWaves");
const onEseerin = document.getElementById("onEseerin");
const offCantina = document.getElementById("offCantina");
const offWaves = document.getElementById("offWaves");
const offEseerin = document.getElementById("offEseerin");

// === AUDIO ===
const sfxObiwan = new Audio("../assets/audio/obiwan.mp3");
const sfxChewy = new Audio("../assets/audio/chewy.mp3");
const sfxHan = new Audio("../assets/audio/han-alt.mp3");
const sfxLeia = new Audio("../assets/audio/leia.mp3");
const sfxC3PO = new Audio("../assets/audio/c3po-alt.mp3");
const sfxR2D2 = new Audio("../assets/audio/r2d2.mp3");
const sfxLuke = new Audio("../assets/audio/luke.mp3");
const sfxYoda = new Audio("../assets/audio/yoda.mp3");

const songCantina = new Audio("../assets/audio/cantina.mp3");
const songWaves = new Audio("../assets/audio/waves.mp3");
const songEseerin = new Audio("../assets/audio/eseerin.mp3");

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
songCantina.loop = true;
songWaves.loop = true;
songEseerin.loop = true;
onCantina.addEventListener("click", () => {
    playCantina();
})
offCantina.addEventListener("click", () => {
    playCantina();
})

onWaves.addEventListener("click", () => {
    playWaves();
})
offWaves.addEventListener("click", () => {
    playWaves();
})

onEseerin.addEventListener("click", () => {
    playEseerin();
})
offEseerin.addEventListener("click", () => {
    playEseerin();
})
function playCantina() {
    if (songCantina.paused) {
        songCantina.play();
        songWaves.pause();
        songEseerin.pause();
        onCantina.style.visibility = "visible";
        onWaves.style.visibility = "hidden";
        onEseerin.style.visibility = "hidden";
        offCantina.style.visibility = "hidden";
        offWaves.style.visibility = "visible";
        offEseerin.style.visibility = "visible";
        btnRadio.style.animationPlayState = "running";
    } else {
        songCantina.pause();
        onCantina.style.visibility = "hidden";
        offCantina.style.visibility = "visible";
        btnRadio.style.animationPlayState = "paused";
    }
}
function playWaves() {
    if (songWaves.paused) {
        songWaves.play();
        songCantina.pause();
        songEseerin.pause();
        onCantina.style.visibility = "hidden";
        onWaves.style.visibility = "visible";
        onEseerin.style.visibility = "hidden";
        offCantina.style.visibility = "visible";
        offWaves.style.visibility = "hidden";
        offEseerin.style.visibility = "visible";
        btnRadio.style.animationPlayState = "running";
    } else {
        songWaves.pause();
        onWaves.style.visibility = "hidden";
        offWaves.style.visibility = "visible";
        btnRadio.style.animationPlayState = "paused";
    }
}
function playEseerin() {
    if (songEseerin.paused) {
        songEseerin.play();
        songCantina.pause();
        songWaves.pause();
        onCantina.style.visibility = "hidden";
        onWaves.style.visibility = "hidden";
        onEseerin.style.visibility = "visible";
        offCantina.style.visibility = "visible";
        offWaves.style.visibility = "visible";
        offEseerin.style.visibility = "hidden";
        btnRadio.style.animationPlayState = "running";
    } else {
        songEseerin.pause();
        onEseerin.style.visibility = "hidden";
        offEseerin.style.visibility = "visible";
        btnRadio.style.animationPlayState = "paused";
    }
}