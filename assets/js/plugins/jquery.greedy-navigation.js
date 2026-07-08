/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $('#site-nav .hidden-links');

// Sum of the children widths, excluding margins. The list is a flex container
// spanning the full nav width, so measuring the list itself always returns
// the container width; auto margins (used to right-align links) must also be
// excluded from the measurement.
function visibleLinksWidth() {
  var total = 0;
  $vlinks.children().each(function () {
    total += $(this).outerWidth();
  });
  return total;
}

function restoreAllLinks() {
  while ($hlinks.children().length > 0) {
    if ($vlinks_persist_tail.length > 0) {
      $hlinks.children().first().insertBefore($vlinks_persist_tail);
    } else {
      $hlinks.children().first().appendTo($vlinks);
    }
  }
}

// Stateless all-or-nothing recalculation: restore everything, then, if the
// full set of links does not fit, collapse all of them into the dropdown.
// Recomputing from scratch keeps the nav self-healing even if an earlier run
// measured the layout before the stylesheet was applied.
function updateNav() {

  restoreAllLinks();

  var hiddenCount = 0;

  // The visible list is overflowing the nav: hide every menu link
  if (visibleLinksWidth() > $nav.width()) {
    while ($vlinks.children("*:not(.persist)").length > 0) {
      $vlinks.children("*:not(.persist)").last().prependTo($hlinks);
      hiddenCount++;
    }
  }

  if (hiddenCount > 0) {
    // Show the dropdown btn
    $btn.removeClass('hidden');
  } else {
    // Hide the dropdown btn if hidden list is empty
    $btn.addClass('hidden');
    $btn.removeClass('close');
    $hlinks.addClass('hidden');
  }

  // Keep counter updated
  $btn.attr("count", hiddenCount);

  // update masthead height and the body top padding
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
screen.orientation.addEventListener("change", function () {
  updateNav();
});

// Run again once stylesheets and fonts are loaded, since widths measured
// before that are unreliable.
$(window).on('load', function () {
  updateNav();
});

$btn.on('click', function () {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();
