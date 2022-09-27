$("header .bottom .firstList").on({
   mouseover: function(e){
    e.preventDefault();
    $("header .bottom .innerNav").css("visibility", "visible");
    $("header .bottom .innerNav").css("opacity", "1");
    $("header .bottom .innerNav").css("transitionDuration", ".3s");
    
   },
   mouseout: function(e){
    e.preventDefault();
    $("header .bottom .innerNav").css("visibility", "hidden");
    $("header .bottom .innerNav").css("opacity", "0");
   },
});
$("header .bottom .secondList").on({
   mouseover: function(e){
    e.preventDefault();
    $("header .bottom .innerNav2").css("visibility", "visible");
    $("header .bottom .innerNav2").css("opacity", "1");
    $("header .bottom .innerNav2").css("transitionDuration", ".3s");

   },
   mouseout: function(e){
    e.preventDefault();
    $("header .bottom .innerNav2").css("visibility", "hidden");
    $("header .bottom .innerNav2").css("opacity", "0");
   },
});
$("header .bottom .thirdList").on({
   mouseover: function(e){
    e.preventDefault();
    $("header .bottom .innerNav3").css("visibility", "visible");
    $("header .bottom .innerNav3").css("opacity", "1");
    $("header .bottom .innerNav3").css("transitionDuration", ".3s");

   },
   mouseout: function(e){
    e.preventDefault();
    $("header .bottom .innerNav3").css("visibility", "hidden");
    $("header .bottom .innerNav3").css("opacity", "0");
    
   },
});
$("header .bottom .fourthList").on({
   mouseover: function(e){
    e.preventDefault();
    $("header .bottom .innerNav4").css("visibility", "visible");
    $("header .bottom .innerNav4").css("opacity", "1");
    $("header .bottom .innerNav4").css("transitionDuration", ".3s");

   },
   mouseout: function(e){
    e.preventDefault();
    $("header .bottom .innerNav4").css("visibility", "hidden");
    $("header .bottom .innerNav4").css("opacity", "0");
   },
});

$('.slider').slick({
   dots: true,
   infinite: false,
   speed: 300,
   slidesToShow: 1,
   slidesToScroll: 1,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
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
       