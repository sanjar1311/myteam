var burgerBtn = document.querySelector('.burger');
var siteHeader = document.querySelector('.site-header');

burgerBtn.addEventListener('click', function(){
  siteHeader.classList.toggle('site-header--open')
})