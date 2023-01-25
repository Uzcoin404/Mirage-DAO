// setTimeout(() => {
//     document.querySelector(".loader-bg").classList.add("active");
// }, 300);
// setTimeout(() => {
//     document.querySelector(".loader-bg").style.display = "none";
// }, 2000);

const typedText = document.querySelector(".header_logo_title");
const typedText2 = document.querySelector(".header_logo_text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [typedText.getAttribute("data-typing")];
const text2 = typedText2.getAttribute("data-typing");
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 1; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
let charIndex2 = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing"))
            cursorSpan.classList.add("typing");
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        if (charIndex < text2.length) {
            typedText2.textContent += text2.charAt(charIndex2);
            charIndex2++;
            setTimeout(type, 75);
        }
        cursorSpan.classList.remove("typing");
        // setTimeout(erase, newTextDelay);
    }
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
    if (typedText2) setTimeout(type2, 1500);
});
