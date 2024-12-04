const startAnimation = () => {
  const currentSlide = document.querySelector(".slide-bg");
  const currentShape = document.querySelector(".shapes");
  const currentText = document.querySelector(
    ".slides-container__slide--active"
  );

  startingTl
    .to(".header", {
      duration: 0.5,
      opacity: 1,
      y: 0,
    })
    .to(
      ".main-section__explore",
      {
        duration: 0.5,
        opacity: 1,
        y: 0,
      },
      "-=0.5"
    )
    .to(currentText.querySelector(".slides-container__title"), {
      duration: 0.6,
      opacity: 1,
      y: 0,
    })
    .to(
      currentText.querySelector(".designers-info"),
      {
        duration: 0.6,
        opacity: 1,
        y: 0,
      },
      "-=0.6"
    )
    .from(currentSlide, {
        duration: 0.5,
        xPercent: 100.5,
      })
      .from(currentSlide.querySelectorAll(".slide-bg__link"),
      {
        duration: 0.5,
        xPercent: -100.5,
      },"-=0.5").from(currentShape, {
        duration: 0.5,
        xPercent: -50,
      })
};
