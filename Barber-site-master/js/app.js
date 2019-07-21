// navbar handlers

const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
 if (window.pageYOffset > '100') {
  header.classList.add('active')
 } else {
  header.classList.remove('active')
 }
})

if (window.pageYOffset > '100') {
 header.classList.add('active')
} else {
 header.classList.remove('active')
}

// scroll to section

let links = document.querySelectorAll('.link-navbar');

links.forEach(link => {
 link.addEventListener('click', (e) => {
  let id = link.getAttribute('href');
  e.preventDefault()
  // scroll to section
  window.scrollTo({
   top: document.querySelector('#' + id).offsetTop,
   behavior: 'smooth'
  })
 })
});

// scroll to top

const scrollToTop = document.querySelector('#scrollToTop');

scrollToTop.addEventListener('click', (e) => {
 let id = scrollToTop.getAttribute('href');
 e.preventDefault()
 // scroll to section
 window.scrollTo({
  top: 0,
  behavior: 'smooth'
 })
})

window.addEventListener('scroll', () => {
 if (window.pageYOffset > '400') {
  scrollToTop.style.opacity = 1
 } else {
  scrollToTop.style.opacity = 0
 }
})

if (window.pageYOffset > '400') {
 scrollToTop.style.opacity = 1
} else {
 scrollToTop.style.opacity = 0
}

// sidebar close on a-tag click

let sidebarLinks = document.querySelectorAll('.uk-offcanvas-bar .link-navbar');
const offcanvas = document.querySelector('.uk-offcanvas');

sidebarLinks.forEach(sidebarLink => {
 sidebarLink.addEventListener('click', (e)=>{
  e.preventDefault();
  UIkit.offcanvas(offcanvas).hide();
 });
});

// datepicker

flatpickr('#datepicker', {
  altInput: true,
  altFormat: "F j, Y",
});