// const imagesSlides = (direction) => {
//   let currentSlide = document.querySelector(".slide-bg__inner--current");
//   let nextSlide;
//   direction == "down"
//     ? (nextSlide = currentSlide.nextElementSibling)
//     : (nextSlide = currentSlide.previousElementSibling);

//   if (nextSlide) {
//     imageSlides.forEach((el) => {
//       el.classList.remove("index");
//     });

//     currentSlide.classList.add("index");

//     const tl = gsap.timeline({
//       defaults: {
//         ease: easing,
//       },
//       onComplete: function () {
//         currentSlide.classList.remove("index");
//       },
//     });
//     tl.from(nextSlide, {
//       duration: 0.5,
//       xPercent: 100,
//     }).from(nextSlide.querySelector(".slide-bg__link"), {
//       duration: 0.5,
//       xPercent: -100,
//       delay: -0.5,
//     });
//     currentSlide.classList.remove("slide-bg__inner--current");
//     nextSlide.classList.add("slide-bg__inner--current");
//   }
// };

const imagesSlides = (direction) => {
  let currentSlide = document.querySelector(".slide-bg__inner--current");
  let nextSlide;
  let prevSlide;

  if (direction == "down") {
    nextSlide = currentSlide.nextElementSibling;
  } else if (direction == "up") {
    prevSlide = currentSlide.previousElementSibling;
  }

  if (nextSlide) {
    imageSlides.forEach((el) => {
      el.classList.remove("index");
    });

    currentSlide.classList.add("index");

    const tl = gsap.timeline({
      defaults: {
        ease: easing,
      },
      onComplete: function () {
        currentSlide.classList.remove("index");
      },
    });
    tl.from(nextSlide, {
      duration: 0.5,
      xPercent: 100,
    }).from(nextSlide.querySelector(".slide-bg__link"), {
      duration: 0.5,
      xPercent: -100,
      delay: -0.5,
    });
    currentSlide.classList.remove("slide-bg__inner--current");
    nextSlide.classList.add("slide-bg__inner--current");
  } else if (prevSlide) {
    imageSlides.forEach((el) => {
      el.classList.remove("index");
    });

    currentSlide.classList.add("index");

    const tl = gsap.timeline({
      defaults: {
        ease: easing,
      },
      onComplete: function () {
        currentSlide.classList.remove("index");
      },
    });
    tl.from(prevSlide, {
      duration: 0.5,
      xPercent: -100,
    }).from(prevSlide.querySelector(".slide-bg__link"), {
      duration: 0.5,
      xPercent: 100,
      delay: -0.5,
    });
    currentSlide.classList.remove("slide-bg__inner--current");
    prevSlide.classList.add("slide-bg__inner--current");
  }
};
