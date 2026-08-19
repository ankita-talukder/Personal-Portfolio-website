const homeSection = document.querySelector("#home");
const homeContent = document.querySelector(".contentItem");
const homeImage = document.querySelector(".image");

const homeObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                homeContent.classList.add("active");
                homeImage.classList.add("active");

            } else {

                homeContent.classList.remove("active");
                homeImage.classList.remove("active");

            }

        });

    },
    {
        threshold: 0.1
    }
);

homeObserver.observe(homeSection);