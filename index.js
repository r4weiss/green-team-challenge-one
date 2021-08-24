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
};
