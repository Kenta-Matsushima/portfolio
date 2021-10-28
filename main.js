
/*------- nav menu -------------*/ 
const navMenu = document.querySelector('.nav-menu');
const navMenuOpenBtn = document.querySelector('#nav-open');
const navMenuCloseBtn = document.querySelector('#nav-close');
const navItems = document.querySelectorAll('.nav-menu-item')

navMenuOpenBtn.addEventListener('click', navOpen);
navMenuCloseBtn.addEventListener('click', navClose);

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', navClose);
}

function navOpen(){
    navMenu.classList.add('open');   
}

function navClose(){
    navMenu.classList.remove('open');
}




/*---------- scroll ---------------------*/ 
const targetEl = document.querySelectorAll('.animation-target');

const cb = function (el, isIntersecting) {
  if(isIntersecting) {
      el.classList.add('inview');
  }
} 　

const so = new ScrollObserver('.animation', cb);

