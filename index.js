function OpenCalendly() {
  Calendly.initPopupWidget({
    url: "https://calendly.com/chefcarminenolls/personal-chef?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=ecdabf",
  });
  return false;
}

window.onload = function () {
  var reservationLinks = document.getElementsByClassName("reservations");
  for (var i = 0; i < reservationLinks.length; i++) {
    var link = reservationLinks[i];
    link.onclick = function (e) {
      OpenCalendly();
      e.preventDefault();
    };
  }

  var footerReservationLinks = document.getElementsByClassName(
    "footer-reservations"
  );
  for (var i = 0; i < footerReservationLinks.length; i++) {
    var link = footerReservationLinks[i];
    link.onclick = function (e) {
      OpenCalendly();
      e.preventDefault();
    };
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");
  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach((n) => n.addEventListener("click", closeMenu));


	function addVideoEffect(selector) {
		const video = document.querySelector(selector)

		video.addEventListener("ended", function () {
			this.classList.remove("fade-in")
			this.classList.add("fade-out")
			setTimeout(() => video.play(), 1300)
		})

		video.addEventListener("playing", function () {
			this.classList.add("fade-in")
			this.classList.remove("fade-out")
		})

	}

	//hero-video
	addVideoEffect(".hero-video")

	//process-video
	addVideoEffect(".process-video")

	//pricing-video
	addVideoEffect(".pricing-video")
}
=======
  
  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }



  //hero-video
//   const heroVideo = document.querySelector(".hero-video");
//   heroVideo.addEventListener("ended", function () {
//     this.classList.remove("fade-in");
//     this.classList.add("fade-out");
//     setTimeout(() => heroVideo.play(), 1300);
//   });

//   heroVideo.addEventListener("playing", function () {
//     this.classList.add("fade-in");
//     this.classList.remove("fade-out");
//   });

  //process-video
//   const processVideo = document.querySelector(".process-video");
//   processVideo.addEventListener("ended", function () {
//     this.classList.remove("fade-in");
//     this.classList.add("fade-out");
//     setTimeout(() => processVideo.play(), 1300);
//   });

//   processVideo.addEventListener("playing", function () {
//     this.classList.add("fade-in");
//     this.classList.remove("fade-out");
//   });

  //pricing-video
//   const pricingVideo = document.querySelector(".pricing-video");
//   pricingVideo.addEventListener("ended", function () {
//     this.classList.remove("fade-in");
//     this.classList.add("fade-out");
//     setTimeout(() => pricingVideo.play(), 1300);
//   });

//   pricingVideo.addEventListener("playing", function () {
//     this.classList.add("fade-in");
//     this.classList.remove("fade-out");
//   });
// };

// https://flickity.metafizzy.co/
// external js: flickity.pkgd.js
