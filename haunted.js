// AI-assisted code

const creepyEye = document.querySelector("#creepy-eye");
const eyeContainer = document.querySelector(".eye-container");
const ambientAudio = document.querySelector("#ambient-audio");
const warningText = document.querySelector("#warning-text");
const knockAudio = document.querySelector("#knock-audio");
const hauntedPage = document.querySelector(".haunted-page");
const choices = document.querySelector("#choices");
const yesButton = document.querySelector("#yes-button");
const noButton = document.querySelector("#no-button");
const whisperAudio = document.querySelector("#whisper-audio");

function revealEye() {
    eyeContainer.style.opacity = "1";
}

document.addEventListener("mousemove", function(event) {
    revealEye();

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const moveX = (mouseX / window.innerWidth - 0.5) * 40;
    const moveY = (mouseY / window.innerHeight - 0.5) * 25;

    creepyEye.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
// AI-assisted code
function changeWarning() {
    warningText.textContent = "Don't touch anything.";
}

setTimeout(changeWarning, 4000);

// AI-assisted code
function startAmbientSound() {
    ambientAudio.volume = 0.35;
    ambientAudio.play();

    warningText.textContent = "I told you not to.";

    setTimeout(function() {
    knockAudio.volume = 0.8;
    knockAudio.play();

    // AI-assisted code
    setTimeout(function() {
        hauntedPage.classList.add("flicker");
        setTimeout(function() {
        warningText.textContent = "Did you hear that?";
        choices.style.display = "flex";
    }, 900);
    }, 400);

}, 3000);
}
// AI-assisted code
function playWhisper() {
    whisperAudio.volume = 0.7;
    whisperAudio.play();
}
// AI-assisted code
function answerYes() {
    choices.style.display = "none";
    warningText.textContent = "Good. I'm not imagining it either.";
    setTimeout(playWhisper, 3000);
}

yesButton.addEventListener("click", answerYes);
// AI-assisted code
function answerNo() {
    choices.style.display = "none";
    warningText.textContent = "Don't lie to me.";

    creepyEye.classList.add("angry-eye");
    setTimeout(playWhisper, 3000);
}

noButton.addEventListener("click", answerNo);

document.addEventListener("click", startAmbientSound, { once: true });