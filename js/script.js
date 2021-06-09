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
	// by scaling circle-nav up by 1.3x
	// if (isMobile()){
	// 	navScale = navScale * 1.3;
	// }

	// Add the new scale and rotation
	$('.circle-nav').css('transform', 'scale3d(' + navScale + ',' + navScale + ', 1.0) rotate(' + navRotation + 'deg)');
}
function goThesis(){
	$('.go-thesis').click(function(){
	  	$('body').removeClass('hide-thesis');
		$('body').addClass('show-thesis');

		// Add 30 degrees to nav for thesis circles
		navRotation = 30;

		// Make the thesis page visible 
		$('#thesis-anim').removeAttr('hidden');

		
		setTimeout(function(){

			// Re-add the thesis-anim element
		  	detachedElem.insertAfter($('.circle-nav.thesis'));
			detachedElem = $('#homepage-anim').detach();

			// Make the main link active if it has been affected
			// by scrolling on the homepage
			$('.circle-nav.thesis .three.nav-link').addClass('active');

			// Rotate nav to start position
			$('.circle-nav').css('transform', 'scale3d(' + navScale + ',' + navScale + ', 1.0) rotate(' + navRotation + 'deg)');

			setActiveCircle();

			
		}, 50);		
		setTimeout(function(){
			// Make thesis scrollable if on mobile device
			setThesisMobileStyles();
		}, 2000);		
		initThesisPagepiling();
	})
}
function goHome(){
	$('.logo[href*="#go-home"]').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		// On homepage set isThesis to false
		isThesis = false;

		var animationDelay = 2000;

		// Make navRotation 0 for homepage nav circles
		navRotation = 0;

	  	// Make the thesis page hidden 
	  	$('body').removeClass('show-thesis');
	  	$('body').addClass('hide-thesis');

	  	setTimeout(function(){

			// Re-add the homepage-anim element
		  	// detachedElem.prop('hidden', true);
		  	detachedElem.insertAfter($('.circle-nav.home'));
			detachedElem = $('#thesis-anim').detach();

			// Make the main link active if it has been affected
			// by scrolling on the thesis page
			setTimeout(function(){
				$('.circle-nav.home .four.nav-link').addClass('active');
				setActiveCircle();
				restartVideo();

				// Remove thesis scroll styles affecting 
				// the navbar
				setThesisMobileStyles();
			}, 50);	
		}, animationDelay);
	});
}
function initHomepagePagepiling(){
	detachedElem = $('#thesis-anim').detach();
	$('#homepage-anim').pagepiling({
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
	var animationDelay = 2000;
	// Wait 3 seconds before removing the homepage element
	setTimeout(function(){
		// Set global thesis variable to true
  		isThesis = true;
  		
  		// Get the homepage element and assign it 
  		// to a var for later
		detachedElem = $('#homepage-anim').detach();
	  	$('#thesis-anim').pagepiling({
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
function scrollContactSection() {
	var currentContactScrollTop = $('.contact').scrollTop(),
    	lastScrollTop = 0;

    // For mobile
    $(window).on('touchstart', function(e) {
        var swipe = e.originalEvent.touches,
        start = swipe[0].pageY;

        $(this).on('touchmove', function(e) {
            var contact = e.originalEvent.touches,
            end = contact[0].pageY,
            distance = end-start;

            currentContactScrollTop = $('.contact').scrollTop();

            if (distance > 0 && currentContactScrollTop == 0
            	&& lastScrollTop > 0){
                location.hash = "page3";
            } 
            console.log(distance);
            console.log(currentContactScrollTop);
            console.log(lastScrollTop);
        })
        .one('touchend', function() {
            $(this).off('touchmove touchend');
        });
    	lastScrollTop = currentContactScrollTop;
    });
    // For desktop
    $('.contact').mousewheel(function(event){
    	
    	// If the current scrollTop position is 0, then the user is
    	// at the top of the contact div
        currentContactScrollTop = $('.contact').scrollTop();

    	if(currentContactScrollTop == 0 && event.deltaY == 1 && lastScrollTop > 0){
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
		$('#homepage-anim section').each(function(){
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
	if($('#thesis-anim').length && $('body').hasClass('show-thesis')){
		if(isMobile()){
			// Make body overflow scrollable
			$('body').addClass('scroll');
			// Make all sections active to show header elements
			// without waiting for animations
			$('#thesis-anim section').addClass('active');
			// Make nav permanently brown
			$('nav').addClass('brown-bg').addClass('light').removeClass('dark');
		}
		// Remove styles if window resized from mobile
		// to desktop
		else {
			$('body').removeClass('scroll');
			$('#thesis-anim section').removeClass('active');
			// Make first section active
			$('#thesis-anim section.one').addClass('active');
			$('nav').removeClass('brown-bg');
		}
	}
	// If the thesis is hidden, remove styles
	if($('#thesis-anim').length && !$('body').hasClass('show-thesis')){
		$('body').removeClass('scroll');
		$('#thesis-anim section').removeClass('active');
		// Make first section active
		$('#thesis-anim section.one').addClass('active');
		$('nav').removeClass('brown-bg');
	}
}
// Set the height of the fullpage sections on mobile
// to the inner viewport height to prevent hidden text
function setSectionHeightMobile(){
	if(isMobile()){
		if(window.innerHeight < window.outerHeight){
			$('footer').css('padding-bottom', '100px');
		}
		$('#homepage-anim .pp-tableCell').css('height', window.innerHeight + 'px');
		$('.mobile-nav').css('height', window.innerHeight + 'px');
	}
	else {
		$('#homepage-anim .pp-tableCell').css('height', 'unset');
		$('.mobile-nav').css('height', '100vh');
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
$(window).resize(function(){
	scaleCircleNav();
	setSectionHeightMobile();
	hideCircleNavMobile();
	setThesisMobileStyles();
	convertLargeEpisodesMobile();
	if(!isMobile()){
		$('.circle-nav').removeClass('hide');
		$('.mobile-nav').removeClass('display');
	}
});
$(document).ready(function() {
	scaleCircleNav();
	goHome();
	goThesis();
	toggleMobileNav();
	setThesisMobileStyles();
	convertLargeEpisodesMobile();
	scrollContactSection();

	// Clear the anchor hash from the URL before initialising pagepiling
	location.hash = '';

	// Append /koji to links if published to site (can delete after)
	if(location.pathname == '/koji/'){
		modifyLinksForPublishing();
	}

	// Only initiate pagePiling if on the index page
	if($('#homepage-anim').length){
		initHomepagePagepiling();
	}

	// if(location.pathname == '/listen' || location.pathname == '/read'){
	// 	truncateEpisodeText();
	// }

  	setTimeout(function(){
		setSectionHeightMobile();
	    $('video').addClass('loaded');
  	}, 500);
});