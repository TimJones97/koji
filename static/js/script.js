var navRotation = 0,
	navScale = 1.0,
	highdefBackgroundScale = 1.0;
	highdefTop = 0;
	highdefRight = 0
	isThesis = false
	detachedElem = null;

function changeNavColor(){
	$('section').each(function(){
		// If the active section slide has light-nav class,
		// make the nav elements white
		if($(this).hasClass('active')){
			if ($(this).hasClass('contrast-nav')){
				$('nav').addClass('dark-bg');
			}
			else {
				$('nav').removeClass('dark-bg');
			}
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
	var currentIndex = nextIndex - index,
		pageHash = location.hash,
		href = '';

	// Loop through each nav-link, if href
	// matches URL hash add active (fill white) class
	$('.nav-link').each(function(){
		href = $(this).attr('href');
		if(href == pageHash){
			$(this).addClass('active');
		}
	});
	// If pagepiling is active for home page
	if(!isThesis){
		if(direction == 'down' && currentIndex == 1){
			// Increment the rotation by 30 degrees each time
			navRotation += 30;
		}
		// Jumping by 2 slides forwards
		else if(direction == 'down' && currentIndex == 2){
			navRotation += 60;
		}
		// Jumping by 2 slides backwards
		else if(direction == 'up' && currentIndex == -2){
			navRotation = navRotation - 60;
		}
		// Jumping by 3 slides forwards
		else if(direction == 'down' && currentIndex == 3){
			navRotation += 90;
		}
		// Jumping by 3 slides backwards
		else if(direction == 'up' && currentIndex == -3){
			navRotation = navRotation - 90;
		}
		else {
			// Reverse rotation by 30 degrees to animate backward
			navRotation = navRotation - 30;
		}
		$('.home').css('transform', 'scale3d(' + navScale + ',' + navScale + ', 1.0) rotate(' + navRotation + 'deg)');
	}
	// If pagepiling is active for thesis page
	else {
		if(direction == 'down' && currentIndex == 1){
			// Increment the rotation by 30 degrees each time
			navRotation = navRotation - 30;
		}
		// Jumping by 2 slides forwards
		else if(direction == 'down' && currentIndex == 2){
			navRotation = navRotation - 60;
		}
		// Jumping by 2 slides backwards
		else if(direction == 'up' && currentIndex == -2){
			navRotation = navRotation + 60;
		}
		// Jumping by 3 slides forwards
		else if(direction == 'down' && currentIndex == 3){
			navRotation = navRotation - 90;
		}
		// Jumping by 3 slides backwards
		else if(direction == 'up' && currentIndex == -3){
			navRotation = navRotation + 90;
		}
		else {
			navRotation = navRotation + 30;
		}
		$('.thesis').css('transform', 'scale3d(' + navScale + ',' + navScale + ', 1.0) rotate(' + navRotation + 'deg)');
	}
}
function scaleCircleNav(){
	var maxVHeight = 1080,
		height = $(window).height(),
		width = $(window).width();

	// If the screen height is larger than full hd 1080px
	if (height > maxVHeight || (width / height) >  1.5){
		navScale = height / maxVHeight;
	}
	// If the screen width is double the height,
	// the screen is ultrawide
	if ((width / height) >  2.0 && width > 2000){
		navScale = (width / maxVHeight) * 0.6;
	}
	// Anything smaller than this is fine at 1.0 scale
	else if (height < maxVHeight){
		navScale = 1.0;
	}

	// Add the new scale and rotation
	$('.circle-nav').css('transform', 'scale3d(' + navScale + ',' + navScale + ', 1.0) rotate(' + navRotation + 'deg)');
}
function scaleHighdefBackground(){
	var minWidth = 1920,
		width = $(window).width();

	if(width > minWidth){
		highdefBackgroundScale = width / minWidth;
		highdefTop = 0;
		highdefRight = (1.0 - (width / minWidth)) / 2 * 100;

		// Make the negative values positive
		highdefRight = Math.abs(highdefRight)
	}
	if(width < minWidth){
		highdefBackgroundScale = width / minWidth;
		highdefTop = (1.0 - (width / minWidth)) / 2 * 100;
		highdefRight = (1.0 - (width / minWidth)) / 2 * 100;
		// Make the values negative
		highdefTop = '-' + highdefTop;
		highdefRight = '-' + highdefRight;
	}
	else {
		highdefBackgroundScale = 1.0;
		highdefTop = 0;
		highdefRight = 0;
	}
	// Add the styles to the dynamic background in the high definition section
	$('.highdef-bg').css('transform', 'scale3d(' + highdefBackgroundScale + ',' + highdefBackgroundScale + ', 1.0) translate(0%, -50%)');
	// $('.highdef-bg').css('top',  highdefTop + '%');
	$('.highdef-bg').css('right', highdefRight + '%');
}
function goThesis(){
	$('.go-thesis').click(function(){
		$('body').addClass('show-thesis');

		// Add 30 degrees to nav for thesis circles
		navRotation = 30;

		// Make the thesis page visible 
		$('#thesis-anim').removeAttr('hidden');

		// Make the main link active if it has been affected
		// by scrolling on the homepage
		setTimeout(function(){
			$('.thesis .three.nav-link').addClass('active');
		}, 50);
		initThesisPagepiling();
	})
}
function initHomepagePagepiling(){
	// $('body').removeClass('show-thesis');
	// detachedElem = $('#thesis-anim').detach();

	// Only initiate pagePiling if on the index page
	if(location == '/'){
		$('#homepage-anim').pagepiling({
		  	menu: '.circle-nav .circles',
			anchors: ['page1', 'page2', 'page3', 'page4'],
			normalScrollElements: '.contact',
		  	onLeave: function(index, nextIndex, direction){
				rotateCircleNav(index, nextIndex, direction);
				restartVideo();
				changeNavColor();
				animateHeadersOnScroll(direction);
		  	},
	  	});
	}
}
function initThesisPagepiling(){
	var animationDelay = 2000;
	// Wait 3 seconds before removing the homepage element
	setTimeout(function(){
  		isThesis = true;
		// detachedElem = $('#homepage-anim').detach();
		$('#homepage-anim').detach();
	  	$('#thesis-anim').pagepiling({
		  	menu: '.thesis .circles',
			anchors: ['thesis-page1', 'thesis-page2', 'thesis-page3', 'thesis-page4', 'thesis-page5'],
		  	onLeave: function(index, nextIndex, direction){
				rotateCircleNav(index, nextIndex, direction);
				restartVideo();
				changeNavColor();
				animateHeadersOnScroll(direction);
		  	},
	  	});
	}, animationDelay);
}
function animateHeadersOnScroll(direction){
	$('section').each(function(){
		// Add a slide down animation to the header text
		// if going from down to up for a more natural
		// interaction
		if($(this).hasClass('active')){
			if(direction == 'up'){
				$(this).addClass('anim-down');
				$(this).next().addClass('anim-down');
			}
			else {
				// Remove any left over class additions
				$(this).removeClass('anim-down');
				$(this).prev().removeClass('anim-down');
			}
		}
	});
}
function scrollContactSection(){
	var currentContactScrollTop = $('.contact').scrollTop();
	// If the current scrollTop position is 0, then the user is
	// at the top of the contact div
	if(currentContactScrollTop == 0){
		// Go to the High Definition page when user scrolls to top of contact div
		location.hash = "page3";
	}
}
$('.contact').scroll(function(){
	scrollContactSection();
});
$(window).resize(function(){
	scaleCircleNav();
	scaleHighdefBackground();
});
$(document).ready(function() {
	scaleCircleNav();
	scaleHighdefBackground();
	goThesis();
	// Clear the anchor hash from the URL before initialising pagepiling
	location.hash = '';
	initHomepagePagepiling();
  	// Remove this at the end
  	setTimeout(function(){
	    $('video').addClass('loaded');
  	}, 500);
});