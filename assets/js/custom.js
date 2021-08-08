jQuery("#unice-screenshot").owlCarousel({
    items: 3,
    margin: 10,
    autoHeight: true,
    nav: false,
    autoplay: false,
    center: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    dots: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 1
        },

        1024: {
            items: 3
        },
    }
});


/*==================
    Unique Price
===================*/
jQuery("#unice-pricing").owlCarousel({
    items: 3,
    margin: 0,
    autoHeight: true,
    nav: false,
    autoplay: false,
    center: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    dots: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 1
        },

        1024: {
            items: 3
        },

        1366: {
            items: 3
        }
    }
});
/*==================
    Testimonial
===================*/


$('#unice-testimonial').owlCarousel({
    items: 1,
    margin: 0,
    autoHeight: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsiveClass: true,
    responsive: {
        0: {
            nav: false
        },
        600: {
            nav: true
        }
    }

});

/*==================
    Our Partner
===================*/

$('.unice-partner').owlCarousel({
    loop: true,
    autoHeight: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-arrow-circle-left'></i>", "<i class='fa fa-arrow-circle-right'></i>"],
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    margin: 100,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: true,
        }
    }
})