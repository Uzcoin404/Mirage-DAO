AOS.init();

setTimeout(() => {
    document.querySelector(".loader-bg").classList.add("active");
}, 300);
setTimeout(() => {
    document.querySelector(".loader-bg").style.display = "none";
}, 2000);

var TypeMachine = function (element, speed) {
    var element = document.querySelector(element),
        innerText = element.innerText,
        speed = speed || 80,
        i = 0,
        text;

    element.innerText = "";

    (function type() {
        if (text === innerText) {
            return;
        }
        text = innerText.slice(0, ++i);
        element.innerText = text;
        setTimeout(type, speed);
    })();
};

TypeMachine(".header_logo_title", 150);