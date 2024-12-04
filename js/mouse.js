function moveMouse(e) {
  if (
    e.clientX < 20 ||
    e.clientY < 20 ||
    e.clientY > window.innerHeight - 35 ||
    e.clientX > window.innerWidth - 50
  ) {
    mouse.style.opacity = 0;
  } else {
    mouse.style.opacity = 1;
    mouse.style.transform = `translate(${e.clientX - 15}px, ${
      e.clientY - 15
    }px)`;
  }
}

if (window.innerWidth >= 768) {
  document.addEventListener("mousemove", moveMouse);

slideBg.addEventListener("mouseover", () => {mouse.classList.add("view-visible")});
slideBg.addEventListener("mouseleave", () => {mouse.classList.remove("view-visible")});

  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      mouse.classList.add("links-visible");
    });
    link.addEventListener("mouseleave", () => {
      mouse.classList.remove("links-visible");
    });
  });
}
