gsap.registerPlugin(ScrollTrigger, SplitText);

let sections = gsap.utils.toArray(".panel");
let cards = gsap.utils.toArray(".card");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".horizont",
        pin: true,
        scrub: 1,
        // snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".horizont").offsetWidth,
    }
});

gsap.from(cards, {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.2
});

const title = document.querySelector(".about__title");
const text = document.querySelector(".about__text");
const splitText = new SplitText(text, { type: "words" });
gsap.set(title, { perspective: 400 });

splitText.split({ type: "lines" });
gsap.from(splitText.lines, {
    scrollTrigger: {
        trigger: '#about',
        start: "left center",
        markers: true
    },
    duration: 0.5,
    opacity: 0,
    rotationX: -100,
    force3D: true,
    transformOrigin: "top center -150",
    stagger: 0.05,
});