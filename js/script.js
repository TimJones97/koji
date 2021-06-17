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
		// make the nav elements white (exclude Thesis on mobile)
		if($(this).hasClass('active') && !isThesis || 
			$(this).hasClass('normal-section') || 
			($(this).hasClass('active') && isThesis && !isMobile())){
			if ($(this).hasClass('contrast-nav-orange')){
				$('nav').addClass('orange-bg');
			}
			else {
				$('nav').removeClass('orange-bg');
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
		$('.circle-nav.home').css('transform', 'scale3d(' + navScale + ',' + navScale + ', 1.0) rotate(' + navRotation + 'deg)');
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
		$('.circle-nav.thesis').css('transform', 'scale3d(' + navScale + ',' + navScale + ', 1.0) rotate(' + navRotation + 'deg)');
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
	// by scaling circle-nav up by 1.175x
	if (isMobile()){
		navScale = navScale * 1.175;
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
		// interaction (only desktop for thesis, mobile + desktop for
		// homepage)
		if($(this).hasClass('active') && (!isMobile() && isThesis)){
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
function isSafari() {
  const navigator = window.navigator;
  const ua = navigator.userAgent.toLowerCase()
  const isSafari = ((ua.indexOf('safari') != -1) && (!(ua.indexOf('chrome')!= -1) && (ua.indexOf('version/')!= -1)))
  return isSafari
}
function scrollContactSection() {
	var currentContactScrollTop = $('.contact').scrollTop(),
    	lastContactScrollTop = 0,
    	currentThesisPageFiveScrollTop = $('.thesis-page.five').scrollTop(),
    	lastThesisPageFiveScrollTop = 0;

    // For mobile
    $(window).on('touchstart', function(e) {
        var swipe = e.originalEvent.touches,
        start = swipe[0].pageY;

        $(this).on('touchmove', function(e) {
            var contact = e.originalEvent.touches,
            end = contact[0].pageY,
            distance = end-start;

			if($('.contact').hasClass('active')){
	            currentContactScrollTop = $('.contact').scrollTop();
	            if (distance > 0 && currentContactScrollTop <= 0
	            	&& lastContactScrollTop <= 0){
	                location.hash = "page3";
	            } 
	        }
			if($('.thesis-page.five').hasClass('active')){
	            currentThesisPageFiveScrollTop = $('.thesis-page.five').scrollTop();
	            if (distance > 0 && currentThesisPageFiveScrollTop <= 0
	            	&& lastThesisPageFiveScrollTop <= 0){
	                location.hash = "thesis-page4";
	            } 
	        }

        })
        .one('touchend', function() {
            $(this).off('touchmove touchend');
        });
    	lastContactScrollTop = currentContactScrollTop;
    	lastThesisPageFiveScrollTop = currentThesisPageFiveScrollTop;
    });
    // For desktop
    $('.contact').mousewheel(function(event){

    	// If the current scrollTop position is 0, then the user is
    	// at the top of the contact div
        currentContactScrollTop = $('.contact').scrollTop();

    	if(currentContactScrollTop == 0 && event.deltaY == 1 && lastContactScrollTop == 0){
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
		setTimeout(function(){
			$('.mobile-nav').removeClass('display');
		}, 1000)
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
			$('html').addClass('scroll');
			$('body').addClass('scroll');
			// Make all sections active to show header elements
			// without waiting for animations
			$('.thesis-anim section').addClass('show-headers');
			// Make nav permanently brown
			$('nav').addClass('brown-bg').addClass('light').removeClass('dark').removeClass('orange-bg');

			// Remove event listeners
			$('.thesis-anim').unbind();
		}
		// Remove styles if window resized from mobile
		// to desktop
		else {
			$('.thesis-anim section').removeClass('show-headers');
			$('html').removeClass('scroll');
			$('body').removeClass('scroll');
			$('nav').removeClass('brown-bg');
		}
	}
}
// Set the height of the fullpage sections on mobile
// to the inner viewport height to prevent hidden text
function setSectionHeightMobile(){
	if(isMobile()){
		$('.homepage-anim .pp-tableCell').css('height', window.innerHeight + 'px');
		$('.mobile-nav').css('height', window.innerHeight + 'px');
	}
	else {
		$('.homepage-anim .pp-tableCell').css('height', 'unset');
		$('.mobile-nav').css('height', '100vh');
	}
}
function setActiveNavItem(){
	var title = document.title,
		pageHref;
	if(title != null){
		// Get first word of title before the | divider
		title = title.split('|')[0];
		// Remove spaces and make lowercase
		title = title.replace(' ', '').toLowerCase();
	}
	$('.right-nav .nav-link').each(function(){
		// Get the anchor element in each nav item and split the href
		// attribute by / and - to get the page name
		pageHref = $(this).attr('href');
		pageHref = pageHref.split('/');
		pageHref = pageHref[pageHref.length - 1];
		if(title == pageHref){
			$(this).parent().addClass('active');
		}
	});
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
	setActiveNavItem();

	// Clear the anchor hash from the URL before initialising pagepiling
	location.hash = '';

	// Only initiate pagePiling if on the index page
	if($('.homepage-anim').length){
		initHomepagePagepiling();
		// Add extra padding on the bottom because Safari hides elements
		if(isSafari()){
			$('footer').css('padding-bottom', '120px');
		}
	}

	if($('.thesis-anim').length){
		initThesisPagepiling();
		if(isSafari()){
			$('footer').css('padding-bottom', '120px');
		}
	}

	// if(location.pathname == '/listen' || location.pathname == '/read'){
	// 	truncateEpisodeText();
	// }

	setSectionHeightMobile();
});