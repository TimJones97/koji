var navRotation = 0,
	navScale = 1.0,
	highdefBackgroundScale = 1.0,
	highdefTop = 0,
	highdefRight = 0,
	isThesis = false,
	detachedElem = null;

function changeNavColor(){
	$('section').each(function(){
		// If the active section slide has light-nav class,
		// make the nav elements white (only on desktop)
		if($(this).hasClass('active') && !isMobile() || $(this).hasClass('normal-section')){
			if ($(this).hasClass('contrast-nav-yellow')){
				$('nav').addClass('yellow-bg');
			}
			else {
				$('nav').removeClass('yellow-bg');
			}
			if ($(this).hasClass('contrast-nav')){
				$('nav').addClass('black-bg');
			}
			else {
				$('nav').removeClass('black-bg');
			}
			if ($(this).hasClass('brown-nav')){
				$('nav').addClass('brown-bg');
			}
			else {
				$('nav').removeClass('brown-bg');
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
	$('.thesis-anim section').each(function(){
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
function setActiveCircle(){
	// Loop through each nav-link, if href
	// matches URL hash add active (fill white) class
	$('.nav-link').each(function(){
		href = $(this).attr('href');
		if(href == location.hash){
			$(this).addClass('active');
		}
		else {
			$(this).removeClass('active');
		}
	});
}
function rotateCircleNav(index, nextIndex, direction){
	var currentIndex = nextIndex - index,
		href = '';

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
	setActiveCircle();
}
function scaleCircleNav(){
	var maxVHeight = 1080,
		height = window.innerHeight,
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
	else if (height < maxVHeight && !isMobile()){
		navScale = 1.0;
	}
	else {
		navScale = height / maxVHeight;
	}
	// On mobile, account for the URL and bottom navigation
	// by scaling circle-nav up by 1.25x
	if (isMobile()){
		navScale = navScale * 1.25;
	}
	// Add the new scale and rotation
	$('.circle-nav').css('transform', 'scale3d(' + navScale + ',' + navScale + ', 1.0) rotate(' + navRotation + 'deg)');
}
function initHomepagePagepiling(){
	// Make sure the videos in thesis section are already loaded
	$('.homepage-anim').addClass('pp-active');
	$('.homepage-anim').pagepiling({
	  	menu: '.circle-nav .circles',
		anchors: ['page1', 'page2', 'page3', 'page4'],
		normalScrollElements: '.contact',
	  	onLeave: function(index, nextIndex, direction){
			rotateCircleNav(index, nextIndex, direction);
			restartVideo();
			changeNavColor();
			hideCircleNavMobile();
			animateHeadersOnScroll(direction);
	  	},
  	});
}
function initThesisPagepiling(){
	isThesis = true;
	$('.thesis-anim').addClass('pp-active');
  	$('.thesis-anim').pagepiling({
	  	menu: '.thesis .circles',
		anchors: ['thesis-page1', 'thesis-page2', 'thesis-page3', 'thesis-page4', 'thesis-page5'],
	  	onLeave: function(index, nextIndex, direction){
			rotateCircleNav(index, nextIndex, direction);
			restartVideo();
			changeNavColor();
			hideCircleNavMobile();
			animateHeadersOnScroll(direction);
	  	},
  	});
  	// Make thesis scrollable if on mobile device
  	setThesisMobileStyles();
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
function scrollContactSection() {
	var currentContactScrollTop = $('.contact').scrollTop(),
    	lastScrollTop = 0;

    // For mobile
    $(window).on('touchstart', function(e) {
    	if($('.contact').hasClass('active')){
	        var swipe = e.originalEvent.touches,
	        start = swipe[0].pageY;

	        $(this).on('touchmove', function(e) {
	            var contact = e.originalEvent.touches,
	            end = contact[0].pageY,
	            distance = end-start;

	            currentContactScrollTop = $('.contact').scrollTop();

	            if (distance > 0 && currentContactScrollTop == 0
	            	&& lastScrollTop == 0){
	                location.hash = "page3";
	            } 
	        })
	        .one('touchend', function() {
	            $(this).off('touchmove touchend');
	        });
	    	lastScrollTop = currentContactScrollTop;
    	}
    });
    // For desktop
    $('.contact').mousewheel(function(event){

    	// If the current scrollTop position is 0, then the user is
    	// at the top of the contact div
        currentContactScrollTop = $('.contact').scrollTop();

    	if(currentContactScrollTop == 0 && event.deltaY == 1 && lastScrollTop == 0){
    		// Go to the High Definition page when user scrolls to top of contact div
    		location.hash = "page3";
    	}
    	lastScrollTop = currentContactScrollTop;
    });
}
function toggleMobileNav(){
	$('.menu-toggle').click(function(){
		$('.circle-nav').addClass('hide');
		$('.mobile-nav').addClass('display');
	});
	$('.close-btn').click(function(){
		$('.circle-nav').removeClass('hide');
		$('.mobile-nav').removeClass('display');
	});
	$('.nav-link').click(function(){
		$('.circle-nav').removeClass('hide');
		$('.mobile-nav').removeClass('display');
	});
}
function isMobile(){
	if($(window).width() < 991){
		return true;
	}
	else {
		return false;
	}
}
function hideCircleNavMobile(){
	if(isMobile()){
		$('.homepage-anim section').each(function(){
			// Hide the circle nav to give the user 
			// more space on contact sections
			if($(this).hasClass('active')){
				if($(this).hasClass('hide-circles-mobile')){
					$('.circle-nav').addClass('hide');
				}
				else {
					$('.circle-nav').removeClass('hide');
				}
			}
		});
	}
	else {
		$('.circle-nav').removeClass('hide');
	}
}
// Remove the "large" class from episodes when downsizing to mobile
function convertLargeEpisodesMobile(){
	// For the Listen and Read pages:
	// if the window width is less than 1600px
	// make the episodes smaller to collapse properly
	if($(window).width() < 1600){
		$('.episode').each(function(){
			if($(this).hasClass('lg')){
				$(this).removeClass('lg');
				// Add on an empty class to track which 
				// episodes were large before
				$(this).addClass('lg-removed');
			}
		});
	}
	else {
		$('.episode').each(function(){
			if($(this).hasClass('lg-removed')){
				// If the user resizes from mobile to desktop
				// make the episodes large again
				if($(this).hasClass('lg-removed')){
					$(this).addClass('lg');
					$(this).removeClass('lg-removed');
				}
			}
		});
	}
}
function truncateEpisodeText(){
   let wrapper = document.querySelector( ".description" );
   let options = {
      watch: "window"
   };
   new Dotdotdot( wrapper, options );
}
function setThesisMobileStyles(){
	// If the thesis-anim element exists and is not hidden
	if($('.thesis-anim').length){
		if(isMobile()){
			// Make body overflow scrollable
			$('body').addClass('scroll');
			// Make all sections active to show header elements
			// without waiting for animations
			$('.thesis-anim section').addClass('active');
			// Make nav permanently brown
			$('nav').addClass('brown-bg').addClass('light').removeClass('dark').removeClass('yellow-bg');
		}
		// Remove styles if window resized from mobile
		// to desktop
		else {
			$('body').removeClass('scroll');
			$('.thesis-anim section').removeClass('active');
			// Make first section active
			$('.thesis-anim section.one').addClass('active');
			$('nav').removeClass('brown-bg');
		}
	}
}
// Set the height of the fullpage sections on mobile
// to the inner viewport height to prevent hidden text
function setSectionHeightMobile(){
	if(isMobile()){
		if(window.innerHeight < window.outerHeight){
			$('footer').css('padding-bottom', '100px');
		}
		else {
			$('footer').removeAttr('style');
		}
		$('.homepage-anim .pp-tableCell').css('height', window.innerHeight + 'px');
		$('.mobile-nav').css('height', window.innerHeight + 'px');
	}
	else {
		$('.homepage-anim .pp-tableCell').css('height', 'unset');
		$('.mobile-nav').css('height', '100vh');
		$('footer').removeAttr('style');
	}
}

// Append links for non-root path links 
// on Github pages website
function modifyLinksForPublishing(){
	$('a[href*="/"]').each(function(){
		var	thisElem = $(this),
			thisHref = $(this).attr('href'),
			newHref = '';
		newHref = '/koji' + thisHref;
		thisElem.attr('href', newHref);
	});
}
function setActiveNavItem(){
	var title = document.title,
		pageHref;
	if(title != null){
		// Get first word of title
		title = title.split(' ')[0].toLowerCase();
	}
	$('nav .nav-item').each(function(){
		// Get the anchor element in each nav item and split the href
		// attribute by / and - to get the page name
		pageHref = $(this).children().first().attr('href').split('/')[2]; // Affected by /compass-legal URL, change to 1 after publishing
		if(pageHref != null){
			// Get the first word of page name
			pageHref = pageHref.split('-')[0];
			if(title == pageHref){
				$(this).addClass('active');
			}
		}
	});
}
function interceptNavigation() {
    // If going from Home to About
    let currentPage = location.pathname,
        goingTo = '',
        allowNavigation = this.state.navigation;

    // Split the pathname, only get the last word
    // which will be the current page name
    currentPage = currentPage.split();
    currentPage = currentPage[currentPage.length - 1];
    $('.nav-link').each(function(){
    	goingTo = currentElem.getAttribute('href'); 
	    if(currentPage == '/' && goingTo == '/about'){
	    	window.onbeforeunload = function() {
	    		animateHomeToThesis(currentElem);
	    	}
	    }
    })
}
function animateHomeToThesis(currentElem){
    var body = document.body;
    body.classList.add("animate-out")
}
$(window).resize(function(){
	scaleCircleNav();
	setSectionHeightMobile();
	hideCircleNavMobile();
	setThesisMobileStyles();
	convertLargeEpisodesMobile();
	changeNavColor();
	if(!isMobile()){
		$('.circle-nav').removeClass('hide');
		$('.mobile-nav').removeClass('display');
	}
});
$(window).scroll(function(){
	changeNavColor();
	setThesisMobileStyles();
});
$(document).ready(function() {
	scaleCircleNav();
	changeNavColor();
	toggleMobileNav();
	convertLargeEpisodesMobile();
	scrollContactSection();

	// Clear the anchor hash from the URL before initialising pagepiling
	location.hash = '';

	// Append /koji to links if published to personal Github pages site (can delete after)
	if(location.host == 'timj.design'){
		modifyLinksForPublishing();
	}

	// Only initiate pagePiling if on the index page
	if($('.homepage-anim').length){
		initHomepagePagepiling();
	}

	if($('.thesis-anim').length){
		initThesisPagepiling();
	}

	// if(location.pathname == '/listen' || location.pathname == '/read'){
	// 	truncateEpisodeText();
	// }

  	setTimeout(function(){
		setSectionHeightMobile();
	    $('video').addClass('loaded');
  	}, 500);
});