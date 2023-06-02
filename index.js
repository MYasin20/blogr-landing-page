const navLinks = document.querySelectorAll('.nav-links');
const navLists = document.querySelector('.nav-lists');
const orderedLists = document.querySelectorAll('.nav-ordered-lists');
const arrowLight = document.querySelectorAll('.nav-icon-arrow');
const arrowDark = document.querySelectorAll('.nav-icon-arrow-dark');
const burgerMenu = document.querySelector('.hamburger');
const burgerOpen = document.querySelector('.hamburger-menu');
const burgerClose = document.querySelector('.hamburger-close');

console.log(window.innerWidth)

burgerMenu.addEventListener('click', function() {
  if(navLists.classList.contains('open')) {
    navLists.classList.remove('open');
    burgerOpen.classList.remove('closed');
    burgerClose.classList.toggle('open');
  } else {
    navLists.classList.add('open');
    burgerOpen.classList.add('closed');
    burgerClose.classList.toggle('open');
  }
});

for(let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function() {
    if(orderedLists[i].classList.contains('open')) {
      orderedLists[i].classList.toggle('open');
      arrowLight[i].classList.toggle('active');
      arrowDark[i].classList.toggle('active');
    } else {
      for(let j = 0; j < navLinks.length; j++) {
        // navLinks[i].textContent === navLinks[j].textContent && 
        if(navLinks[i].isEqualNode(navLinks[j])) {
          orderedLists[j].classList.toggle('open');
          arrowLight[j].classList.toggle('active');
          arrowDark[j].classList.toggle('active');
        } else {
          orderedLists[j].classList.remove('open');
          arrowLight[j].classList.remove('active');
          arrowDark[j].classList.remove('active');
        }
      }
    }
    })
}
