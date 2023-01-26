// setTimeout(() => {
//     document.querySelector(".loader-bg").classList.add("active");
// }, 300);
// setTimeout(() => {
//     document.querySelector(".loader-bg").style.display = "none";
// }, 2000);

const animatedLogo = document.querySelector(".animated_logo");
const typedText = document.querySelector(".header_logo_title");
const typedText2 = document.querySelector(".header_logo_text");
const cursorSpan = document.querySelectorAll(".cursor");

const textArray = [typedText.getAttribute("data-typing")];
const text2 = typedText2.getAttribute("data-typing");
const typingDelay = 160;
const erasingDelay = 100;
const newTextDelay = 1; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
let charIndex2 = 0;

// play gif on website refresh

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        cursorSpan[1].style.display = "none";
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan[0].style.display = "none";
        if (charIndex2 < text2.length) {
            if (!cursorSpan[1].classList.contains("typing"))
                cursorSpan[1].classList.add("typing");
            cursorSpan[1].style.display = "block";
            typedText2.textContent += text2.charAt(charIndex2);
            charIndex2++;
            setTimeout(type, 90);
        } else {
            cursorSpan[1].classList.remove("typing");
        }
        // setTimeout(erase, newTextDelay);
    }
    return;
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing"))
            cursorSpan.classList.add("typing");
        typedText.textContent = textArray[textArrayIndex].substring(
            0,
            charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

window.addEventListener("load", function () {
    // On DOM Load initiate the effect
    if (typedText) type();
});
if (animatedLogo)
    animatedLogo.src = animatedLogo.src + "?" + new Date().getTime();
