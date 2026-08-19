const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver(
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
        threshold: 0.1
    }
);


projectCards.forEach((card) => {
    projectObserver.observe(card);
});
