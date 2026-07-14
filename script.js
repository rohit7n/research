/* ==========================================
   Research Portfolio
   script.js
========================================== */


/* ==========================
   Search Publications
========================== */

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".research-card");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

});


/* ==========================
   Scroll Reveal Animation
========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

cards.forEach(card => {

    observer.observe(card);

});


/* ==========================
   Stagger Animation
========================== */

cards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 120}ms`;

});


/* ==========================
   Navbar Shadow on Scroll
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 35px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* ==========================
   Smooth Button Hover
========================== */

const buttons = document.querySelectorAll(".card-btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.innerHTML = "Read Research ↗";

    });

    btn.addEventListener("mouseleave", () => {

        btn.innerHTML = "Read Research →";

    });

});


/* ==========================
   Mouse Glow Effect
========================== */

const blurOne = document.querySelector(".blur-one");
const blurTwo = document.querySelector(".blur-two");

document.addEventListener("mousemove", (e) => {

    const x = e.clientX;
    const y = e.clientY;

    blurOne.style.transform =
        `translate(${x * 0.02}px, ${y * 0.02}px)`;

    blurTwo.style.transform =
        `translate(${-x * 0.015}px, ${-y * 0.015}px)`;

});


/* ==========================
   Active Navigation
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.clientHeight;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================
   Hero Fade In
========================== */

window.addEventListener("load", () => {

    document.querySelector(".hero").style.opacity = "1";
    document.querySelector(".hero").style.transform = "translateY(0)";

});


/* ==========================
   Console Signature
========================== */

console.log(`
==========================================
   Research Portfolio
   Ultramarine Black Theme
==========================================
`);
