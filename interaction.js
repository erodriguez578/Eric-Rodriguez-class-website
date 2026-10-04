const vinyl = document.querySelector("#vinyl");
const nowPlaying = document.querySelector("#now-playing");
const audio = document.querySelector("#record-audio");

function playRecord() {
    vinyl.classList.toggle("spinning");

    if (vinyl.classList.contains("spinning")) {
        nowPlaying.textContent = "NOW PLAYING • SIDE A";
        nowPlaying.classList.add("playing-status");
        audio.play();
    } else {
        nowPlaying.textContent = "READY TO PLAY";
        nowPlaying.classList.remove("playing-status");
        audio.pause();
    }
}
vinyl.addEventListener("click", playRecord);