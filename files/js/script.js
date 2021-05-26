var rotation = 0;

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
function rotateCircleNav(direction){
	if(direction == 'down'){
		// Increment the rotation by 30 degrees each time
		rotation += 30;
		$('.circle-nav .active').removeClass('active').next().addClass('active');
	}
	else {
		// Reverse rotation by 30 degrees to animate backward
		rotation = rotation - 30;
		$('.circle-nav .active').removeClass('active').prev().addClass('active');
	}
	$('.circle-nav').css('transform', 'rotate(' + rotation + 'deg)');
}
$(document).ready(function() {
  $('#fullpage-anim').pagepiling({
  	menu: '.circles',
	anchors: ['page1', 'page2', 'page3'],
  	onLeave: function(index, nextIndex, direction){
		rotateCircleNav(direction);
		restartVideo();
		changeNav();
  	},
  });
});