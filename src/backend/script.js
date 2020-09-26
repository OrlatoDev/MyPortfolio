$("#home-a").on("click", function(){
    $("#about-li").removeClass("active");
    $("#projects-li").removeClass("active");
    $("#contact-li").removeClass("active");
    $("#home-li").addClass("active");
})
$("#about-a").on("click", function(){
    $("#home-li").removeClass("active");
    $("#projects-li").removeClass("active");
    $("#contact-li").removeClass("active");
    $("#about-li").addClass("active");
})
$("#projects-a").on("click", function(){
    $("#home-li").removeClass("active");
    $("#contact-li").removeClass("active");
    $("#about-li").removeClass("active");
    $("#projects-li").addClass("active");
})
$("#contact-a").on("click", function(){
    $("#home-li").removeClass("active");
    $("#about-li").removeClass("active");
    $("#projects-li").removeClass("active");
    $("#contact-li").addClass("active");
})