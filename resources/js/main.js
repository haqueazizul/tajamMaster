 
        $(document).ready(function(){

 $('.img-area').slick({
               dots: true,
               arrows: false,
                autoplay: true,
                autoplaySpeed: 2000
           });
 $('.img-areas').slick({
               dots: false,
               arrows: false,
                autoplay: true,
                autoplaySpeed: 2000
           });
 
 $('.js--story-section').waypoint(function(direction){

    if(direction == 'down'){
        $('nav').addClass('sticky');

    }else{
        $('nav').removeClass('sticky');

    }

  });

  // When the button is clicked make the lightbox fade in in the span of 1 second, hide itself and start the video
  $("#button").on("click", function() {
    $("#lightbox").fadeIn(1000);
    $(this).hide();
    var videoURL = $('#video').prop('src');
    videoURL += "?autoplay=1";
    $('#video').prop('src',videoURL);
  });
  
  // When the close button is clicked make the lightbox fade out in the span of 0.5 seconds and show the play button
  $("#close-btn").on("click", function() {
    $("#lightbox").fadeOut(500);
    $("#button").show(250);
  });

  

        });


function openNav(){
  document.getElementById("mynav").style.width = '100%';
}
function closeNav(){
  document.getElementById("mynav").style.width = '0%';
}
          

           
