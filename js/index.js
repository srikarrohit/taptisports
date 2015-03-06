var main=function(){
	$('.icon-menu').click(function(){
        $('.sidebar-wrapper').animate({left:"0px"},200);
        $('.jumbotron').animate({left:"250px"},200);
    });
    $('.icon-close').click(function(){
        $('.sidebar-wrapper').animate({left:"-250px"},200);
        $('.jumbotron').animate({left:"0px"},200);
    });
};
$(document).ready(main);
