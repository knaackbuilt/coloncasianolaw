document.addEventListener('DOMContentLoaded', function() {

// Global Nav Menu Interactions
const mobilemenu = document.getElementById('mobile-menu');
const menu = document.getElementById('list-menu');
const lastli = menu.lastElementChild;
console.log(lastli)
lastli.addEventListener("focusout", mobiletoggle) // last list item on focusout closes menu
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
    if (e.target.classList.contains("mobile-button")) {
    }
    else {
    menu.classList.add("hidden");
    mobilemenu.setAttribute('aria-expanded', false);
    }
    e.stopPropagation();
});

})// end anon function for pageload

