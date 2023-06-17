const menuBtn = document.querySelector('.menu-btn');
const navlinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu');
})
// sliding secrion;
const images=document.querySelectorAll('.diva img');

let current=0;
images[current].style.display='block';
function next() {
  images[current].style.display='none';
  current=(current+1) % images.length;
  images[current].style.display='block';
}
function prev() {
  images[current].style.display='none';
  current=(current-1+images.length) % images.length;
  images[current].style.display='block';
}
