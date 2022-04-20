document.addEventListener('DOMContentLoaded', function() {

// Global Nav Menu Interactions
const mobilemenu = document.getElementById('nysds-mobile-menu');
const menu = document.getElementById('nysds-list-menu');
const submenubutton = document.getElementsByClassName('nysds-submenu-button');
const submenulink = document.getElementsByClassName('nysds-submenu-link');
const submenu = document.getElementsByClassName('nysds-submenu');
const submenuarr = Array.from(submenu);
const submenubuttonarr = Array.from(submenubutton);
const submenulinkarr = Array.from(submenulink);

mobilemenu.addEventListener("click", mobiletoggle) //mobile menu show hide and aria-expanded
function mobiletoggle () {
    if (menu.classList.contains("hidden")) {
        menu.classList.toggle("hidden")
        mobilemenu.setAttribute('aria-expanded', true)
    }
    else {
        menu.classList.toggle("hidden")
        mobilemenu.setAttribute('aria-expanded', false)
    } 
}
document.addEventListener('click', function(e) {
    if (e.target.classList.contains("nysds-mobile-button")) {
    }
    else {
    menu.classList.add("hidden");
    mobilemenu.setAttribute('aria-expanded', false);
    }
    e.stopPropagation();
});




for (let i = 0; i < submenuarr.length, i < submenubuttonarr.length  ; i++) {
   submenubuttonarr[i].addEventListener("click", subtoggle ); //submenu show hides and aria expanded
   const sublist = submenuarr[i];
   const lastli = sublist.lastElementChild;
   console.log(lastli)
   lastli.addEventListener("focusout", subtoggle) // last list item on focusout closes menu
    function subtoggle() {
        if (submenuarr[i].classList.contains("hidden")) {
            submenuarr[i].classList.toggle("hidden");
            submenubuttonarr[i].setAttribute('aria-expanded', true)
        }
        else {
            submenuarr[i].classList.toggle("hidden");
            submenubuttonarr[i].setAttribute('aria-expanded', false)
        }
        }

        // click anywhere else closes menus
        document.addEventListener('click', function(e) {
            if (e.target === submenubuttonarr[i]) {
            } else {
              submenuarr[i].classList.add("hidden");
              submenubuttonarr[i].setAttribute('aria-expanded', false);
            }
            e.stopPropagation();
          });

        // mobile only menu hides 
        submenubuttonarr[i].addEventListener("click", mobiletoggle);
        function mobiletoggle() {
            if (window.innerWidth < 1024) {
                
                console.log('this is mobile')


            }
            else {
                console.log('this is def not mobile')
            }
        }     
}// end giant for loop for menus


})// end anon function for pageload

