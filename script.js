// ================================
// Sticky Navbar
// ================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#111827";
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.75)";
        navbar.style.boxShadow = "none";
    }

});

// ================================
// Smooth Scrolling
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// ================================
// Counter Animation
// ================================

const counters = document.querySelectorAll(".count");

const speed = 200;

const startCounter = () => {

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.getAttribute("data-target");

            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {

                counter.innerText = Math.ceil(count + increment);

                setTimeout(update, 10);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

};

const counterSection = document.querySelector(".counter");

if (counterSection) {

    const observer = new IntersectionObserver(entries => {

        if (entries[0].isIntersecting) {

            startCounter();

            observer.disconnect();

        }

    });

    observer.observe(counterSection);

}

// ================================
// Fade Animation on Scroll
// ================================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealElements);

function revealElements() {

    reveals.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

// ================================
// Contact Form Validation
// ================================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                input.style.border = "2px solid red";

                valid = false;

            } else {

                input.style.border = "2px solid green";

            }

        });

        if (valid) {

            alert("Thank you! Your message has been sent successfully.");

            form.reset();

        } else {

            alert("Please fill in all the fields.");

        }

    });

}

// ================================
// Back To Top Button
// ================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#fd0dc5";
topButton.style.color = "#fff";
topButton.style.fontSize = "24px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ================================
// Console Message
// ================================

console.log("TechNova Website Loaded Successfully!"); 