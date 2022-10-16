//TODO: Open & close menu (mobile)
$('.header__menu').on('click', function () {
    $('.header__modal').css('display', 'block');
});

$('.modal__close').on('click', function () {
    $('.header__modal').css('display', 'none');
});

//TODO: Open & close navbar (mobile)
$('.modal__navbar__lists li a').on('click', function () {
    let checkChild = $(this).siblings('.navbarItem__extend');
    // console.log(checkChild);
    let checkChildCss = $(checkChild).css('display');
    if (checkChildCss == 'none') {
        $(checkChild).css('display', 'block');
    }
    else {
        $(checkChild).css('display', 'none');
    }
});