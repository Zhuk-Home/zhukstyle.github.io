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
  // TODO Arrows Bounse Start

  $(".arrow_block").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault(); //забираем идентификатор бока с атрибута href

    var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top; //анимируем переход на расстояние - top за 1500 мс

    $('body,html').animate({
      scrollTop: top
    }, 1500);
  }); // TODO Arrows Bounse End
  // TODO Header Mobile Start

  $('#burger').on('click', function () {
    $('.burger_block').toggleClass('active');
    $('.main').toggleClass('menu_active');
    $('body').toggleClass('lock');
  }); // TODO Header Mobile End
  //  TODO Bubble Buttob Start

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
});