new fullpage('#slides', {
  autoScrolling: true,
  afterLoad: function(origin, destination, direction, trigger) {
    var origin = this;
    //using index
    if (destination.index == 2) {
      // alert("Section 3 ended loading");
      $(".nav-container ul li").css('background', 'white');
      $(".black-logo").attr("src", "assets/white-logo.svg");
    } else {
      $(".nav-container ul li").css('background', '');
      $(".black-logo").attr("src", "assets/black-logo.svg");
    }
  }
})

TweenMax.from(".section", 1, {
  delay: 1,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
})


TweenMax.from("header", 1, {
  opacity: 0,
  y: -40,
  ease: Expo.easeInOut
})

TweenMax.from(".scrolldown-container", 1, {
  delay: 4,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut
})
