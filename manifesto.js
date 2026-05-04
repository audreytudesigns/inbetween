document.addEventListener("DOMContentLoaded", function () {

  const tenets = document.querySelectorAll('.tenet');
  const counter = document.getElementById('counter');

  let currentIndex = -1;

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    tenets.forEach((el, index) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight * 0.6) {
        el.classList.add('active');

        if (currentIndex !== index) {
          currentIndex = index;
          counter.textContent = index + 1;
        }
      }
    });
  }

  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);

});



const items = document.querySelectorAll(".item");

items.forEach(item => {
  const btn = item.querySelector(".button");
  const info = item.querySelector(".info");

  btn.addEventListener("click", () => {
    info.classList.toggle("active");
  });
});


document.querySelectorAll(".btn").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    console.log("clicked:", i);
  });
});