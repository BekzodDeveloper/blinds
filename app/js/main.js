// document.querySelectorAll(".accordion__item-trigger").forEach((item) => {
//   item.addEventListener("click", () => {
//     const parent = item.parentNode;

//     if (parent.classList.contains("accordion__item--active")) {
//       parent.classList.remove("accordion__item--active");
//     } else {
//       document
//       .querySelectorAll(".accordion__item")
//       .forEach((item) => {
//         item.classList.remove("accordion__item--active");
//       });
//     }///
//   });
// });

$(".features__slider").slick({
  dots: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
});
