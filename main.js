var burgerBtn = document.querySelector('.burger');
var siteHeader = document.querySelector('.site-header');

burgerBtn.addEventListener('click', function(){
  siteHeader.classList.toggle('site-header--open');
});

burgerBtn.addEventListener('click', function() {
  burgerBtn.classList.toggle('burger-close');
});


/*   about-section */

var elToggler = document.querySelectorAll('.director__btn');
var directList = document.querySelectorAll('.director');

elToggler.forEach(function(togglercha, raqam) {
    togglercha.addEventListener('click', function(){
      var chackedItem = document.querySelector('.director--open');

      directList[raqam].classList.toggle('director--open');
    });

    togglercha.addEventListener('click', function(){
      elToggler[raqam].classList.toggle('director__btn--close');
    });
});
