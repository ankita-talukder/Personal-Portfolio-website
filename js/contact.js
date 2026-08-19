const contactSection = document.querySelector("#contact");

const contactObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                contactSection.classList.add("active");
            } else {
                contactSection.classList.remove("active");
            }

        });

    },
    {
        threshold: 0.20
    }
);

contactObserver.observe(contactSection);