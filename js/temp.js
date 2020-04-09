$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "#CCCA80");
  });
  
});

$(window).scroll(function(){
  if ($(window).scrollTop() >= 550 ) {


      $(".navbar").css({
          "background-color": "white",
          // "border-bottom" : "1px solid #000" ,
          "padding" : "0px" ,
          "transision" : "2s",
      });

      $(".navbar").css('box-shadow', '10px 10px 5px #888');

      $(".navbar-nav>li>a").css({
          "color": "black"
      });

      $(".navbar-nav>li.active>a").css({
          "borderRadius": "0" , 
      });

      console.log($(window).scrollTop());
      } else{

          $(".navbar").css({
              "background-color": "rgba(0, 0, 0, 0.068)", 
              //"border-bottom" : "none" ,
              "padding" : "26px" 
          });

          $(".navbar").css('box-shadow', 'none');

          $(".navbar-nav>li>a").css({
              "color": "white"
          });

          $(".navbar-nav>li.active>a").css({
              "borderRadius": "5px" , 
          });


      }
    });


