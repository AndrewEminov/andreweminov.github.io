var exch = document.querySelector(".head__paragraph-info");
if (matchMedia) {
  const mq = window.matchMedia("(max-width: 760px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}
// media query change
function WidthChange(mq) {
  if (mq.matches) {
    exch.innerHTML = "JUNIOR FRONT-END DEVELOPER";
    exch.style.padding = "0 0 20px 20px";
    }
}
// for min-width480 - max-width768
var menuElem = document.querySelector('.head__menu-for-mobile');
var titleElem = menuElem.querySelector('.head__link-for-mobile--contact');
var titleElem2 = menuElem.querySelector('.head__link-for-mobile--reference');
var titleElem3 = menuElem.querySelector('.head__link-for-mobile--skill');
var short = menuElem.classList;
titleElem.onclick = function() {
  if((short.contains('VisibleSecond') || short.contains('VisibleThird')) === true){
    short.remove('VisibleSecond');
    short.remove('VisibleThird');
  }
  short.toggle('VisibleFirst');
 };
titleElem2.onclick = function() {
  if((short.contains('VisibleFirst') || short.remove('VisibleThird')) === true){
    short.remove('VisibleThird');
    short.toggle('VisibleFirst');
  }
  short.toggle('VisibleSecond');
};
titleElem3.onclick = function() {
  if((short.contains('VisibleFirst') || short.contains('VisibleSecond')) === true){
    short.remove('VisibleFirst');
    short.remove('VisibleSecond');
  }
  short.toggle('VisibleThird');
};
// for max-width480
function clickFor480() {
  var menuElem = document.querySelector('.content__menu-for-mobile');
  var titleElem = menuElem.querySelector('.content__link-for-mobile--reference');
  var titleElem2 = menuElem.querySelector('.content__link-for-mobile--education');
  var titleElem3 = menuElem.querySelector('.content__link-for-mobile--experience');
  var titleElem4 = menuElem.querySelector('.content__link-for-mobile--skill');
  var titleElem5 = menuElem.querySelector('.content__link-for-mobile--contact');
  var short = menuElem.classList;
  titleElem.onclick = function() {
    short.toggle('VisibleFirst');
  };
  titleElem2.onclick = function() {
    short.toggle('VisibleSecond');
  };
  titleElem3.onclick = function() {
    short.toggle('VisibleThird');
  };
  titleElem4.onclick = function() {
    short.toggle('VisibleFourth');
  };
  titleElem5.onclick = function() {
    short.toggle('VisibleFifth');
  };
}
clickFor480();
