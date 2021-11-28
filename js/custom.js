$(function () {

  //wow animation
  new WOW().init();

  //animation scroll

  var html_body = $('html, body');
  $('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 80
        }, 1500);
        return false;
      }
    }
  });


  //sticky menu

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 150) {
      $('.main-menu').addClass('bg');
    } else {
      $('.main-menu').removeClass('bg');
    }
    if (scrolling > 300) {
      $('.back-to-top').fadeIn(500);
    } else {
      $('.back-to-top').fadeOut(500);
    }
  });

  //banner slider

  $('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: true,
    speed: 2000,
    dots: true,
    arrows: false,
  });

  //screenshot-slider

  // $('.screenshot-main').slick({
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   arrows: false,
  //   dots: true,
  // });

  var singleScreenshot = $('.screenshot-main');
  singleScreenshot.slick({
    centerMode: true,
    dots: true,
    arrows: false,
    draggable: false,
    centerPadding: '0',
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]  
  });

  function screenshotTransform() {
    var singleScreenshotCenter = $('.screenshot-item.slick-slide.slick-center');
    singleScreenshotCenter.prev().addClass('prEv').prev().addClass('prEV');
    singleScreenshotCenter.next().addClass('neXt').next().addClass('neXT');
  }
  screenshotTransform();
  singleScreenshot.on('beforeChange', function () {
    $('.screenshot-item.slick-slide').removeClass('prEv prEV neXt neXT');
  }).on('afterChange', function () {
    screenshotTransform();
  });


  // video part 

  $('.venobox').venobox();


  //feedback part

  $('.feedback-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.feedback-img-main',
  });
  $('.feedback-img-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.feedback-main',
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
  });

  //back to top

  $('.back-to-top').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 1500)
  });
});