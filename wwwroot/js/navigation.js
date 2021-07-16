/*(function($) {
    "use strict";
    var main_wind = $(window);
    var wWidth = $(window).width();
    jQuery(document).ready(function($) {
        jQuery("#menuzord").menuzord({
            trigger: "hover",
            
        });
    });
    main_wind.on('scroll', function() {
        if ($(this).scrollTop() >= 35) {
            $("#header").addClass("sticked");
        } else {
            $("#header").removeClass("sticked");
        }
    });
   
}
 (jQuery));
 */
 
 (function($) {
    "use strict";
    var main_wind = $(window);
    var wWidth = $(window).width();
    jQuery(document).ready(function($) {
        jQuery("#menuzord").menuzord({
            trigger: "hover",
            indicatorFirstLevel: '<i class="fa fa-angle-down"></i>',
            indicatorSecondLevel: '<i class="fa fa-angle-right"></i>'
        });
        $("#mouse").on("click", function() {
            $("html, body").animate({
                scrollTop: $("#welcome").offset().top - 64 + 'px'
            }, 1200);
        });
        if (wWidth > 767) {
            $('.service_banner, .shop_banner, .blog_banner, .booking_banner, .contact_banner, .gallery_banner').parallax("50%", 0.4);
        }
    });
    main_wind.on('scroll', function() {
        if ($(this).scrollTop() >= 35) {
            $("#header").addClass("sticked");
        } else {
            $("#header").removeClass("sticked");
        }
    });
    $(".hero_content4_wrapper").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        smartSpeed: 1200,
        autoplayTimeout: 9000,
    });
    $("#product_carousel").owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: true,
        margin: 25,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplay: true,
        smartSpeed: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            }
        }
    });
    $("#product_carousel2").owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: false,
        margin: 25,
        navText: ["", ""],
        autoplay: true,
        smartSpeed: 1200,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            }
        }
    });
    $("#work_carousel").owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: true,
        margin: 25,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplay: true,
        smartSpeed: 2700,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            }
        }
    });
    $("#experts_carousel").owlCarousel({
          items:3,
                loop: true,
                margin: 10,
                 autoplay:true,
    autoplayTimeout:1000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 3,
                    nav: false
                  },
                  1000: {
                    items: 3,
                    nav: true,
                   loop: true,
                    margin: 20
            }
        }
    });
    jQuery('.nav-tabs').each(function() {
        jQuery(this).find('a').first().tab('show');
    });
    jQuery('.tab-content').each(function() {
        jQuery(this).find('.tab-pane').first().addClass('fade in');
    });
    jQuery('.panel-group').each(function() {
        jQuery(this).find('a').first().filter('.collapsed').trigger('click');
    });
    $(".testimoial_wrapper").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplay: true,
        smartSpeed: 1100,
        autoplayHoverPause: true
    });
    $("#popover1").popover({
        html: true,
        placement: 'top',
        content: function() {
            return $("#popover_content1").html();
        }
    });
    $("#popover2").popover({
        html: true,
        placement: 'bottom',
        content: function() {
            return $("#popover_content2").html();
        }
    });
    $("#popover3").popover({
        html: true,
        placement: 'top',
        content: function() {
            return $("#popover_content3").html();
        }
    });
    if (wWidth > 767) {
        $('#list_view').on('click', function() {
            $("#product_gallery_v2").addClass('list_view');
            $("#grid_view").removeClass('active');
            $(this).addClass('active');
        });
        $('#grid_view').on('click', function() {
            $("#product_gallery_v2").removeClass('list_view');
            $("#list_view").removeClass('active');
            $(this).addClass('active');
        });
    }
    main_wind.on('scroll', function() {
        var consultScroll = $('.scroll_top');
        if ($(this).scrollTop() > 500) {
            consultScroll.fadeIn();
            consultScroll.removeClass('not_visible');
        } else {
            consultScroll.fadeOut();
        }
    });
    var goScroll = $('.scroll_top');
    goScroll.on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    $(document).ready(function() {
        $('.fancybox').fancybox();
    });
}(jQuery));
jQuery(document).ready(function($) {
    $("#contact-form").validate({
        rules: {
            name: "required",
            last: "required",
            age: "required",
            phone: "required",
            message: "required",
            country: "required",
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                number: true,
                minlength: 10,
            }
        },
        messages: {
            name: "Please enter your name",
            comment: "Please enter message",
            email: "Please enter a valid email address",
            country: "Please enter city",
            last: "Please enter your Last Name",
            age: "Please enter your Age",
            phone: {
                required: "Please enter a valid mobile no.",
                number: "Mobile No. contains only numbers",
                minlength: "Your Mobile No. must be at least 10 characters long",
            }
        },
    });
});
 
 
 