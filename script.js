document.addEventListener("DOMContentLoaded", () => {
    // Animation d'apparition des cartes
    const cards = document.querySelectorAll(
        ".skill-card, .project-card, .hero-card"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        cards.forEach((card) => {
            card.classList.add("reveal");
            observer.observe(card);
        });
    }

    // Année automatique dans le pied de page
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.textContent =
            `© ${new Date().getFullYear()} Asma Missawi · Portfolio professionnel`;
    }

    // Navigation : fermeture du menu au clic sur un lien
    document.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", () => {
            document.querySelectorAll("nav a").forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });
});
