/* =========================================================
   RESEARCH VAULT
   TECH WEBSITE INTERACTIONS
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const menuBtn =
    document.querySelector(".menu-btn");

const nav =
    document.querySelector(".main-nav");


const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");


const cards =
    Array.from(
        document.querySelectorAll(".card")
    );


const searchCount =
    document.getElementById("searchCount");


const noResults =
    document.getElementById("noResults");


const progress =
    document.querySelector(".scroll-progress");


/* =========================================================
   MOBILE MENU
========================================================= */

function closeMenu() {

    if (!menuBtn || !nav) return;

    menuBtn.classList.remove("active");

    nav.classList.remove("active");

    menuBtn.setAttribute(
        "aria-expanded",
        "false"
    );

    menuBtn.setAttribute(
        "aria-label",
        "Open menu"
    );

    document.body.classList.remove(
        "menu-open"
    );

}


function openMenu() {

    if (!menuBtn || !nav) return;

    menuBtn.classList.add("active");

    nav.classList.add("active");

    menuBtn.setAttribute(
        "aria-expanded",
        "true"
    );

    menuBtn.setAttribute(
        "aria-label",
        "Close menu"
    );

    document.body.classList.add(
        "menu-open"
    );

}


if (menuBtn && nav) {

    menuBtn.addEventListener(
        "click",
        () => {

            const isOpen =
                nav.classList.contains(
                    "active"
                );


            if (isOpen) {

                closeMenu();

            } else {

                openMenu();

            }

        }
    );


    nav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                closeMenu
            );

        });


    document.addEventListener(
        "click",
        event => {

            if (
                !event.target.closest(
                    ".site-header"
                )
            ) {

                closeMenu();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeMenu();

            }

        }
    );

}


/* =========================================================
   SEARCH
========================================================= */

function updateSearch() {

    if (!searchInput) return;


    const query =
        searchInput.value
            .trim()
            .toLowerCase();


    let visibleCount = 0;


    cards.forEach(card => {

        const content =
            card.textContent
                .toLowerCase();


        const matches =
            query === "" ||
            content.includes(query);


        card.hidden =
            !matches;


        if (matches) {

            visibleCount++;

        }

    });


    if (clearSearch) {

        clearSearch.hidden =
            query.length === 0;

    }


    if (searchCount) {

        searchCount.textContent =
            `${String(visibleCount).padStart(2, "0")} ${
                visibleCount === 1
                    ? "RESULT"
                    : "RESULTS"
            }`;

    }


    if (noResults) {

        noResults.hidden =
            visibleCount !== 0;

    }

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        updateSearch
    );

}


if (clearSearch) {

    clearSearch.addEventListener(
        "click",
        () => {

            searchInput.value = "";

            updateSearch();

            searchInput.focus();

        }
    );

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealItems =
    document.querySelectorAll(
        ".hero-content, .hero-visual, .search-box, .card, .content-box"
    );


const reducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (!reducedMotion) {

    revealItems.forEach(item => {

        item.classList.add(
            "reveal"
        );

    });


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: .12,
                rootMargin:
                    "0px 0px -25px 0px"
            }
        );


    revealItems.forEach(item => {

        observer.observe(item);

    });

}


/* =========================================================
   DESKTOP CARD MOTION
========================================================= */

const finePointer =
    window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    ).matches;


if (
    finePointer &&
    !reducedMotion
) {

    cards.forEach(card => {

        card.addEventListener(
            "pointermove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const rotateX =
                    ((y / rect.height) - .5) * 3;


                const rotateY =
                    ((x / rect.width) - .5) * 3;


                card.style.transform =
                    `
                    perspective(900px)
                    rotateX(${-rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-5px)
                    `;

            }
        );


        card.addEventListener(
            "pointerleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });

}


/* =========================================================
   SCROLL PROGRESS
========================================================= */

function updateProgress() {

    if (!progress) return;


    const pageHeight =
        document.documentElement
            .scrollHeight -
        window.innerHeight;


    if (pageHeight <= 0) {

        progress.style.width = "0%";

        return;

    }


    const percentage =
        (
            window.scrollY /
            pageHeight
        ) * 100;


    progress.style.width =
        `${Math.min(
            100,
            Math.max(0, percentage)
        )}%`;

}


window.addEventListener(
    "scroll",
    updateProgress,
    {
        passive: true
    }
);


window.addEventListener(
    "resize",
    updateProgress
);


updateProgress();


/* =========================================================
   KEYBOARD SEARCH SHORTCUT
   "/" focuses search
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "/" &&
            document.activeElement.tagName !== "INPUT" &&
            document.activeElement.tagName !== "TEXTAREA"
        ) {

            event.preventDefault();

            if (searchInput) {

                searchInput.focus();

            }

        }

    }
);


/* =========================================================
   INITIAL STATE
========================================================= */

updateSearch();


console.log(
    "%c ResearchVault ",
    "background:#0d1521;color:#64a9ff;font-weight:bold;padding:6px 10px;border-radius:5px;"
);

console.log(
    "%cTechnical archive initialized.",
    "color:#55d9ff;font-size:12px;"
);
