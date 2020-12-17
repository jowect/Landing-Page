/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/
/**
 * Define Global Variables
 *
*/
const navi = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

const inview = function (element) {
  const box = element.getBoundingClientRect();
  return (
    box.top >= 0
    && box.left >= 0
    && box.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    && box.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
/**
 * End Global Variables
 * Begin Main Functions
 *
*/
// build the nav
function createnav() {
  for (const i of sections) {
    const listitem = document.createElement('li');
    listitem.id = `navi_${i.id}`;
    listitem.dataset.nav = i.dataset.nav;
    listitem.className = 'menu__link';
    const link = document.createElement('a');
    // link.href = '#'+i.id;
    link.innerText = i.dataset.nav;
    listitem.appendChild(link);
    navi.appendChild(listitem);
    listitem.addEventListener('click', () => {
      i.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
// Add class 'active' to section when near top of viewport
function secactive() {
  for (const i of sections) {
    window.addEventListener('scroll', (e) => {
      e.preventDefault();
      if (inview(i)) {
        i.classList.add('your-active-class');
      } else {
        i.classList.remove('your-active-class');
      }
    });
  }
}
/**
 * End Main Functions
 * Begin Events
 *
*/
// Build menu
createnav();
// Set sections as active
secactive();
