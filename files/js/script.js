var rotation = 0,
	scale = 1.0;

function changeNav(){
	$('section').each(function(){
		// If the active section slide has light-nav class,
		// make the nav elements white
		if($(this).hasClass('active')){
			if($(this).hasClass('light-nav')){
				$('nav').addClass('light');
				$('nav').removeClass('dark');
			}
			else {
				$('nav').addClass('dark');
				$('nav').removeClass('light');
			}
		}
	});
}
function restartVideo(){
	$('section').each(function(){
		// If the active section slide has light-nav class,
		// make the nav elements white
		if($(this).hasClass('active')){
			$(this).find('video').currentTime = 0;
		}
	});
}
function rotateCircleNav(index, nextIndex, direction){
	var currentIndex = nextIndex - index;
	if(direction == 'down' && currentIndex == 1){
		// Increment the rotation by 30 degrees each time
		rotation += 30;
		$('.circle-nav .active').removeClass('active').next().addClass('active');
	}
	else if(direction == 'down' && currentIndex == 2){
		rotation += 60;
		$('.circle-nav .active').removeClass('active').next().addClass('active');
	}
	else if(direction == 'up' && currentIndex == -2){
		rotation = rotation - 60;
		$('.circle-nav .active').removeClass('active').next().addClass('active');
	}
	else {
		// Reverse rotation by 30 degrees to animate backward
		rotation = rotation - 30;
		$('.circle-nav .active').removeClass('active').prev().addClass('active');
	}
	$('.circle-nav').css('transform', 'scale3d(' + scale + ',' + scale + ', 1.0) rotate(' + rotation + 'deg)');
}
// Fade in the video after the window is fully loaded
function fadeVideoLoad(){
	$(window).on('load', function(){
	    $('video').addClass('loaded');
	});
}
function scaleCircleNav(){
	var maxVHeight = 1080,
		height = $(window).height(),
		width = $(window).width();
		console.log(width / height);

	if (height > maxVHeight || (width / height) >  1.5){
		scale = height / maxVHeight;
	}
	if ((width / height) >  2.0){
		scale = (width / maxVHeight) * 0.6;
	}
	else if (height < maxVHeight){
		scale = 1.0;
	}

	// Add the new scale and rotation
	$('.circle-nav').css('transform', 'scale3d(' + scale + ',' + scale + ', 1.0) rotate(' + rotation + 'deg)');
}
$('.circle-nav a').click(function(){
	// rotateCircleNav();
});
$(window).resize(function(){
	scaleCircleNav();
});
$(document).ready(function() {
	fadeVideoLoad();
	scaleCircleNav();
  	$('#fullpage-anim').pagepiling({
	  	menu: '.circles',
		anchors: ['page1', 'page2', 'page3'],
	  	onLeave: function(index, nextIndex, direction){
			rotateCircleNav(index, nextIndex, direction);
			restartVideo();
			changeNav();
	  	},
  	});
});