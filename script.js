
/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.textContent =
        navLinks.classList.contains("active")
            ? "✕"
            : "☰";
});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* =========================
   TYPING ANIMATION
========================= */

const words = [
    "Web Developer",
    "Programmer",
    "Student",
    "Future Software Developer"
];

const typingElement =
    document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingAnimation() {

    const word = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            word.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === word.length) {

            deleting = true;

            setTimeout(typingAnimation, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            word.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;

        }

    }

    setTimeout(
        typingAnimation,
        deleting ? 60 : 100
    );
}

typingAnimation();


/* =========================
   IMAGE UPLOAD
========================= */

const imageUpload =
    document.getElementById("imageUpload");

const profileImage =
    document.getElementById("profileImage");

const removeImage =
    document.getElementById("removeImage");


const defaultImage =
    "https://via.placeholder.com/400";


imageUpload.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) {
        return;
    }


    if (!file.type.startsWith("image/")) {

        alert("Please select an image file.");

        return;
    }


    const reader =
        new FileReader();


    reader.onload = function (event) {

        profileImage.src =
            event.target.result;

        localStorage.setItem(
            "profileImage",
            event.target.result
        );

    };


    reader.readAsDataURL(file);

});


/* LOAD SAVED IMAGE */

const savedImage =
    localStorage.getItem("profileImage");

if (savedImage) {

    profileImage.src =
        savedImage;
}


/* REMOVE IMAGE */

removeImage.addEventListener("click", () => {

    profileImage.src =
        defaultImage;

    localStorage.removeItem(
        "profileImage"
    );

    imageUpload.value = "";

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop <
            windowHeight - 100) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================
   BACK TO TOP
========================= */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !message) {

            formMessage.textContent =
                "Please fill in all fields.";

            return;
        }


        formMessage.textContent =
            "Message prepared successfully!";


        contactForm.reset();

    }
);


/* =========================
   3D MOUSE EFFECT
========================= */

const profile =
    document.querySelector(".profile-3d");


document.addEventListener(
    "mousemove",
    (event) => {

        if (window.innerWidth < 700) {
            return;
        }


        const x =
            (window.innerWidth / 2 - event.clientX) / 40;

        const y =
            (window.innerHeight / 2 - event.clientY) / 40;


        profile.style.transform =
            `rotateY(${x}deg) rotateX(${y}deg)`;

    }
);


document.addEventListener(
    "mouseleave",
    () => {

        profile.style.transform =
            "rotateY(0deg) rotateX(0deg)";

    }
);

