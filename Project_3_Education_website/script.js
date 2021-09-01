const menu = document.getElementById("navLinks");
const menuStart = document.getElementById("fa-bars");
const menuClose = document.getElementById("fa-times");

menuStart.addEventListener("click", (e) => {
  menuStart.style.color = "rgba(0,0,0,0)";
  menu.style.right = "0";
});

menuClose.addEventListener("click", (e) => {
  menuStart.style.color = "rgba(0, 0, 0, 0.5)";
  menuStart.style.transition = "0.5s";
  menu.style.right = "-100px";
});

// const navList = document.getElementById("navList");

// navList.addEventListener("mouseover", (e) => {
//   e.target.style.backgroundColor = "yellow";
// });
