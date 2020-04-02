$(document).ready(function () {
    $("#bars-mob").click(function () { 
        $(".nav-mobile").animate({left:"0px"},1000)
    });
    
    $("#close").click(function () { 
        $(".nav-mobile").animate({left:"-700%"},1000)
    });
});