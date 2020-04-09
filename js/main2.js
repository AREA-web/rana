$(document).ready(function() {
    $(".reg").slideUp();


 });

 $(".Register").click(function(){
    $(".reg").slideToggle();
    $(".log").slideToggle();
 });

//  $i = 0;

//  $("#show").click(
//      function(){

//     $("#pwd").attr('type','text');
//     $("#pwd2").attr('type','text');
//     $("#pwd3").attr('type','text');  
//      }
//  );

var xx = 0 ;

        document.getElementById("show").onclick = function () {
            if( xx==0 ){
            document.getElementById("show").innerText = 'اخفاء كلمة السر';
            document.getElementById("pwd").type = 'text';
            document.getElementById("pwd2").type = 'text';
            document.getElementById("pwd3").type = 'text';

                xx++;
            } else if( xx == 1){
                document.getElementById("show").innerText = 'اظهار كلمة السر ';
            document.getElementById("pwd").type = 'password';
            document.getElementById("pwd2").type = 'password';
            document.getElementById("pwd3").type = 'password';

            

                xx--;
            }
        }

        function clock() {// We create a new Date object and assign it to a variable called "time".

    var session = "AM";
   
    var time = new Date(),
        
        // Access the "getHours" method on the Date object with the dot accessor.
        hours = time.getHours(),
        
        // Access the "getMinutes" method with the dot accessor.
        minutes = time.getMinutes(),
        
        
        seconds = time.getSeconds();


        if(hours > 12){
                hours = hours - 12;
                session = "PM";
        }


    document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds) + " (" + session + ")"  ;
    
    function harold(standIn) {
        if (standIn < 10) {
        standIn = '0' + standIn
        }
        return standIn;
    }
    }
    setInterval(clock, 1000);


 
 