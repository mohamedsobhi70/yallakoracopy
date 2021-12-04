$(".owl-carousel").owlCarousel({
  rtl: true,
  loop: true,
  margin: 20,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3500,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
document.querySelectorAll("main .owl-prev").forEach((el) => {
  el.innerHTML = `<i class="fa fa-chevron-left"></i>`;
});

document.querySelectorAll("main .owl-next").forEach((el) => {
  el.innerHTML = `<i class="fa fa-chevron-right"></i>`;
});

// mainmenu
let bars = document.querySelector("i.fa-bars");
console.log(bars);
bars.addEventListener("click", function () {
  document.querySelector(".main-menu").classList.toggle("active");
});
