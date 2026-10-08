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
const jumpScare = document.querySelector("#jump-scare");
const screamAudio = document.querySelector("#scream-audio");
const creepyFarewell = document.querySelector("#creepy-farewell");
const hushAudio = document.querySelector("#hush-audio");
const restartScreen = document.querySelector("#restart-screen");
const mainHeading = document.querySelector(".haunted-page h1");

// AI-assisted code
let eyeReady = false;
let isBlackout = false;

setTimeout(function() {
    eyeReady = true;
}, 6000);

function revealEye() {
    if (eyeReady && !isBlackout) {
        eyeContainer.style.opacity = "1";
    }
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
    warningText.textContent = "If you're scared, DO NOT CLICK ANYTHING!";
}

setTimeout(changeWarning, 5000);

// AI-assisted code
function startAmbientSound() {
    ambientAudio.volume = 0.50;
    ambientAudio.play();

    warningText.textContent = "I TOLD YOU NOT TO!";

    setTimeout(function() {
    knockAudio.volume = 0.8;
    knockAudio.play();

    // AI-assisted code
    setTimeout(function() {
        hauntedPage.classList.add("flicker");
        setTimeout(function() {
        warningText.textContent = "Did you hear that???";
        choices.style.display = "flex";
    }, 950);
    }, 400);

}, 3000);
}

// AI-assisted code
function playWhisper() {
    whisperAudio.volume = 0.7;
    whisperAudio.play();

    // Screen flickers and warning appears
    setTimeout(function() {
        hauntedPage.classList.remove("flicker");

        void hauntedPage.offsetWidth;
        hauntedPage.classList.add("flicker");

        warningText.textContent = "YOU SHOULDN'T BE HERE.";

        // Screen goes black
        setTimeout(function() {
            isBlackout = true;

            mainHeading.style.display = "none";
            eyeContainer.style.opacity = "0";
            hauntedPage.classList.remove("flicker");
            hauntedPage.style.background = "black";
            warningText.textContent = "";

            // Final warning appears
            setTimeout(function() {
                warningText.textContent = "LOOK OUT, IT'S BEHIND YOU!!!!!";
                warningText.classList.add("final-scare");

            // Jump scare!
ambientAudio.volume = 0.10;

screamAudio.volume = 0.85;
screamAudio.currentTime = 0;
screamAudio.play();

// Show GIF after 0.9 seconds
setTimeout(function() {
    jumpScare.style.display = "block";

    // Hide original jump scare after 2 seconds
setTimeout(function() {
    jumpScare.style.display = "none";

    // Brief silence before the final trap
    setTimeout(function() {
        creepyFarewell.style.display = "block";

        ambientAudio.pause();
        screamAudio.pause();

        hushAudio.volume = 0.8;
        hushAudio.currentTime = 0;
        hushAudio.play();

        // AI-assisted code - Final restart screen
hushAudio.addEventListener("ended", function() {
    creepyFarewell.style.display = "none";

    // Show restart screen after a short pause
    setTimeout(function() {
        restartScreen.style.display = "flex";
    }, 1000);

}, { once: true });

    }, 2500);

}, 2000);

}, 900);

            }, 2000);

        }, 3000);

    }, 1500);
}

// AI-assisted code
function answerYes() {
    choices.style.display = "none";
    warningText.textContent = "Thank God! I thought I was the only one.";
    setTimeout(playWhisper, 3000);
}

yesButton.addEventListener("click", answerYes);
// AI-assisted code
function answerNo() {
    choices.style.display = "none";
    warningText.textContent = "DON'T LIE TO ME! I KNOW YOU DID!";

    creepyEye.classList.add("angry-eye");
    setTimeout(playWhisper, 3000);
}

noButton.addEventListener("click", answerNo);

document.addEventListener("click", startAmbientSound, { once: true });