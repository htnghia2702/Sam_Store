$(window).on('load', function(event) {
    $('body').removeClass('loading');
       // $('.load').delay(1000).fadeOut('fast');
    $('.load').delay(500).fadeOut('fast');
 });
 window.addEventListener("load",function(){
   const chitiet = document.querySelectorAll(".box-img");
   chitiet.forEach(item => item.addEventListener("click",function(){
      window.open("details.html","_self","fullscreen=yes")
   }))
   
})
