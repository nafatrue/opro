$(document).ready(function(){

  $('.bxslider').bxSlider({
  	controls: false,
  	auto: true,
  	pause: 6000,
  	speed: 1000,
  	captions: true
  });

    scrollme.init();


  /*$(window).on("load",function(){
        $("body").mCustomScrollbar({
           theme: "rounded-dots-dark",
            mouseWheelPixels: 350,
            //scrollInertia: 1000
        });
  });*/

  $("#modal-trigger").on('click', function() {
    $("body").addClass('no-scroll');
    $(".modal").show();
    $(".dialog").show(400);
  });

  $(".close").on('click', function() {
    $(".dialog").hide(400);
    $('.modal').hide();
    $("body").removeClass('no-scroll');
  });



  $("#be_part_button").on("click", function() {
  	  location.href='https://www.onelife.eu/signup/Faouzi86';
  });

  $("#be_part_button2").on("click", function() {
      location.href='https://www.onelife.eu/signup/Faouzi86';
  });  

});
