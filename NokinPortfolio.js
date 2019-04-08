$(document).ready(function(){

    var $win = $(window);

    $win.on('load resize', function() {
      var windowWidth = window.innerWIdth;

      if (windowWidth <= 600px){
        $(".regular").slick({
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        });
      }else if(windowWidth > 600px && windowWidth <= 1080px) {
        $(".regular").slick({
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2
        });
      }else {
        $(".regular").slick({
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3
        });
      }






    })

});
