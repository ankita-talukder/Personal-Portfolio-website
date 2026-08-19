const skillCards = document.querySelectorAll(".skill-card");

const skillObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            } else {

                entry.target.classList.remove("active");

            }

        });

    },
    {
        threshold: 0.2
    }
);


skillCards.forEach((card) => {
    skillObserver.observe(card);
});