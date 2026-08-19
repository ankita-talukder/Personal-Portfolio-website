const aboutSection = document.querySelector("#about");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    aboutSection.classList.add("active");
                } else {
                    aboutSection.classList.remove("active");
                }

            });
        }, {
            threshold: 0.25
        });

observer.observe(aboutSection);