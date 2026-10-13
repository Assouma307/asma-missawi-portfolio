document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(
        ".section-title, .section-description, " +
        ".skill-card, .project-card, .contact-links"
    );

    if (!("IntersectionObserver" in window)) {
        elements.forEach(element => element.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });
});
