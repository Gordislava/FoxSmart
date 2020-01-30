var acc = document.getElementsByClassName("accordeon");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.lastElementChild;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function openCity(evt, cityName) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tab__link");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();




var oldOrderButton = document.querySelector(".promo__button");
var orderButton = document.querySelectorAll(".js-order-button");
var modalPurchase = document.querySelector(".modal__container");
var modalOverlay = document.querySelector(".modal-form");
var close = document.querySelector(".modal__close-button")

// if (oldOrderButton) {
// orderButton.addEventListener("click", function(evt) {
// evt.preventDefault();
// modalOverlay.classList.remove("visually-hidden");
// });
// }

orderButton.forEach(e =>
e.addEventListener("click", function(evt) {
evt.preventDefault();
modalOverlay.classList.remove("visually-hidden");
})
);

close.addEventListener(
"click",

function(evt) {
if (evt.currentTarget !== evt.target) {
return;
}

modalOverlay.classList.add("visually-hidden");
},
false
);




var formOrderButton = document.querySelectorAll(".js-form-button");
var modalPurchase = document.querySelector(".modal__container");
var modalOverlay = document.querySelector(".modal-info");
var close = document.querySelector(".modal__close-button")



formOrderButton.forEach(e =>
    e.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalOverlay.classList.remove("visually-hidden");
    })
);

close.addEventListener(
"click",

    function(evt) {
        if (evt.currentTarget !== evt.target) {
        return;
    }
    modalOverlay.classList.add("visually-hidden");
    }, false
);

var menuButton = document.querySelector(".header__menu-icon");
var menu = document.querySelector(".header__main-menu");

menuButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    menu.classList.toggle("menu__open");
});