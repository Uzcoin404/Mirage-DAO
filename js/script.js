AOS.init();

setTimeout(() => {
    document.querySelector(".loader-bg").classList.add("active");
}, 300);
setTimeout(() => {
    document.querySelector(".loader-bg").style.display = "none";
}, 2000);
gsap.registerPlugin(ScrollTrigger, SplitText);

const title = document.querySelector(".header_logo_title");
const goalText = document.querySelector(".goal_text");
const splitText = new SplitText(title, { type: "chars" });
gsap.set(title, { perspective: 400 });

gsap.from(splitText.chars, {
    opacity: 0,
    y: 50,
    ease: "back(4)",
    stagger: {
        from: "edge",
        each: 0.1,
    },
    delay: 0.6,
});

const goalSplitText = new SplitText(goalText, { type: "lines" });
gsap.from(goalSplitText.lines, {
    duration: 0.8,
    opacity: 0,
    rotationX: -120,
    force3D: true,
    transformOrigin: "top center -150",
    stagger: 0.1,
    scrollTrigger: ".goal_text",
});
