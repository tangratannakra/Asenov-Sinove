const scrollTopBtn = document.querySelector('.scroll-top');
const menu = document.getElementById('top');
const screenY = window.innerHeight;



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






