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




var orderButton = document.querySelector(".promo__button");
var productItem = document.querySelectorAll(".product-item__button");
var modalPurchase = document.querySelector(".modal__container");
var modalOverlay = document.querySelector(".modal");

if (orderButton) {
orderButton.addEventListener("click", function(evt) {
evt.preventDefault();
modalOverlay.classList.remove("visually-hidden");
});
}

productItem.forEach(e =>
e.addEventListener("click", function(evt) {
evt.preventDefault();
modalOverlay.classList.remove("visually-hidden");
})
);

modalOverlay.addEventListener(
"click",
function(evt) {
if (evt.currentTarget !== evt.target) {
return;
}

modalOverlay.classList.add("visually-hidden");
},
false
);
