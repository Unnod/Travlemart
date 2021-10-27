$(function () {

    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        adaptiveHeight: true,
        prevArrow: '<button class="slick-arrow prev-arrow icon-arrow_back_ios" ></button>',
        nextArrow: '<button class="slick-arrow next-arrow icon-arrow_forward_ios" ></button>',
    });

    var counter = $('.reviews__counter span');

    $('.reviews__slider').on('afterChange', function () {
        counter.text($('.reviews__slider').slick('slickCurrentSlide') + 1);
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('.header__menu').addClass('fixed');
        }
        else {
            $('.header__menu').removeClass('fixed');
        }
    });



    $(document).mouseup(function (e) {
        var div = $("#modal");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('html').removeClass('noscroll');
        }
    });

    $('.fancybox-button').hover(function () {
        $('html').removeClass('noscroll');
    })


    $(document).ready(function () {
        $(".gal-1").fancybox({
            animationEffect: 'zoom',
            transitionEffect: "circular",
            transitionDuration: 366,
        });
    });

    $(document).ready(function () {
        $(".gal-3").fancybox({
            animationEffect: 'zoom',
            transitionEffect: "slide",
            transitionDuration: 700,
        });
    });

    $(document).ready(function () {
        $(".gal-2").fancybox({
            animationEffect: 'zoom',
            transitionEffect: "circular",
            transitionDuration: 366,
        });
    });

    $('.services-menu li').hover(function () {
        $(this).toggleClass('active');
    });

    $('.services-box').hover(function () {
        $('.services-menu').slideToggle('active');
    })

    $('.menu-btn').on('click', function () {
        $('.wrapper').toggleClass('active');
        $('.menu-list').toggleClass('active');
        $('.menu-close').toggleClass('active');
        $('.menu-open').toggleClass('active');
    });

    $('.footer__col-title').on('click', function () {
        var id = $(this).attr('data-id');
        $(this).toggleClass('active');
        $('#' + id).slideToggle('active');
    });

    var menu;


    new Vivus(
        'test',
        {
            type: 'delayed',
            duration: 300,
            animTimingFunction: Vivus.EASE
        },
    );

    new Vivus(
        'test2',
        {
            type: 'delayed',
            duration: 300,
            animTimingFunction: Vivus.EASE
        },
    );

    new Vivus(
        'test3',
        {
            type: 'delayed',
            duration: 300,
            animTimingFunction: Vivus.EASE
        },
    );

    $('.advantages__busines-title').on('click', function () {
        var data = $(this).attr('data-id');
        $('.advantages__busines-title').removeClass('active');
        $('.advantages__busines-content').removeClass('active-tab').hide();
        $(this).addClass('active');
        $('#' + data).addClass('active-tab').fadeIn();
    });

    function initMap() {
        var coordinates = { lat: 55.442325, lng: 37.393663 },
            map = new google.maps.Map(document.getElementById('map'), {
                center: coordinates
            });
    }

    (function () {
        var originalAddClassMethod = jQuery.fn.addClass;
        var originalRemoveClassMethod = jQuery.fn.removeClass;
        jQuery.fn.addClass = function () {
            var result = originalAddClassMethod.apply(this, arguments);
            jQuery(this).trigger('classChanged');
            return result;
        }
        jQuery.fn.removeClass = function () {
            var result = originalRemoveClassMethod.apply(this, arguments);
            jQuery(this).trigger('classChanged');
            return result;
        }
    })();


    jQuery('body').bind('classChanged', function () {
        if ($('body').hasClass('fancybox-active')) {
            $('html').addClass('noscroll');
        } else {
            $('html').removeClass('noscroll')
        }
    });






});