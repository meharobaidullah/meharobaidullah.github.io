/* =========================================
                Preloader
============================================ */

$(window).on('load', function () { 
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* =========================================
            Team Code for Carousel
============================================ */
// $(function () {
    
// });

$(document).ready(function(){
  $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });  
});


// ============================================
//                 Progress Bars
// ============================================


$(function(){

    $('.progress-section').waypoint(function(){

        $('.progress-bar').each(function(){

            $(this).animate({
                width: $(this).attr('aria-valuenow') + "%"
            }, 2000);

        });

        this.destroy();
    }, {
            offset: 'bottom-in-view'
    });

});


/* =========================================
               Portfolio
============================================ */
$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({});

    
    $("#isotope-filters").on('click', 'button', function () {

       
        var filterValue = $(this).attr('data-filter');
        
        $("#isotope-container").isotope({
            filter: filterValue
        });

        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});


/* =========================================
              Stats
============================================ */


$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});

/* =========================================
              Navigation
============================================ */

/* Show & Hide White Navigation */
$(function () {
    
    showHideNav();

    $(window).scroll(function () {        
       
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            
            $("nav").addClass("white-nav-top");

        
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

           
            $("#back-to-top").fadeIn();

        } else {
            

            
            $("nav").removeClass("white-nav-top");

            
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

           
            $("#back-to-top").fadeOut();
        }
    }
});

// Smooth Scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

       
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});

/* =========================================
              Mobile Menu
============================================ */
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});


/* =========================================
                Animation
============================================ */


$(function(){
    new WOW().init();
});

$(window).on('load', function(){
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $(".home-text").addClass("animated zoomIn");
    $(".home-btn").addClass("animated zoomIn");
    $("#home-arrow i").addClass("animated fadeInDown infinite");
});

/* =========================================
               Magnifier
============================================ */
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});
