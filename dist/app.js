
function opennav() {
    document.getElementById("navbar").classList.toggle("!left-[0%]");
    document.body.classList.toggle("overflow-hidden");
}

$('.slider_card').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    prevArrow: '.back',
    nextArrow: '.next',

});

function navtabs(tabs) {
    const tablets = document.querySelectorAll('.tablets')
    const tbbtn = document.querySelectorAll('.tabs button')
    tablets.forEach(content => {
        content.style.display = 'none'
    })
    tbbtn.forEach(content => {
        content.classList.remove('bg-blue-800')
        content.classList.remove('text-white')
    })
    const selectshow = document.getElementById(tabs)
    selectshow.style.display = 'block'

    const activetab = document.querySelector(`button[onclick = "navtabs('${tabs}')"]`)
    activetab.classList.add("bg-blue-800")
    activetab.classList.add("text-white")
    activetab.classList.add("duration-300")

}
navtabs('tab1')
var toTopButton = document.getElementById("to-top-button");
if (toTopButton) {
    window.onscroll = function () {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            toTopButton.classList.remove("hidden");
        } else {
            toTopButton.classList.add("hidden");
        }
    };
    window.goToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}