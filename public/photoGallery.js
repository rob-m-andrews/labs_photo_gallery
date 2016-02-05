(function() {
  var FADE_EFFECT_DELAY = 500;
  var PHOTO_RELOAD_TIME = 5000;

  function loadNewGalleryImage() {
    var image = new Image();
    var $transition = $('.transition');

    image.onload = function() {
      $transition.addClass('transition--shown');

      setTimeout(function() {
        $('.photo').css({
          'background-image': 'url(' + image.src + ')'
        });
        $transition.removeClass('transition--shown');
      }, FADE_EFFECT_DELAY);
    };
    image.src = '/photo' + Date.parse(new Date());
  };

  $(function() {
    setInterval(loadNewGalleryImage, PHOTO_RELOAD_TIME);
  });
}());
