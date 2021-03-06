(function(_, $) {
  ////////////////////////////////////////////
  // Utils
  //
  console.log('loaded ramda and jquery')
    var img = function (url) {
      return $('<img />', { src: url });
    };
  var carouselItem = function(url){
    return '<div class="item"><img src="' + url + '" ></img></div>'
  }

  var carouselFirstItem = function(url){

    return '<div class="item active"><img src="' + url + '" ></img></div>'
  }
  var Impure = {
    getJSON: _.curry(function(callback, url) {
      $.getJSON(url, callback)
    }),

    setHtml: _.curry(function(sel, html) {
      $(sel).html(html)
    })
  }

  var trace = _.curry(function(tag, x) {
    console.log(tag, x);
    return x;
  })

  ////////////////////////////////////////////
  // Pure

  //  url :: String -> URL
  var url = function (t) {
    return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + t + '&format=json&jsoncallback=?';
  };

  var mediaUrl = _.compose(_.prop('m'), _.prop('media'));

  var srcs = _.compose(_.map(mediaUrl), _.prop('items'));

  var images = _.compose(_.map(img), srcs);

  /*ES6, a better version
   * var carouselItems =  (x,...xs) => [carouselFirstItem(x),..._.map(carouselItem, xs)]
   * */
  var carouselItems = function(urls){
    if(urls.length > 0){
      return carouselFirstItem([urls[0]]).concat(_.map(carouselItem, _.slice(1, -1, urls)))
    }else{
      return _.map(carouselItem, urls);
    }
  }
  //
    ////////////////////////////////////////////
  // Impure
  //
  var renderImages = _.compose(Impure.setHtml("#main"), images)

  var renderImagesCarousel = _.compose(Impure.setHtml(".carousel-inner"), _.compose(carouselItems, srcs))

  //var app = _.compose(Impure.getJSON(renderImages), url)
  var appCarousel = _.compose(Impure.getJSON(renderImagesCarousel), url)
  window.myApp = appCarousel;
  appCarousel("dog");

})(R, $);
