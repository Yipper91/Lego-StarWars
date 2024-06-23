const video = document.querySelector(".video-player")

video.addEventListener('mouseenter', togglePlay)
video.addEventListener('mouseleave', togglePause)

function togglePlay() {
    video.play();
}
function togglePause() {
    video.pause();
}