/* ==========================================
   PORTFOLIO SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================
     MOBILE MENU
  ========================================== */

  const menuToggle =
    document.querySelector(".menu-toggle");

  const navLinks =
    document.querySelector(".nav-links");

  if (menuToggle) {

    menuToggle.addEventListener("click", () => {

      navLinks.classList.toggle("active");

    });

  }

  /* ==========================================
     ACTIVE NAVIGATION
  ========================================== */

  const sections =
    document.querySelectorAll("section");

  const navItems =
    document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

      const sectionTop =
        section.offsetTop - 150;

      const sectionHeight =
        section.clientHeight;

      if (
        window.scrollY >= sectionTop
        &&
        window.scrollY <
        sectionTop + sectionHeight
      ) {

        current =
          section.getAttribute("id");

      }

    });

    navItems.forEach(link => {

      link.classList.remove(
        "active-link"
      );

      if (
        link.getAttribute("href") ===
        `#${current}`
      ) {

        link.classList.add(
          "active-link"
        );

      }

    });

  });

  /* ==========================================
     NAVBAR SHADOW
  ========================================== */

  const navbar =
    document.getElementById("navbar");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

      navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.3)";

      navbar.style.background =
        "rgba(15,23,42,.95)";

    } else {

      navbar.style.boxShadow =
        "none";

      navbar.style.background =
        "rgba(15,23,42,.85)";

    }

  });

  /* ==========================================
     TYPING EFFECT
  ========================================== */

  const typingElement =
    document.querySelector(
      ".typing-text"
    );

  if (typingElement) {

    const words = [

      "Computer Science Engineering Student",

      "Python Developer",

      "Django Developer",

      "Full Stack Developer",

      "AI Enthusiast"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

      const currentWord =
        words[wordIndex];

      if (!deleting) {

        typingElement.textContent =
          currentWord.substring(
            0,
            charIndex + 1
          );

        charIndex++;

        if (
          charIndex ===
          currentWord.length
        ) {

          deleting = true;

          setTimeout(
            typeEffect,
            1500
          );

          return;

        }

      } else {

        typingElement.textContent =
          currentWord.substring(
            0,
            charIndex - 1
          );

        charIndex--;

        if (charIndex === 0) {

          deleting = false;

          wordIndex++;

          if (
            wordIndex >=
            words.length
          ) {

            wordIndex = 0;

          }

        }

      }

      setTimeout(
        typeEffect,
        deleting ? 50 : 100
      );

    }

    setTimeout(typeEffect, 1000);

  }

  /* ==========================================
     SCROLL REVEAL
  ========================================== */

  const revealElements =
    document.querySelectorAll(

      ".section, .project-card, .achievement-card, .skill-card"

    );

  const revealObserver =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "show"
            );

          }

        });

      },

      {
        threshold: 0.15
      }

    );

  revealElements.forEach(el => {

    revealObserver.observe(el);

  });

  /* ==========================================
     CERTIFICATE MODAL
  ========================================== */

  const modal =
    document.getElementById(
      "certificateModal"
    );

  const modalImage =
    document.getElementById(
      "certificateImage"
    );

  const closeModal =
    document.getElementById(
      "closeModal"
    );

  const certificateButtons =
    document.querySelectorAll(
      ".certificate-btn"
    );

  certificateButtons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const imagePath =
          button.getAttribute(
            "data-img"
          );

        modal.style.display =
          "flex";

        modalImage.src =
          imagePath;

      }
    );

  });

  if (closeModal) {

    closeModal.addEventListener(
      "click",
      () => {

        modal.style.display =
          "none";

      }
    );

  }

  window.addEventListener(
    "click",
    e => {

      if (
        e.target === modal
      ) {

        modal.style.display =
          "none";

      }

    }
  );

  /* ==========================================
     PROJECT IMAGE ZOOM
  ========================================== */

  const projectImages =
    document.querySelectorAll(
      ".project-gallery img"
    );

  projectImages.forEach(image => {

    image.addEventListener(
      "click",
      () => {

        modal.style.display =
          "flex";

        modalImage.src =
          image.src;

      }
    );

  });


  /* ==========================================
     PROJECT CARD HOVER EFFECT
  ========================================== */

  const projectCards =
    document.querySelectorAll(
      ".project-card"
    );

  projectCards.forEach(card => {

    card.addEventListener(
      "mousemove",
      e => {

        const rect =
          card.getBoundingClientRect();

        const x =
          e.clientX -
          rect.left;

        const y =
          e.clientY -
          rect.top;

        const centerX =
          rect.width / 2;

        const centerY =
          rect.height / 2;

        const rotateX =
          (y - centerY) / 25;

        const rotateY =
          (centerX - x) / 25;

        card.style.transform =

          `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-10px)`;

      }

    );

    card.addEventListener(
      "mouseleave",
      () => {

        card.style.transform =
          "translateY(0)";

      }
    );

  });

  /* ==========================================
     GITHUB VISITOR MESSAGE
  ========================================== */

  console.log(
    "%cWelcome To Ashish Panchal Portfolio 🚀",
    "color:#3b82f6;font-size:16px;font-weight:bold;"
  );

});

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const scrollBtn =
  document.createElement("button");

scrollBtn.innerHTML =
  "↑";

scrollBtn.id =
  "scrollTopBtn";

document.body.appendChild(
  scrollBtn
);

scrollBtn.style.position =
  "fixed";

scrollBtn.style.bottom =
  "20px";

scrollBtn.style.right =
  "20px";

scrollBtn.style.width =
  "50px";

scrollBtn.style.height =
  "50px";

scrollBtn.style.border =
  "none";

scrollBtn.style.borderRadius =
  "50%";

scrollBtn.style.background =
  "#3b82f6";

scrollBtn.style.color =
  "#fff";

scrollBtn.style.cursor =
  "pointer";

scrollBtn.style.display =
  "none";

scrollBtn.style.zIndex =
  "999";

window.addEventListener(
  "scroll",
  () => {

    if (
      window.scrollY > 400
    ) {

      scrollBtn.style.display =
        "block";

    } else {

      scrollBtn.style.display =
        "none";

    }

  }
);

scrollBtn.addEventListener(
  "click",
  () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  }
);