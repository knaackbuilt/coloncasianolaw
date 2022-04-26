document.addEventListener('DOMContentLoaded', function() {

// Global Nav Menu Interactions
const mobilemenu = document.getElementById('mobile-menu');
const mobileicon = document.getElementById('mobile-icon');
const menu = document.getElementById('list-menu');
const lastli = menu.lastElementChild;
console.log(mobileicon)
lastli.addEventListener("focusout", mobiletoggle) 
mobilemenu.addEventListener("click", mobiletoggle)
mobileicon.addEventListener("click", mobiletoggle)


function mobiletoggle () {
    if (menu.classList.contains("hidden")) {
        menu.classList.toggle("hidden")
        menu.classList.add("flex")
        mobilemenu.setAttribute('aria-expanded', true)
    }
    else {
        menu.classList.toggle("hidden")
        mobilemenu.setAttribute('aria-expanded', false)
    } 
}
document.addEventListener('click', function(e) {
    if (e.target.classList.contains("mobile-button")) {
    }
    else {
    menu.classList.add("hidden");
    mobilemenu.setAttribute('aria-expanded', false);
    }
    e.stopPropagation();
});

})// end anon function for pageload

