"use strict";

// TODO Анимация текста в хедере / Animation of text in the header
function aaa(selector, interval) {
  var $elems = $(selector);
  $elems.slice(1).hide();
  var elemId = 0;
  return setInterval(function () {
    $elems.eq(elemId).hide();
    elemId = (elemId + 1) % $elems.length;
    $elems.eq(elemId).show();
  }, interval);
}

aaa('.head_block > .head_text_1', 7000); // TODO End Animation

$(document).ready(function () {
  // TODO Preloader
  $(window).on('load', function () {
    $('.preloader').fadeOut().end().delay(4000).fadeOut('slow');
  }); // TODO Preloader End
  // TODO Navigation Start
  // Найти все ссылки начинающиеся на #

  var anchors = document.querySelectorAll('a[href^="#"]'); // Цикл по всем ссылкам

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Предотвратить стандартное поведение ссылок
        // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)

        var _goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'; // Плавная прокрутка до элемента с id = href у ссылки


        document.querySelector(_goto).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    };

    for (var _iterator = anchors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    } // TODO Navigation End
    // TODO Arrows Bounse Start

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  $(".bounse_slide").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault(); //забираем идентификатор бока с атрибута href

    var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top; //анимируем переход на расстояние - top за 1500 мс

    $('body,html').animate({
      scrollTop: top
    }, 2500);
  }); // TODO Arrows Bounse End
  // TODO Header Mobile Start

  $('#burger').on('click', function () {
    $('.burger_block').toggleClass('active');
    $('.main').toggleClass('menu_active');
    $('body').toggleClass('lock');
  }); // TODO Header Mobile End
  //  TODO Bubble Button Start

  $(".button_su_inner").mouseenter(function (e) {
    var parentOffset = $(this).offset();
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({
      "left": relX,
      "top": relY
    });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
  });
  $(".button_su_inner").mouseleave(function (e) {
    var parentOffset = $(this).offset();
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({
      "left": relX,
      "top": relY
    });
    $(this).prev(".su_button_circle").removeClass("explode-circle");
    $(this).prev(".su_button_circle").addClass("desplode-circle");
  }); // TODO Bubble Button End
  //  TODO AOS Start

  AOS.init(); // You can also pass an optional settings object
  // below listed default settings

  AOS.init({
    // Global settings:
    disable: false,
    // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded',
    // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init',
    // class applied after initialization
    animatedClassName: 'aos-animate',
    // class applied on animation
    useClassNames: false,
    // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false,
    // disables automatic mutations' detections (advanced)
    debounceDelay: 50,
    // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99,
    // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100,
    // offset (in px) from the original trigger point
    delay: 0,
    // values from 0 to 3000, with step 50ms
    duration: 800,
    // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out',
    // default easing for AOS animations
    once: false,
    // whether animation should happen only once - while scrolling down
    mirror: false,
    // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

  }); // TODO AOS End
});