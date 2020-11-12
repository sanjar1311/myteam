var burgerBtn = document.querySelector('.burger');
var siteHeader = document.querySelector('.site-header');

burgerBtn.addEventListener('click', function(){
  siteHeader.classList.toggle('site-header--open')
})


/*   about-section */

var directList = document.querySelector('.directors__list');

var toggler = document.querySelector('.director__btn');

toggler.addEventListener('click', function(){
  directList.classList.toggle('directors__open');
});

toggler.addEventListener('click', function(){
  toggler.classList.toggle('director__btn--close');
});