//
//
function OpenCalendly() {
  Calendly.initPopupWidget({
    url: "https://calendly.com/chefcarminenolls/personal-chef?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=ecdabf",
  });
  return false;
}

window.onload = function () {
  var links = document.getElementsByClassName("reservations");
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.onclick = function () {
      OpenCalendly();
    };
  }

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");
  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach((n) => n.addEventListener("click", closeMenu));

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
};
