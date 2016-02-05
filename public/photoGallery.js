(function() {
  var FADE_EFFECT_DELAY = 500;
  var PHOTO_RELOAD_TIME = 4000;
  var TRANSITION_SELECTOR = '.transition';
  var TRANSITION_SHOWN_CLASS = 'transition--shown';

  function loadNewGalleryImage() {
    var image = new Image();
    var $transition = $(TRANSITION_SELECTOR);

    image.onload = function() {
      $transition.addClass(TRANSITION_SHOWN_CLASS);

      setTimeout(function() {
        $('.photo').css({
          'background-image': 'url(' + image.src + ')'
        });
        $transition.removeClass(TRANSITION_SHOWN_CLASS);
      }, FADE_EFFECT_DELAY);
    };
    image.src = '/photo' + Date.parse(new Date());
  };

  $(function() {
    loadNewGalleryImage();
    setInterval(loadNewGalleryImage, PHOTO_RELOAD_TIME);
  });
}());
