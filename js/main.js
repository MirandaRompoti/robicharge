;(function ($) {
    "use strict";
    $(document).on('ready', function () {

        /*--Primary-Menu-Dropdown-Plus-Icon--*/
        $('.primary-menu .sub-menu').parent('li').children('a').append('<i class="plus"></i>');

        $('.mouse-dir').append('<span class="dir-part"></span>');
        /*-- Button-Hover-Effect-Script --*/
        $( '.mouse-dir' ).on( 'mouseenter', function ( e ) {
            var parentOffset = $( this ).offset( ),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            if ( $( this ).find( '.mouse-dir .dir-part' ) ) {
                $( '.mouse-dir .dir-part' ).css( {
                    top: relY,
                    left: relX,
                } );
            }
        } );
        $( '.mouse-dir' ).on( 'mouseout', function ( e ) {
            var parentOffset = $( this ).offset( ),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            if ( $( this ).find( '.mouse-dir .dir-part' ) ) {
                $( '.mouse-dir .dir-part' ).css( {
                    top: relY,
                    left: relX,
                } );
            }
        } );

    /*--------------------
    MAGNIFIC POPUP JS
    ----------------------*/
        $('.gallery-image').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
         $('.iframe').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
        /*-- Home-Slider-Active --*/
        $('.home-slider').slick({
            dots: false,
            arrows: false,
            prevArrow: '<button class="slick-prev" type="button"><i class="ti-angle-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="ti-angle-right"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: true,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.feature-images').slick({
            dots: false,
            arrows: false,
            prevArrow: '<button class="slick-prev" type="button"><i class="ti-angle-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="ti-angle-right"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: true,
            fade: true,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false,
                    }
                }
            ]
        });

        /*-- Testimonail-Slider-Active --*/
        $('.testimonial-slider').slick({
            dots: false,
            arrows: true,
            prevArrow: '<button class="slick-prev"  type="button"><i class="ti-angle-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="ti-angle-right"></i></button>',
            infinite: true,
            centerMode: true,
            autoplay: true,
            centerPadding: '0px',
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false,
                    }
                }
            ]
        });
        $('.video-slider').slick({
            dots: false,
            arrows: false,
            prevArrow: '<button class="slick-prev"  type="button"><i class="ti-angle-right"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="ti-angle-left"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: true,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false,
                    }
                }
            ]
        });    

        /*-- Mobile-Menu-Active --*/
        $('.primary-menu').slicknav({
            label: '',
            duration: 500,
            prependTo: '',
            closedSymbol: '<i class="ti-angle-right"></i>',
            openedSymbol: '<i class="ti-angle-right"></i>',
            appendTo: '.mainmenu-area',
            menuButton: '.navi-trigger',
            closeOnClick: 'true' // Close menu when a link is clicked.
        });

        $('.navi-trigger').on('click',function(){
            $(this).toggleClass('active');
        });

        
        anime({
            targets: '.feature-image.image-1',
            keyframes: [
                {translateY: -50},
                {translateX: 100},
                {translateY: 100},
                {translateX: -50},
            ],
            delay: function(el, i) { return i * 100; },
            direction: 'alternate',
            duration: 5000,
            loop: true,
            easing: 'easeInSine'
        });

        anime({
            targets: '.feature-image.image-2',
            keyframes: [
                {translateY: -80},
                {translateY: 80},
            ],
            delay: function(el, i) { return i * 100; },
            direction: 'alternate',
            duration: 5000,
            loop: true,
            easing: 'easeInSine'
        });
 

        /*-- Click-Smoth-Scroll-Script --*/
        $('.mainmenu-area a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .on('click', function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    
    });


    $(window).on("load", function () {
        /*-- Preloader-Fade-Out-After-Load-Window --*/
        $('.preloader').fadeOut(500);

        $('body').append('<a href="#" id="scrollUp"><i class="ti-arrow-up"></i></a>');
        $('#scrollUp').click(function() {
            $('body,html').animate({
                scrollTop : 0
            }, 500);
            return false;
        });
    });
    // ===== Scroll to Top ==== 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
            $('#scrollUp').addClass('active');    // Fade in the arrow
        } else {
            $('#scrollUp').removeClass('active');   // Else fade out the arrow
        }


        var pr_scroll = $(document).scrollTop();
        $('.parallax-bg').css({
            'background-position':'center bottom '+( -.2 * pr_scroll)+'px'
        });
    });


})(jQuery);