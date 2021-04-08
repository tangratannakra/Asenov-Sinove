const scrollTopBtn = document.querySelector('.scroll-top');
const menu = document.getElementById('top');
const screenY = window.innerHeight;
const screenX = window.innerWidth;


window.addEventListener('scroll', _.throttle(onScroll, 700), false);
scrollTopBtn.addEventListener('click', scrollToTop);

function scrollToTop()  {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  }

function onScroll() {
    if (window.pageYOffset > screenY){
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
  console.log(entries);
  
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('lazy-load');
      entry.target.classList.add('lazy-load-off');
    }
  });
}

const observer = new IntersectionObserver(lazyLoad);

[...lazyEl].map( el => {
    observer.observe(el);
    });