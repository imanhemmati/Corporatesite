let navmenu = document.querySelector(".nav-menu");
let icofontnavigationmenu = document.querySelector(".icofont-navigation-menu");

icofontnavigationmenu.addEventListener("click", function () {
  if (icofontnavigationmenu.classList == "icofont-navigation-menu icofont__navigation__menu") {
    navmenu.style.left = "0rem";
    icofontnavigationmenu.classList = "icofont-close icofont__navigation__menu";
  } else {
    navmenu.style.left = "-18rem";
    icofontnavigationmenu.classList =
      "icofont-navigation-menu icofont__navigation__menu";
  }
});
