var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;

    //Ao scrollar, se o elemento está com a classe 'active', removê-lo 
    if (navLinks.classList.contains('active') == true) {
        navLinks.classList.toggle('active')
    }
}