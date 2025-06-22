
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("surpriseButton");
    const audio = document.getElementById("music");
    if (btn && audio) {
        btn.addEventListener("click", function () {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        });
    }
});
