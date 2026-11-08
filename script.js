
document.addEventListener("DOMContentLoaded", function () {

    const urlParams = new URLSearchParams(window.location.search);

    // Check whether guest arrived through checkout QR
    if (urlParams.get("welcome") === "1") {

        const thankYouElement =
            document.getElementById("thankYouModal");

        const thankYouModal =
            new bootstrap.Modal(thankYouElement);

        // Small delay to allow website to load
        setTimeout(() => {
            thankYouModal.show();
        }, 500);

    }

    if (urlParams.get("card") === "1") {

        const contactElement =
            document.getElementById("contactModal");

        const contactModal =
            new bootstrap.Modal(contactElement);

        // Small delay to allow website to load
        setTimeout(() => {
            contactModal.show();
        }, 500);

    }

});

document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});
