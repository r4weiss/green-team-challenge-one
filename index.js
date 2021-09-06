//
//
function OpenCalendly() {
	Calendly.initPopupWidget({
		url: "https://calendly.com/chefcarminenolls/personal-chef?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=ecdabf",
	})
	return false
}

window.onload = function () {
	var reservationLinks = document.getElementsByClassName("reservations")
	for (var i = 0; i < reservationLinks.length; i++) {
		var link = reservationLinks[i]
		link.onclick = function (e) {
			OpenCalendly()
			e.preventDefault()
		}
	}

	var footerReservationLinks = document.getElementsByClassName(
		"footer-reservations"
	)
	for (var i = 0; i < footerReservationLinks.length; i++) {
		var link = footerReservationLinks[i]
		link.onclick = function (e) {
			OpenCalendly()
			e.preventDefault()
		}
	}

	const hamburger = document.querySelector(".hamburger")
	const navMenu = document.querySelector(".nav-menu")
	const navLink = document.querySelectorAll(".nav-link")
	hamburger.addEventListener("click", mobileMenu)
	navLink.forEach((n) => n.addEventListener("click", closeMenu))

	function mobileMenu() {
		hamburger.classList.toggle("active")
		navMenu.classList.toggle("active")
	}

	function closeMenu() {
		hamburger.classList.remove("active")
		navMenu.classList.remove("active")
	}

	//hero-video
	const video = document.querySelector(".hero-video")
	video.addEventListener("ended", function () {
		this.classList.remove("fade-in")
		this.classList.add("fade-out")
		setTimeout(() => video.play(), 1300)
	})

	video.addEventListener("playing", function () {
		this.classList.add("fade-in")
		this.classList.remove("fade-out")
	})

	//process-video
	const video = document.querySelector(".process-video")
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
