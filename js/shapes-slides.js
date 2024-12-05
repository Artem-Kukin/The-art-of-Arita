const shapesSlides = (direction) => {
    let currentSlide = document.querySelector(".shapes__item--current");
    let nextSlide;
  
    direction == "down"
        ? (nextSlide = currentSlide.nextElementSibling)
        : (nextSlide = currentSlide.previousElementSibling);
  
    if (nextSlide) {
        shapeSlides.forEach((el) => {
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
        duration: 0.65,
        xPercent: 100,
      });
      currentSlide.classList.remove("shapes__item--current");
      nextSlide.classList.add("shapes__item--current");
    }
    //  else if (prevSlide) {
    //   shapeSlides.forEach((el) => {
    //     el.classList.remove("index");
    //   });
  
    //   currentSlide.classList.add("index");
  
    //   const tl = gsap.timeline({
    //     defaults: {
    //       ease: easing,
    //     },
    //     onComplete: function () {
    //       currentSlide.classList.remove("index");
    //     },
    //   });
    //   tl.from(document.querySelector(".shapes"), {
    //     duration: 0.5,
    //     xPercent: 100,
    //     delay: -0.35,
    //   }).from(prevSlide, {
    //     duration: 0.5,
    //     xPercent: -100,
    //   });
    //   currentSlide.classList.remove("shapes__item--current");
    //   // prevSlide.classList.add("shapes__item--current");
    // }
  };
  