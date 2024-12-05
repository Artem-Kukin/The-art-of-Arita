const textSlides = (direction) => {
  let currentSlide = document.querySelector(".slides-container__slide--active");
  let nextSlide;

  direction == "down"
    ? (nextSlide = currentSlide.nextElementSibling)
    : (nextSlide = currentSlide.previousElementSibling);

  if (nextSlide && !nextSlide.classList.contains("main-section__explore")) {
    const tl = gsap.timeline({ defaults: { ease: easing } });
    tl.to(currentSlide.querySelector(".slides-container__title"), {
      duration: 0.6,
      xPercent: -100,
      opacity: 0,
    })
      .to(currentSlide.querySelector(".designers-info"), {
        duration: 0.6,
        xPercent: -100,
        opacity: 0,
        delay: -0.6,
      })
      .fromTo(
        nextSlide.querySelector(".slides-container__title"),
        {
          xPercent: -100,
          y: 0,
        },
        {
          duration: 0.65,
          opacity: 1,
          xPercent: 0,
        },
        "-=0.65"
      )
      .fromTo(
        nextSlide.querySelector(".designers-info"),
        {
          xPercent: -100,
        },
        {
          duration: 0.65,
          opacity: 1,
          xPercent: 0,
          y: 0,
          delay: -0.65,
        }
      );
    currentSlide.classList.remove("slides-container__slide--active");
    nextSlide.classList.add("slides-container__slide--active");
  }
};
