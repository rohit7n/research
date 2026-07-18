/* =========================
   RESEARCH VAULT SCRIPT
========================= */


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");


menuBtn.addEventListener("click",()=>{

    nav.classList.toggle("active");

});



/* Close menu after clicking link */

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

    });

});





/* =========================
   PUBLICATION SEARCH
========================= */

const searchInput = document.getElementById("searchInput");

const cards = document.querySelectorAll(".card");


searchInput.addEventListener("input",()=>{


    let searchValue =
    searchInput.value.toLowerCase();



    cards.forEach(card=>{


        let content =
        card.innerText.toLowerCase();



        if(content.includes(searchValue)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }


    });


});





/* =========================
   SCROLL REVEAL
========================= */


const revealItems =
document.querySelectorAll(
".card,.box,.hero,.search"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){

        entry.target.classList.add("visible");

    }


});


},
{
    threshold:.15
});



revealItems.forEach(item=>{


    item.classList.add("hidden");

    observer.observe(item);


});







/* =========================
   CURSOR BLUE LIGHT
========================= */


const cursorGlow =
document.createElement("div");


cursorGlow.className="cursor-glow";


document.body.appendChild(cursorGlow);



document.addEventListener(
"mousemove",
(e)=>{


cursorGlow.style.left =
e.clientX+"px";


cursorGlow.style.top =
e.clientY+"px";


});







/* =========================
   CARD TILT EFFECT
========================= */


cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();



const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



const rotateX =
((y / rect.height)-0.5)*8;


const rotateY =
((x / rect.width)-0.5)*8;



card.style.transform =
`
perspective(700px)
rotateX(${-rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;



});





card.addEventListener(
"mouseleave",
()=>{


card.style.transform =
"translateY(0)";


});



});







/* =========================
   SCROLL PROGRESS
========================= */


const progress =
document.createElement("div");


progress.className="scroll-progress";


document.body.appendChild(progress);



window.addEventListener(
"scroll",
()=>{


let height =
document.documentElement.scrollHeight -
window.innerHeight;



let progressWidth =
(window.scrollY / height)*100;



progress.style.width =
progressWidth+"%";


});







/* =========================
   CONSOLE MESSAGE
========================= */


console.log(
"%cResearch Vault Initialized",
"color:#3b82f6;font-size:18px;font-weight:bold;"
);