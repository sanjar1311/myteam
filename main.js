var burgerBtn = document.querySelector('.burger');
var siteHeader = document.querySelector('.site-header');

burgerBtn.addEventListener('click', function(){
  siteHeader.classList.toggle('site-header--open');
});

burgerBtn.addEventListener('click', function() {
  burgerBtn.classList.toggle('burger-close');
});


/*   about-section */

var directList = document.querySelector('.director');

var toggler = document.querySelector('.director__btn');

toggler.addEventListener('click', function(){
  directList.classList.toggle('director--open');
});

toggler.addEventListener('click', function(){
  toggler.classList.toggle('director__btn--close');
});