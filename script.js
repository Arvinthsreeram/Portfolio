emailjs.init({
    publicKey: "9IWrdFOEBrj2eBnZC",
});
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle menu
menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});

// Close menu when a navigation link is clicked
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("bx-x");
        navbar.classList.remove("active");
    });
});

// Close menu when scrolling
window.addEventListener("scroll", () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
});


const typed = new Typed(".multiple-text", {
    strings: [
        "Full Stack Java Developer",
        "Spring Boot Developer",
        "DevOps Engineer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});
const contactForm = document.getElementById("contact-form");
const status = document.getElementById("form-status");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();
    status.innerHTML = "Sending...";
    status.style.color = "white";

    emailjs.sendForm(
        "service_9thhgbg",
        "template_5bpwgtb",
        this
    )
    .then(function () {

         status.innerHTML = "✅ Thanks for contacting me! I'll reply soon.";
        status.style.color = "#00ff88";

        contactForm.reset();

    }, function (error) {

        status.innerHTML = "❌ Failed to send message.";
        status.style.color = "red";

        console.log(error);

    });

});