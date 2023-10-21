// COPY MENU  FOR MOBILE
function copyMenu () {

// Copy inside .dpt-cat to departments
var dptCategory = document.querySelector('.dpt-cat');
var dptPlace = document.querySelector('.departments');
dptPlace.innerHTML = dptCategory.innerHTML;

//COPY INSIDE NAV TO NAV

 var mainNav = document.querySelector('.header-nav nav');
 var navPlace = document.querySelector('.off-canvas nav')
 navPlace.innerHTML = mainNav.innerHTML;

//  COPY .HEADER-TOP .WRAPPER TO .THETOP-NAV

var topNav = document.querySelector('.header-top .wrapper');
var topPlace = document.querySelector('.off-canvas .thetop-nav')
topPlace.innerHTML = topNav.innerHTML;


}
copyMenu();


// SHOW SUB MENU ON MOBILE 

const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
  e.preventDefault();
  submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
  if (!this.closest('.has-child').classList !='expand');
  this.closest('.has-child').classList.toggle('expand')
}
