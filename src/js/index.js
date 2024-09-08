let iconBurger = document.querySelector("#icon-burger");
let nav = document.querySelector("#nav-primary");

iconBurger.addEventListener('click', function(){
  if (nav.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-active');
  } else {
    nav.classList.add('is-active'); 
    this.setAttribute('aria-expanded', 'true');
  }
});