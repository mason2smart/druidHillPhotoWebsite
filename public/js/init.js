jQuery(
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
	      $('.tabs').tabs();
	  			$('#tabs-swipe').tabs({ swipeable: false});

	  	$( document ).ready(function() { 
			var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
			if(isMobile){
			$('#tabs-swipe').tabs({ swipeable: true,   responsiveThreshold: Infinity});}});
  }) // end of document ready
)(jQuery); // end of jQuery name space
