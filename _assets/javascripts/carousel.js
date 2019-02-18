$(document).ready(function () {

  $('.partners-carousel').slick({
    autoplay: true,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 778,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    }
    ]
  });

  // new Date(year, month, day), where the month is 0-based. This means that January = 0 and December = 11
  var firstDay = new Date('2019', '01', '04');
  var lastDay  = new Date('2019', '01', '08');
  var today    = new Date();
  var timeDiff = Math.abs(today.getTime() - firstDay.getTime());
  var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  var slickOpts = {
    initialSlide: today > lastDay ? 0 : daysDiff - 1,
    dots: true,
    autoplay: false,
    infinite: false,
    slidesToShow: 2,
    responsive: [{
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        arrows: true,
        dots: false
      }
    }
    ]
  };


  $('.agenda-carousel').slick(slickOpts);


});
