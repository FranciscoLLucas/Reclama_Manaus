const hoverSound = new Audio("sound/hover.mp3");
const clickSound = new Audio("sound/click.mp3");

let audioUnlocked = false;

function unlockAudio() {
    if (!audioUnlocked) {
        const a = new Audio();
        a.play().catch(() => {});
        audioUnlocked = true;
    }
}
document.addEventListener("click", unlockAudio);
document.addEventListener("keydown", unlockAudio);

async function playClickAndNavigate(url) {
    clickSound.currentTime = 0;
    await clickSound.play().catch(()=>{});

    await new Promise(res => setTimeout(res, 250));

    window.location.href = url;
}

document.querySelectorAll("[data-link]").forEach(el => {
    const url = el.getAttribute("data-link");

    el.addEventListener("click", (e) => {
        e.preventDefault();
        playClickAndNavigate(url);
    });
});

function playHover() {
    hoverSound.currentTime = 0;
    hoverSound.play().catch(()=>{});
}
function playClick() {
    clickSound.currentTime = 0;
    clickSound.play().catch(()=>{});
}

function setupSoundEvents() {
    const elements = document.querySelectorAll(".btn, .btn-sound, button, .card, a");

    elements.forEach(el => {
        el.addEventListener("mouseenter", playHover);

        if (!el.hasAttribute("data-link")) {
            el.addEventListener("click", playClick);
        }
    });
}
function setupSelectSound() {
    const select = document.getElementById("colorblind-mode");

    if (!select) return;
    select.addEventListener("mouseenter", () => {
        hoverSound.currentTime = 0;
        hoverSound.play().catch(()=>{});
    });

    select.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play().catch(()=>{});
    });

    select.addEventListener("change", () => {
        clickSound.currentTime = 0;
        clickSound.play().catch(()=>{});
    });
}
window.addEventListener("DOMContentLoaded", () => {
    setupSoundEvents(); 
    setupSelectSound(); 
});

