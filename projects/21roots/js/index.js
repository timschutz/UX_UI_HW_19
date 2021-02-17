$(document).ready(function(){
    $(".nav-link").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top -150}, 1000);
    });
});