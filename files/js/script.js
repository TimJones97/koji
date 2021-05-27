var navRotation = 0,
	navScale = 1.0,
	highdefBackgroundScale = 1.0;
	highdefTop = 0;
	highdefRight = 0;

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
			var video = $(this).children().find('video').get(0);
			if(video != null){
				video.pause();
				video.currentTime = 0;
				video.play();
			}
		}
	});
}
function rotateCircleNav(index, nextIndex, direction){
	var currentIndex = nextIndex - index;
	if(direction == 'down' && currentIndex == 1){
		// Increment the rotation by 30 degrees each time
		navRotation += 30;
		$('.circle-nav .active').removeClass('active').next().addClass('active');
	}
	else if(direction == 'down' && currentIndex == 2){
		navRotation += 60;
		$('.circle-nav .active').removeClass('active').next().addClass('active');
	}
	else if(direction == 'up' && currentIndex == -2){
		navRotation = navRotation - 60;
		$('.circle-nav .active').removeClass('active').next().addClass('active');
	}
	else {
		// Reverse rotation by 30 degrees to animate backward
		navRotation = navRotation - 30;
		$('.circle-nav .active').removeClass('active').prev().addClass('active');
	}
	$('.circle-nav').css('transform', 'scale3d(' + navScale + ',' + navScale + ', 1.0) rotate(' + navRotation + 'deg)');
}
// Fade in the video after the window is fully loaded
function fadeVideoLoad(){
	$(window).on('load', function(){
		console.log('loaded');
	    $('video').addClass('loaded');
	});
}
function scaleCircleNav(){
	var maxVHeight = 1080,
		height = $(window).height(),
		width = $(window).width();

	if (height > maxVHeight || (width / height) >  1.5){
		navScale = height / maxVHeight;
	}
	if ((width / height) >  2.0){
		navScale = (width / maxVHeight) * 0.6;
	}
	else if (height < maxVHeight){
		navScale = 1.0;
	}

	// Add the new scale and rotation
	$('.circle-nav').css('transform', 'scale3d(' + navScale + ',' + navScale + ', 1.0) rotate(' + navRotation + 'deg)');
}
function scaleHighdefBackground(){
	var minVWidth = 1920,
		width = $(window).width();
	if(width < minVWidth){
		highdefBackgroundScale = width / minVWidth;
		highdefTop = (1.0 - (width / minVWidth)) / 2 * 100;
		highdefRight = (1.0 - (width / minVWidth)) / 2 * 100;
		
	}
	else {
		highdefBackgroundScale = 1.0;
		highdefTop = 0;
		highdefRight = 0;
	}
	// Add the styles to the dynamic background in the high definition section
	$('.highdef-bg').css('transform', 'scale3d(' + highdefBackgroundScale + ',' + highdefBackgroundScale + ', 1.0)');
	$('.highdef-bg').css('top',  '-' + highdefTop + '%');
	$('.highdef-bg').css('right','-' + highdefRight + '%');
}
$(window).resize(function(){
	scaleCircleNav();
	scaleHighdefBackground();
});
$(document).ready(function() {
	fadeVideoLoad();
	scaleCircleNav();
	scaleHighdefBackground();
  	$('#homepage-anim').pagepiling({
	  	menu: '.circles',
		anchors: ['page1', 'page2', 'page3', 'page4'],
	  	onLeave: function(index, nextIndex, direction){
			rotateCircleNav(index, nextIndex, direction);
			restartVideo();
			changeNav();
	  	},
  	});
  // 	$('#thesis-anim').pagepiling({
	 //  	menu: '.circles-left',
		// anchors: ['thesis-page1', 'thesis-page2', 'thesis-page3', 'thesis-page4']
		// // anchors: ['thesis-page1', 'thesis-page2', 'thesis-page3', 'thesis-page4'],
	 // //  	onLeave: function(index, nextIndex, direction){
		// // 	rotateCircleNav(index, nextIndex, direction);
		// // 	restartVideo();
		// // 	changeNav();
	 // //  	},
  // 	});
});