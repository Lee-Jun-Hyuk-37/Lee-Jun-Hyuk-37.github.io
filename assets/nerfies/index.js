// Academic project page script — template borrowed from Nerfies
// (https://github.com/nerfies/nerfies.github.io). Handles the navbar burger
// toggle and initializes any Bulma carousels present on the page.

window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
  // Toggle the mobile navbar menu, if a navbar is present.
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  var options = {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  // Initialize every element with the carousel class (no-op when none exist).
  if (window.bulmaCarousel) {
    var carousels = bulmaCarousel.attach('.carousel', options);
    for (var i = 0; i < carousels.length; i++) {
      carousels[i].on('before:show', function (state) {
        console.log(state);
      });
    }
  }
});
