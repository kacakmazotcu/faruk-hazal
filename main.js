
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("surpriseButton");
    const audio = document.getElementById("music");
    if (btn && audio) {
        btn.addEventListener("click", function () {
            audio.play().then(() => {
                audio.currentTime = 30;
            }).catch(e => console.log("Playback error:", e));
        });
    }
});
