// JavaScript: Form Validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                alert("Thank you, " + name + "! Your message has been sent.");
            } else {
                alert("Please fill out all fields.");
            }
        });
    }
});

// jQuery: Dynamic Features
$(document).ready(function () {
    // Index Page: Learn More Button
    $("#learn-more").click(function () {
        $("#about-me").append("<p>I'm skilled in HTML, CSS, JavaScript, and more!</p>");
    });

    // Resume Page: Toggle Details
    $("#toggle-resume").click(function () {
        $("#skills, #education").slideToggle();
    });

    // Biodata Page: Show More Info
    $("#show-more-info").click(function () {
        $("#personal-info").append("<p><strong>Hobbies:</strong> Coding, Reading, Traveling</p>");
    });
});
