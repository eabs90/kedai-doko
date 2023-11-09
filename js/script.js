// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hambugger menu di klik
document.querySelector("#hambugger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik tambahan
const hambugger = document.querySelector("#hambugger-menu");

document.addEventListener("click", function (e) {
  if (!hambugger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
