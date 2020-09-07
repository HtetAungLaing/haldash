// -------------- Show Hide Mobile Menu ------------------------------ //
$('.menu-show').click(function () {
    $('.menu').animate({
        marginLeft: '0%'
    })
})
$('.menu-hide').click(function () {
    $('.menu').animate({
        marginLeft: '-100%'
    })
})

// -------------------Linking----------------------------------------------//
function go(url) {
    location.href = url;
}


// -----------------------------------Caurosel delay-----------------------------------------//
$('.carousel').carousel({
    interval: 2000
})

// --------------------------------Full---------------------------------------------//
$('.full-btn').click(function () {
    $(this).closest('.card').toggleClass('full-screen');
    if ($('.full-btn i').hasClass('feather-maximize-2')) {
        $('.full-btn i').toggleClass('feather-minimize-2');
    } else {
        $('.full-btn i').toggleClass('feather-maximize-2');
    }
});
let windowH = $(window).height();
let currentH = $('.now').offset().top;
if (currentH > windowH * 0.8) {
    $('.sidebar').animate({
        scrollTop: currentH
    }, 1000);
    console.log('ok')
}