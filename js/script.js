AOS.init();

gsap.registerPlugin(ScrollTrigger, SplitText);

let cards = gsap.utils.toArray(".about_card");

// gsap.from(cards, {
//     opacity: 0,
//     y: 100,
//     duration: 1,
//     stagger: 0.2,
//     autoAlpha: 0,
//     scrollTrigger: {
//         trigger: '.about',
//         start: 'top bottom'
//     }
// });

const title = document.querySelectorAll(".title");
const goalText = document.querySelectorAll(".goal_text");
const splitText = new SplitText(title, { type: "lines, words" });
gsap.set(title, { perspective: 400 });

gsap.from(splitText.words, {
    duration: 0.5,
    opacity: 0,
    rotationX: -100,
    force3D: true,
    transformOrigin: "top center -150",
    stagger: 0.05,
});

const goalSplitText = new SplitText(goalText, { type: "lines" });
gsap.from(goalSplitText.lines, {
    duration: 0.8,
    opacity: 0,
    rotationX: -120,
    force3D: true,
    transformOrigin: "top center -150",
    stagger: 0.2,
    scrollTrigger: ".goal_text",
});