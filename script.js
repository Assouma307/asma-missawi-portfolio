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
    
    // Animation d'écriture du titre
    const typingElement = document.getElementById("typing-text");

    if (typingElement) {
        const titles = [
            "Développeuse Odoo",
            "Développeuse ERP",
            "Développement Web",
            "Solutions métier",
            "E-commerce Odoo"
        ];

        let titleIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeTitle() {
            const currentTitle = titles[titleIndex];

            typingElement.textContent = currentTitle.substring(0, charIndex);

            if (!deleting) {
                if (charIndex < currentTitle.length) {
                    charIndex++;
                    setTimeout(typeTitle, 90);
                } else {
                    deleting = true;
                    setTimeout(typeTitle, 1600);
                }
            } else {
                if (charIndex > 0) {
                    charIndex--;
                    setTimeout(typeTitle, 45);
                } else {
                    deleting = false;
                    titleIndex = (titleIndex + 1) % titles.length;
                    setTimeout(typeTitle, 300);
                }
            }
        }

        typeTitle();
    }
});
