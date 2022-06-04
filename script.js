const footer = document.querySelector(".footer");
const footerShare = document.querySelector(".footer > .share");
const dropdown = document.querySelector(".dropdown");
console.log(footerShare);
footerShare.addEventListener("click", (e) => {
  e.stopPropagation();
  footer.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  const isClickInsideDropdown = dropdown.contains(event.target);
  if (!isClickInsideDropdown && footer.classList.contains("active")) {
    footer.classList.toggle("active");
  }
});
