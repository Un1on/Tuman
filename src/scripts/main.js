let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Preloader
$(window).on('load', (function () {
    $('.preloader').fadeOut(500);
}));
// END Preloader


jQuery(document).ready(function () {
    $('.newsSlider__instance').flickity({
        prevNextButtons: false,
        contain: true,
        cellAlign: 'left'
    });

    $('.org-tournament__slider').flickity({
        pageDots: false,
        //adaptiveHeight: true,
        contain: true,
        cellAlign: 'left',
        initialIndex: 2
    });

    $('.newsSlider__navigation .navigation').click(function () {
        if ($(this).hasClass('prev')) {
            $('.newsSlider__instance').flickity('previous');
        }

        if ($(this).hasClass('next')) {
            $('.newsSlider__instance').flickity('next');
        }
    });

    $('.newsPageSingle__related--slider').flickity({
        prevNextButtons: false,
        contain: true,
        cellAlign: 'left',
        pageDots: false
    });

    $('.newsPageSingle__related .newsPageSingle__btn').click(function () {
        if ($(this).hasClass('prev')) {
            $('.newsPageSingle__related--slider').flickity('previous');
        }

        if ($(this).hasClass('next')) {
            $('.newsPageSingle__related--slider').flickity('next');
        }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > $('.header').outerHeight()) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });



    $('.banner__btn').click(function () {
        $('.banner__popup, .tournamentPage-overlay').addClass('active');
    });
    $('.tournamentPage-overlay').click(function () {
        $('.banner__popup, .tournamentPage-overlay').removeClass('active');
    });




    if ($(window).scrollTop() > $('.header').outerHeight()) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }

    $('.footer__arrowUp').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('.specialTxt__mobile--btn').click(function () {
        $(this).toggleClass('open');
        $(this).siblings('.specialTxt__mobile-toggledContent').slideToggle(300);
    });

    $('.footerSpecialMenu__list--item .dropMenuToggler').click(function () {
        $(this).toggleClass('open');
        $(this).siblings('.dropMenuItems').slideToggle(300);
    });

    $('.mobileMenuToggler, .modalMenu__close').click(function () {
        if (!$('.modalMenu').hasClass('open')) {
            $('.modalMenu').toggleClass('open');
            $.scrollLock(true);
        } else {
            $('.modalMenu').toggleClass('open');
            $.scrollLock(false);
        }
    });

    // var timeout;
    // $('.heroSection__parallax-scene:not(.mobile)').mousemove(function (e) {
    //     if (timeout) clearTimeout(timeout);
    //     setTimeout(callParallax.bind(null, e), 200);
    // });

    // function callParallax(e) {
    //     parallaxIt(e, '.parallax_figure.parallax_figure_bg', 5);

    //     parallaxIt(e, '.parallax_figure.parallax_figure_1', -10);
    //     parallaxIt(e, '.parallax_figure.parallax_figure_2', -25);
    //     parallaxIt(e, '.parallax_figure.parallax_figure_3', 25);

    //     parallaxIt(e, '.parallax_figure.parallax_figure_4', -20);
    //     parallaxIt(e, '.parallax_figure.parallax_figure_5', -25);
    //     parallaxIt(e, '.parallax_figure.parallax_figure_6', -15);

    //     parallaxIt(e, '.parallax_figure.parallax_figure_7', 50);
    //     parallaxIt(e, '.parallax_figure.parallax_figure_8', 10);
    //     parallaxIt(e, '.parallax_figure.parallax_figure_9', 15);

    //     parallaxIt(e, '.parallax_figure.parallax_figure_10', 35);
    //     parallaxIt(e, '.parallax_figure.parallax_figure_11', 25);
    //     parallaxIt(e, '.parallax_figure.parallax_figure_12', -25);
    // }

    // function parallaxIt(e, target, movement) {
    //     var $this = $('.heroSection__parallax-scene');
    //     var relX = e.pageX - $this.offset().left;
    //     var relY = e.pageY - $this.offset().top;

    //     TweenMax.to(target, 1, {
    //         x: (relX - $this.width() / 2) / $this.width() * movement,
    //         y: (relY - $this.height() / 2) / $this.height() * movement,
    //         ease: Power2.easeOut
    //     })
    // }

    function myFunction(element) {
        var elements = ".dropdown-content";
        $(elements).removeClass('show');
        $(element).next(elements).toggleClass("show");
    }

    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    $('.niceSelect').niceSelect();

    $('.tooltipster').tooltipster({
        theme: 'tooltipster-borderless',
        maxWidth: 400,
        trigger: ('ontouchstart' in window) ? 'click' : 'hover'
    });

    $('.overlayScrollbars').overlayScrollbars({
        className: 'os-theme-light'
    });

    // Popup Bonus
    $('.btnPopupBonus').on('click ontouchstart', function (e) {
        e.preventDefault();

        $('html').addClass('overflowHidden');

        $('#popupBonus').stop().fadeToggle();
    });

    $(document).on('mouseup ontouchstart', function (e) {
        var el = $('#popupBonus .popupBonus__content, .sideBar');
        if (!el.is(e.target) && el.has(e.target).length === 0) {
            $('#popupBonus').stop().fadeOut(0);

            $('html').removeClass('overflowHidden');
        }
    });
    // END Popup Bonus

    // Popup Feedback sent
    $('.popupFeedbackSent .basicBtn').on('click ontouchstart', function (e) {
        e.preventDefault();

        $('#popupFeedbackSent').stop().fadeOut();
    });
    // END Popup Feedback sent

    // Popup Show all
    $('.showAll').on('click ontouchstart', function (e) {
        e.preventDefault();
        $(this).siblings('.showAll__popup').stop().fadeToggle();
    });

    $(document).on('mouseup ontouchstart', function (e) {
        var el = $('.showAll__popup');
        if (!el.is(e.target) && el.has(e.target).length === 0) {
            $('.showAll__popup').stop().fadeOut();
        }
    });
    // END Popup Show all

    // Accordion block
    $('.accordion').each(function () {
        var $accordion = $(this);

        $accordion.find('.accordion__item--header').on('click ontouchstart', function () {
            $(this).toggleClass('isOpen');
            $(this).next().stop().slideToggle();
        });
    });
    // END Accordion block

    // ionRangeSlider
    var $ratingRange = $('#rating-range'),
        $ratingRangeValue = $('#rating-range-value'),
        ratingMin = 0,
        ratingMax = 10,

        $limitRange = $('#limit-range'),
        $limitRangeValue = $('#limit-range-value'),
        limitMin = 0,
        limitMax = 10000,

        $timeRange = $('#time-range'),
        $timeRangeValue = $('#time-range-value'),
        timeMin = 0,
        timeMax = 96;

    $ratingRange.ionRangeSlider({
        hide_min_max: true,
        hide_from_to: true,
        min: ratingMin,
        max: ratingMax,
        onStart: updateRating,
        onChange: updateRating
    });

    $limitRange.ionRangeSlider({
        hide_min_max: true,
        hide_from_to: true,
        min: limitMin,
        max: limitMax,
        onStart: updateLimit,
        onChange: updateLimit
    });

    $timeRange.ionRangeSlider({
        hide_min_max: true,
        hide_from_to: true,
        min: timeMin,
        max: timeMax,
        onStart: updateTime,
        onChange: updateTime
    });
    ratingData = $ratingRange.data('ionRangeSlider');
    limitData = $limitRange.data('ionRangeSlider');
    timeData = $timeRange.data('ionRangeSlider');

    function updateRating(data) {
        from = data.from;

        $ratingRangeValue.prop('value', from);
    }

    function updateLimit(data) {
        from = data.from;

        $limitRangeValue.prop('value', from);
    }

    function updateTime(data) {
        from = data.from;

        $timeRangeValue.prop('value', from);
    }

    $ratingRangeValue.on('change', function () {
        var val = $(this).prop('value');

        if (val < ratingMin) {
            val = ratingMin;
        } else if (val > ratingMax) {
            val = ratingMax;
        }

        ratingData.update({
            from: val
        });

        $(this).prop('value', val);
    });

    $limitRangeValue.on('change', function () {
        var val = $(this).prop('value');

        if (val < limitMin) {
            val = limitMin;
        } else if (val > limitMax) {
            val = limitMax;
        }

        limitData.update({
            from: val
        });

        $(this).prop('value', val);
    });

    $timeRangeValue.on('change', function () {
        var val = $(this).prop('value');

        if (val < timeMin) {
            val = timeMin;
        } else if (val > timeMax) {
            val = timeMax;
        }

        timeData.update({
            from: val
        });

        $(this).prop('value', val);
    });
    // END ionRangeSlider

    // Lang Show all
    $('.langItem__allLang--btn').on('click ontouchstart', function (e) {
        e.preventDefault();
        $(this).siblings('.langItem__allLang--list').stop().fadeIn(100);
        $(this).parent().addClass('isOpen');
    });

    $(document).on('mouseup ontouchstart', function (e) {
        var el = $('.langItem__allLang--list');
        if (!el.is(e.target) && el.has(e.target).length === 0) {
            el.stop().fadeOut(100);
            el.parent().removeClass('isOpen');
        }
    });
    // END Lang Show all

    // FAQ accordion
    $('.faqPage__item .title').click(function () {
        var _this = $(this);
        var prnt = _this.parent();

        if (!prnt.hasClass('open')) {
            prnt.addClass('open');
            prnt.find('.hiddenTxt').slideDown(600);
        } else {
            prnt.removeClass('open');
            prnt.find('.hiddenTxt').slideUp(600);

        }

    });
    // END Faq accordion

    // Rating
    $('.starRating').on('click ontouchstart', '.starRating__label', function () {
        if (!$(this).hasClass('checked')) {
            $('.starRating .starRating__label').removeClass('checked');
            $(this).addClass('checked');
        } else {
            $(this).removeClass('checked');
            $(this).find('input').prop('checked', false);
        }
    });
    // END Rating

    // Popup filter
    $('.btnFilterOpen').on('click ontouchstart', function (e) {
        e.preventDefault();

        $('html').addClass('overflowHidden');

        $('.sideBar').addClass('isOpen');
    });

    $('.btnFilterClose').on('click ontouchstart', function (e) {
        e.preventDefault();

        $('html').removeClass('overflowHidden');

        $('.sideBar').removeClass('isOpen');
    });
    // END Popup filter

    // Free slot single slider

    var similarSlots = $('.pageFreeSlotSingle__similar--slider').flickity({
        prevNextButtons: true, //required
        contain: true,
        cellAlign: 'left',
        pageDots: false,
        groupCells: true //required
    });

    $('.pageFreeSlotSingle__similar .newsPageSingle__btn').click(function () {
        if ($(this).hasClass('prev')) {
            similarSlots.flickity('previous');
        }

        if ($(this).hasClass('next')) {
            similarSlots.flickity('next');
        }
    });

    if ($('.pageFreeSlotSingle__similar .flickity-prev-next-button.previous').is(':disabled') && $('.pageFreeSlotSingle__similar .flickity-prev-next-button.next').is(':disabled')) {
        $('.pageFreeSlotSingle__similar .newsPageSingle__navs').addClass('hiddenNav');
    }

    var fromDev = $('.pageFreeSlotSingle__fromDev--slider').flickity({
        prevNextButtons: true, //required
        contain: true,
        cellAlign: 'left',
        pageDots: false,
        groupCells: true //required
    });

    $('.pageFreeSlotSingle__fromDev .newsPageSingle__btn').click(function () {
        if ($(this).hasClass('prev')) {
            fromDev.flickity('previous');
        }

        if ($(this).hasClass('next')) {
            fromDev.flickity('next');
        }
    });

    if ($('.pageFreeSlotSingle__fromDev .flickity-prev-next-button.previous').is(':disabled') && $('.pageFreeSlotSingle__fromDev .flickity-prev-next-button.next').is(':disabled')) {
        $('.pageFreeSlotSingle__fromDev .newsPageSingle__navs').addClass('hiddenNav');
    }

    // END Free slot single slider

    // Advnt free slots mobile slider
    if ($(window).innerWidth() < 560) {
        var advntSlider = $('.pageFreeSlotSingle .infoItems').flickity({
            prevNextButtons: false,
            contain: true,
            cellAlign: 'left',
            pageDots: false
        });

        var gamesCategoriesSlider = $('.pageFreeSlotSingle .infoMobileHide .gamesCategories__items').flickity({
            prevNextButtons: false,
            contain: true,
            cellAlign: 'left',
            pageDots: false
        });
    }
    // end


    // slots frame show 
    $('.play_show').click(function () {
        $('.game-wrapper').addClass('active');
    });
    // slots frame show 

    // fullscreen game 
    $('.fullscreen').click(function () {
        $('.pageFreeSlotSingle__game').addClass('fullscreen_game');
    });
    // fullscreen game 


    // cst - card parallax
    $('.cst-card_bgblock').mouseenter(function () {
        $('.parallax-card--main').addClass('parallax_desc');
    });

    $('.cst-card_bgblock').mouseleave(function () {
        $('.parallax-card--main').removeClass('parallax_desc');
    });
    // cst - card parallax


    // hidden search
    $('.inpt').click(function () {
        $('.heroSection__search').toggleClass('show');
    });
    // hidden search



    // fullscreen game escape
    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $('.pageFreeSlotSingle__game').removeClass('fullscreen_game');
        }
    });
    // fullscreen game escape

    // parallax mobile scripts

    // $(window).resize(function () {
    //     if ($(window).width() < 800) {
    //         $('.parallax_img').addClass('mobile');
    //     } else {
    //         $('.parallax_img').removeClass('mobile');
    //     }
    // });

    if ($(window).width() < 800) {
        $('.parallax_img').addClass('mobile');
    } else {
        $('.parallax_img').removeClass('mobile');
    }

    // parallax mobile  script

});


const openPopUp = document.querySelectorAll('.addit-info-wrapper');
for (item of openPopUp) {
    item.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            for (el of openPopUp) {
                el.classList.remove('active');
            }
            this.classList.add('active');
        }
    })
}






// timer  show

// parallax script

if ($(window).width() > 950) {

    document.addEventListener("mousemove", parallax);

    function parallax(e) {
        this.querySelectorAll('.parallax_desc').forEach(layer => {
            const speed = layer.getAttribute('data-speed');

            const x = (window.innerWidth - e.pageX * speed) / 300;

            const y = (window.innerHeight - e.pageY * speed) / 300;

            layer.style.transform = ` translateX(${x}px) translateY(${y}px) `
        });

    }


}
// parallax script

//single tournament page accordion 
const winnerBtn = document.querySelector('.winners__btn');
const winnersList = document.querySelector('.winners__body');

winnerBtn.addEventListener('click', () => {
    winnersList.classList.toggle('winners__body-open');
});


//copy to clipbord

function CopyToClipboard(containerid) {
    let range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range); 
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}