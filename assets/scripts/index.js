const scrollTopBtn = document.querySelector('.scroll-top');
const menu = document.getElementById('top');
const screenY = window.innerHeight;
const cardCTA = document.querySelectorAll('.card__cta');
const contacts = document.getElementById('contacts');
const mainNavItem = document.querySelectorAll('.main-nav__item > a');
const footNavItem = document.querySelectorAll('.footer-nav__item > a');
const menuToggler = document.querySelector('.main-nav__toggler');
const menuTrigger = document.querySelector('.main-nav__trigger');


[...mainNavItem].map( item => item.addEventListener('click', (e)=>{
  scrollToEl.bind(this, e);
    if (window.innerWidth < 992){
      menuTrigger.checked = false;
    }
  }
));

[...footNavItem].map( item => item.addEventListener('click', scrollToEl));
[...cardCTA].map( ctabtn => ctabtn.addEventListener('click', scrollToEl));
scrollTopBtn.addEventListener('click', scrollToEl);
window.addEventListener('scroll', _.throttle(onScroll, 700), false);

//Scroll to ELement
function scrollToEl(e){
  e.preventDefault();

  const itemLink = this.getAttribute("href");
  const scrollToElm = document.querySelector(itemLink);
  const scrollOptions = {
    top: scrollToElm.offsetTop - 100,
    behavior: 'smooth'
  }

  window.scrollTo(scrollOptions);
}



//Show hide Menu and scroll to top btn
function onScroll() {
    if (window.pageYOffset > (screenY - 200) ){
        scrollTopBtn.classList.add('visible');
        menu.classList.add('fixed');
    }
    else{
        scrollTopBtn.classList.remove('visible');
        menu.classList.remove('fixed'); 
    }
}


// Lazy Loading with Intersection Observer
const lazyEl = document.querySelectorAll('.lazy-load'); 
let lazyLoad = (entries) => {
  
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('lazy-load');
      entry.target.classList.add('lazy-load-off');  
    }
  });
}

const lazyObserver = new IntersectionObserver(lazyLoad);
[...lazyEl].map( el => lazyObserver.observe(el));
